import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>Cs Skins</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/skins">Skins</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
        </header>
    )    
}

export default Header
