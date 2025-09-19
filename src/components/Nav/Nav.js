"use client"

import { useState, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import styles from './Nav.module.scss'

const Nav = () => {

    const pathname = usePathname()
    const [activeLink, setActiveLink] = useState('/');
    const [hueRotation, setHueRotation] = useState(0)

    const links = [
        {name: "Things I've Made", path: "/"},
        {name: "About Me", path: "/about"},
        {name: "Contact Me", path: "/contact"}
    ]

    useEffect(() => {
        setActiveLink(pathname)
        setHueRotation(Math.floor(Math.random() * 360) + 1)
    }, [pathname])

    return <nav className={styles.nav}>
        <div className={styles.navLinks}>
            {links.map(link => {
                return <Link 
                    href={link.path} 
                    key={link.path}
                    className={activeLink === link.path ? styles.active : ''}
                    style={{filter: `hue-rotate(${hueRotation}deg)`}}
                >
                    {link.name}
                </Link>
            })}
            <a href='https://github.com/limekiller'><img src='/github.png' alt='GitHub' /></a>
            <a href='https://www.linkedin.com/in/bryce-yoder-283503126/'><img src='/linkedin.png' alt='LinkedIn' /></a>
        </div>
    </nav>
}

export default Nav