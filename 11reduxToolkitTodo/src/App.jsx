import AddTodo from './components/AddTodo';
import RemoveTodo from './components/RemoveTodo';
import UpdateTodo from './components/UpdateTodo';

function App() {
    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">
                Learn about Redux Toolkit
            </h1>
            <AddTodo />
            <RemoveTodo />
            <UpdateTodo />
        </div>
    );
}

export default App;
