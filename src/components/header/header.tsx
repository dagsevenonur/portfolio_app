import styles from './header.module.scss'

function Header() {
  return (
    <header className={styles.container}>
        <div className={styles.logo}>
            <h1>MyPortfolio</h1>
        </div>
        <div className={styles.menu}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

        </div>
        <div className={styles.user}>
            <button>Login</button>
            <button>Register</button>
        </div>
    </header>
  )
}

export default Header;
