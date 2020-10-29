import styles from './Header.module.scss'
import Link from 'next/link'

function Header() {
    return (
        <>
            <header className={styles.header}>
                <img src="/images/logo.png" />
                <nav className={styles.nav}>
                    <Link href='/' scroll={false}><a class=''>About</a></Link>
                    <Link href='/work' scroll={false}><a class=''>Work</a></Link>
                    <Link href='/contact' scroll={false}><a class=''>Contact</a></Link>
                </nav>
        </header>
        </>
    )
}

export default Header
