import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeTodo} from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <div className="text-center">
            <div className="mb-4 text-3xl font-bold">Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mx-auto w-2/3 mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}>
                        <div className="text-white">{todo.text}</div>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600 text-md">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
