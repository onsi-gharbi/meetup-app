import Card from '../ui/Card';
import styles from './MeetupItem.module.css';
function MeetupItem(props) {
    return (
        <Card>
            <li className={styles.item}>
                <div className={styles.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={styles.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={styles.actions}>
                    <button>To Favourites</button>
                </div>
            </li>
        </Card>
    );
}
export default MeetupItem;
