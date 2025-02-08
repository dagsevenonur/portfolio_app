import styles from './header.module.scss'
import Link from '../link/link'
import Icon from '../icon/icon'

function Header() {
  return (
    <header className={styles.container}>
        <div className={styles.logo}>
            <Link page="/">
                <h1>MyPortfolio</h1>
            </Link>
        </div>
        <div className={styles.menu}>
            <Link page="/">Home</Link>
            <Link page="/about">About</Link>
            <Link page="/contact">Contact</Link>
            <Link page="/login" className={styles.login}>
                <Icon name="CiLogin" />
                <span>Login</span>
            </Link>
        </div>
    </header>
  )
}

export default Header;
