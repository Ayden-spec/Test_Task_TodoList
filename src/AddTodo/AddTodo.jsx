import './addtodo.css'
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import { useState } from 'react';

function AddTodo({ addTodo }) {
    const [newTodo, setNewTodo] = useState('');
    const addNewTodo = () => {
        addTodo(newTodo);
        setNewTodo('');
    }
    return (
        <header>
            <h1 className='App_title'>TodoList</h1>
            <div className="addtodo">
                <Input
                    placeholder='Text new todo'
                    value={newTodo}
                    onChange={(e) => setNewTodo(e)}
                    type='text' />
                <Button
                    placeholder='Create'
                    Click={addNewTodo}
                />
            </div>
        </header>
    )
}
export default AddTodo;