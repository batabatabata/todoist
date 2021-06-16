import {useState} from 'react';
import styles from './index.module.scss'

function AddTodoButton(props) {

    const [content, setContent] = useState("");
    const [todos, setTodos] = [props.todos, props.setTodos];
    
    return(
        <form className={styles.addForm} onSubmit={addTodo(todos, setTodos, content)}>
            <input className={styles.addForm__input} onChange={handleChange(setContent)} name="contents" value={content} placeholder="タスク名"/>
            <div className={styles.addForm__btnWrapper}>
                <button className={styles.addForm__btn}>タスクを追加</button>
                <button className={`${styles.addForm__btn} ${styles["addForm__btn--cancel"]}`}>キャンセル</button>
            </div>
        </form>
    )
}

const addTodo = (todos, setTodos, content) => (e) => {
    console.log("addTodo")
    e.preventDefault();
    const id = Math.max(...todos.map(todo => todo.id)) + 1;
    setTodos([
        ...todos, {
            id: id,
            doneFlag: false,
            content: content,
            layer: 1,
            childIds: []
        }
    ])
}

const handleChange = (setter) => (e) => {
    console.log("handleChange")
    const newValue = e.target.value;
    setter(newValue);
}

export default AddTodoButton