import { Link } from 'react-router-dom';
import styles from './header.module.css';
import logoimg from '../../assets/logoimg.png';

export function Header() {
    return(
        <header className={styles.container}>
            <Link to="/" className={styles.imgmodify}>
                <img src={logoimg} alt="Logo cripto" />
            </Link>
        </header>
    )
}