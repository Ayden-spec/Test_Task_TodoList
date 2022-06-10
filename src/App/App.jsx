import './App.css';
import AddTodo from '../AddTodo/AddTodo';
import TodoList from '../TodoList/TodoList';
import { useState } from 'react';

function App() {

  const [Todos, SetTodos] = useState([
  ]);

  const seacrTodoIndex = (id) => {
    return Todos.findIndex(element => element.id === id)
  }

  const removeTodo = (id) => {
      SetTodos(Todos.filter(element=> element.id !== id));
  }

  const completeTodo = (id) => {
    let index = seacrTodoIndex(id);
    if (index !== -1) {
      let arr = Todos;
      arr[index].completed = !arr[index].completed;
      SetTodos([...arr]);
      console.log(Todos)
    }
  }

  const addNewTodo = (e) => {
    SetTodos([...Todos, { id: Todos.length ? Todos.reverse()[0].id + 1 : 1, title: e, completed: false }]);
  }
  return (
    <div className="App">
      <AddTodo addTodo={e => addNewTodo(e)} />
      <TodoList Todos={Todos} remove={e=>removeTodo(e)} complete={e=>completeTodo(e)} />
    </div>
  );
}
export default App;
