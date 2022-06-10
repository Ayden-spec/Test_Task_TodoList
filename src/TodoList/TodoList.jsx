import './todolist.css';

function TodoList({ remove, complete, Todos = [] }) {
    return (
        <div className='todo_list_container'>
            <ul className='todo_list_ul'>
                {
                    Todos.map(element => (
                        <li className='todo_list_li' key={element.id}>
                            <span className={element.completed && 'done'}>
                                <input className='checkbox' type="checkbox" checked={element.completed} onChange={()=>complete(element.id)}/>
                                <strong>{element.id} |</strong>
                                {element.title}
                            </span>
                            <button className="remove" onClick={()=>remove(element.id)}>&times;</button>
                        </li >
                    ))
                }
            </ul >
        </div >
    )
}
export default TodoList;