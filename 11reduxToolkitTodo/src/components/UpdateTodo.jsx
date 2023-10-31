import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateTodo} from '../features/todo/todoSlice';

function UpdateTodo() {
    const [input, setInput] = useState('');
    const [selectedTodoId, setSelectedTodoId] = useState(null);
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const updateTodoHandler = () => {
        if (selectedTodoId !== null && input.trim() !== '') {
            dispatch(updateTodo({id: selectedTodoId, text: input}));
            setSelectedTodoId(null);
            setInput('');
        }
    };

    return (
        <div className="mt-4 p-4 bg-gray-200 rounded shadow-lg text-center">
            <h2 className="mb-4 text-2xl font-bold">Update Todo</h2>
            <select
                className="block mx-auto w-2/3 p-2 border border-gray-300 rounded-md mb-4"
                onChange={(e) => setSelectedTodoId(e.target.value)}
                value={selectedTodoId || ''}>
                <option value="">Select a Todo</option>
                {todos.map((todo) => (
                    <option key={todo.id} value={todo.id}>
                        {todo.text}
                    </option>
                ))}
            </select>
            <input
                type="text"
                className="block mx-auto w-2/3 p-2 border border-gray-300 rounded-md mb-4"
                placeholder="Enter new Todo text..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                onClick={updateTodoHandler}>
                Update Todo
            </button>
        </div>
    );
}

export default UpdateTodo;
