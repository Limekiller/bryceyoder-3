import styles from './Header.module.scss'
import Link from 'next/link'

function Header() {
    return (
        <>
            <header className={styles.header}>
                <img src="/images/logo.png" />
                <nav className={styles.nav}>
                    <Link href='/'><a class=''>About</a></Link>
                    <Link href='/work'><a class=''>Work</a></Link>
                    <Link href='/contact'><a class=''>Contact</a></Link>
                </nav>
        </header>
        </>
    )
}

export default Header
