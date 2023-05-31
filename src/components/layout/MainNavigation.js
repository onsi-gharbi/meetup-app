import { Link } from 'react-router-dom';
import styles from './MainNavigation.module.css';
function MainNavigation() {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.logo}>React Meetups</div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">All Meetups</Link>
                        </li>
                        <li>
                            <Link to="/new-meetup">Add New Meetup</Link>
                        </li>
                        <li>
                            <Link to="/favourite-meetup">Favourites</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
export default MainNavigation;
