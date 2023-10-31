import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [],
};

// Load todos from local storage on application load
const savedTodos = JSON.parse(localStorage.getItem('todos'));
if (savedTodos) {
    initialState.todos = savedTodos;
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const text = action.payload.trim(); // Remove leading and trailing spaces
            if (text) {
                const todo = {
                    id: nanoid(),
                    text,
                    completed: false,
                };
                state.todos.push(todo);
                localStorage.setItem('todos', JSON.stringify(state.todos));
            }
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload;
            const existingTodo = state.todos.find((todo) => todo.id === id);
            if (existingTodo) {
                existingTodo.text = text;
                localStorage.setItem('todos', JSON.stringify(state.todos));
            }
        },
    },
});

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;

export default todoSlice.reducer;
