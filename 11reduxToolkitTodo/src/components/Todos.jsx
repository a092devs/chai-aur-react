import {motion} from 'framer-motion';
import React, {useState} from 'react';
import {GoPlus} from 'react-icons/go';
import {connect} from 'react-redux';
import {addTodos} from '../redux/reducer';

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
    };
};

const Todos = (props) => {
    const [todo, setTodo] = useState('');

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const add = () => {
        if (todo === '') {
            alert('Input is Empty');
        } else {
            props.addTodo({
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false,
            });
            setTodo('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            add();
        }
    };

    return (
        <div className="addTodos">
            <input
                type="text"
                onChange={(e) => handleChange(e)}
                onKeyPress={(e) => handleKeyPress(e)}
                className="todo-input"
                value={todo}
            />

            <motion.button
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                className="add-btn"
                onClick={() => add()}>
                <GoPlus />
            </motion.button>
            <br />
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
