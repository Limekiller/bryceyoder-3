import styles from './Header.module.scss'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion"

function Header() {
    const [mobileState, setMobileState] = useState('top')

    useEffect(() => {    
         document.addEventListener('scroll', handleScroll)
         return () => {
            document.removeEventListener('scroll', handleScroll)
         }
    });

    const handleScroll = () => {
        if (document.documentElement.scrollTop >= 50) {
            setMobileState('scrolled')
        } else if (document.documentElement.scrollTop <= 10) {
            setMobileState('top')
        }
    }

    return (
        <>
            <motion.header 
                className={`
                    pageContainer
                    ${styles.header}
                    ${styles[mobileState]}
                `}
                animate={{y: [-130, 0]}}
                transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1]}}
            >
                <div className='gridContainer'>
                    <img src="/images/fulllogo.svg" />
                    <img className={` ${styles.mobileLogo} ${styles[mobileState]} `} src="/images/monogram.svg" />
                    <nav className={` ${styles.nav} ${styles[mobileState]} `}>
                        <Link href='/' scroll={false}><a className=''>About</a></Link>
                        <Link href='/work' scroll={false}><a className=''>Work</a></Link>
                        <Link href='/contact' scroll={false}><a className=''>Contact</a></Link>
                    </nav>
                </div>
            </motion.header>
        </>
    )
}

export default Header
