import {useState} from 'react';
import styles from './index.module.scss';
import Item from '../../molecules/Item/index';
import mockDatas from '../../templates/App/mock';
import AddTodoButton from '../../molecules/AddTodoButton'

function TaskList() {

    const [todos, setTodos] = useState(mockDatas.todoTasks);
    // const [content, setContent] = useState("");

    const editTodo = () => {
        todos[3].content = '編集しました！'
        setTodos(
            [
                ...todos
            ]
        )
    }

    return(
        <div className={styles.taskList}>
            <div className={styles.taskList__container}>
                <div className={styles.taskList__header}>
                    <h2>タスク</h2>
                </div>
                <div className={styles.taskList__body}>
                    <ul className={styles.taskList__list}>
                        {todos.map((todo) => {
                            if(!todo.doneFlag){
                                return (
                                    <Item todo={todo}/>     
                                );
                            }
                        })}
                    </ul>
                    <AddTodoButton todos={todos} setTodos={setTodos}/>
                    
                    {/* <form onSubmit={deleteTodo(todos, setTodos, content)}>
                        <input onChange={handleChange(setContent)} name="contents" value={content}/>
                        <button>削除</button>
                    </form> */}

                    <button onClick={() => editTodo()}>編集</button>
                </div>
            </div>
        </div>
    );
};

// 削除機能
const deleteTodo = (todos, setTodos, targetId) => (e) => {
    e.preventDefault();
    console.log(todos)
    const newTodos = todos.filter(todo => {
        return todo.id !== Number(targetId);
    })
    setTodos(newTodos);
    console.log(todos)
}

export default TaskList;