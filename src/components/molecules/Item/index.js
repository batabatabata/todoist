import styles from './index.module.scss';
import arrowIcon from '../../../arrow.png';

function Item(props) {

    const layerNum = props.todo.layer

    return(
        <>
            <li key={props.todo.id} className={`${styles.item} ${styles["item--layer" + layerNum]}`}> 
                <div className={styles.item__arrowIconWrapper}>
                    {props.todo.childIds.length? 
                        <img src={arrowIcon} className={styles.item__arrowIcon} width="10px" height="10px"/> 
                        : 
                        ""
                    }
                </div>
                <input type='radio' className={styles.item__checkbox}/>
                <div>
                    {props.todo.content}
                </div>              
            </li>
        </>
    );
}

export default Item;