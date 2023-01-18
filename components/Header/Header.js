import styles from './Header.module.scss'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion"

function Header() {
    const [mobileState, setMobileState] = useState('top')
    const [scrollAmount, setscrollAmount] = useState(0)

    useEffect(() => {    
         document.addEventListener('scroll', handleScroll)
         return () => {
            document.removeEventListener('scroll', handleScroll)
         }
    });

    const handleScroll = () => {
        setscrollAmount(document.documentElement.scrollTop);
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
                    
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 3546 1917.2">
                        <style type="text/css">{`
                            .st0{enable-background:new    ;}
                        `}</style>
                        <polygon points="642.9,155.8 642.9,316.5 642.9,477.2 482.1,477.2 482.1,316.5 482.1,155.8 0,155.8 0,316.5 0,1120.1 0,1280.8 
                            160.7,1280.8 642.9,1280.8 803.6,1280.8 803.6,959.4 803.6,798.6 642.9,798.6 321.4,798.6 321.4,959.4 642.9,959.4 642.9,1120.1 
                            160.7,1120.1 160.7,316.5 321.4,316.5 321.4,477.2 321.4,637.9 482.1,637.9 642.9,637.9 803.6,637.9 803.6,477.2 803.6,316.5 
                            964.3,316.5 964.3,1441.5 0,1441.5 0,1602.2 964.3,1602.2 1125,1602.2 1125,1441.5 1125,316.5 1125,155.8 "/>
                        <g className="st0">
                            <path d="M1348.7,161.3h133.1c112.7,0,155.4,52.5,155.4,147.7v24.3c0,91.3-31.1,118.5-60.2,130.2c29.1,11.7,72.9,35.9,72.9,130.2
                                v49.5c0,108.8-45.7,167.1-159.3,167.1h-141.8V161.3z M1471.1,425.5c55.4,0,72.9-17.5,72.9-81.6v-25.3c0-54.4-19.4-74.8-67-74.8
                                h-31.1v181.7H1471.1z M1445.9,728.6h33c58.3,0,71.9-25.3,71.9-88.4v-43.7c0-63.1-15.5-90.3-79.7-90.3h-25.3V728.6z"/>
                        </g>
                        <g className="st0">
                            <path d="M1711.1,161.3H1850c99.1,0,157.4,39.8,157.4,156.4V342c0,100.1-41.8,125.3-66.1,136c36.9,17.5,59.3,44.7,59.3,133.1
                                c0,54.4-1,160.3,5.8,199.2h-97.1c-7.8-38.9-6.8-145.7-6.8-193.3c0-78.7-9.7-97.1-68-97.1h-23.3v290.5h-100.1V161.3z M1811.1,437.2
                                h23.3c52.5,0,71.9-19.4,71.9-90.3v-22.3c0-50.5-9.7-80.6-67-80.6h-28.2V437.2z"/>
                        </g>
                        <g className="st0">
                            <path d="M2157,810.2V580c0-7.8-1-12.6-2.9-21.4l-121.4-397.3h110.7c26.2,104.9,55.4,226.4,66.1,297.3h1
                                c12.6-76.7,41.8-193.3,66.1-297.3h106.9L2259,567.3c-1,3.9-1.9,10.7-1.9,24.3v218.6H2157z"/>
                            <path d="M2701,615.9v25.3c0,74.8-12.6,178.8-149.6,178.8c-120.5,0-145.7-75.8-145.7-173.9V318.6c0-100.1,45.7-167.1,147.7-167.1
                                c121.4,0,144.8,80.6,144.8,171v29.1H2598v-40.8c0-43.7-10.7-68-45.7-68c-34,0-44.7,23.3-44.7,68v342.9c0,42.7,8.7,75.8,46.6,75.8
                                c35.9,0,45.7-29.1,45.7-76.7v-36.9H2701z"/>
                            <path d="M3001.2,513.9h-142.8v204h165.2l-12.6,92.3h-252.6V161.3h250.6v93.3h-150.6v167.1h142.8V513.9z"/>
                        </g>
                        <g className="st0">
                            <path d="M1475.6,1604.3v-230.2c0-7.8-1-12.6-2.9-21.4l-121.4-397.3H1462c26.2,104.9,55.4,226.4,66.1,297.3h1
                                c12.6-76.7,41.8-193.3,66.1-297.3h106.9l-124.3,406.1c-1,3.9-1.9,10.7-1.9,24.3v218.6H1475.6z"/>
                            <path d="M2040,1127.3v303.1c0,124.3-52.5,183.6-163.2,183.6c-104.9,0-152.5-60.2-152.5-181.7v-305c0-124.3,62.2-181.7,159.3-181.7
                                C1981.7,945.7,2040,1003,2040,1127.3z M1826.3,1117.6V1444c0,54.4,19.4,79.7,55.4,79.7c38.9,0,56.3-24.3,56.3-80.6v-326.4
                                c0-51.5-15.5-79.7-56.3-79.7C1845.7,1037,1826.3,1063.2,1826.3,1117.6z"/>
                        </g>
                        <g className="st0">
                            <path d="M2113.8,955.4h138.9c138,0,171,70.9,171,191.4v249.7c0,99.1-16.5,207.9-171,207.9h-138.9V955.4z M2213.9,1518.8h32.1
                                c66.1,0,75.8-41.8,75.8-108.8v-271c0-59.3-9.7-97.1-75.8-97.1h-32.1V1518.8z"/>
                        </g>
                        <g className="st0">
                            <path d="M2738.5,1308h-142.8v204h165.2l-12.6,92.3h-252.6v-649h250.6v93.3h-150.6v167.1h142.8V1308z"/>
                        </g>
                        <g className="st0">
                            <path d="M2811.3,955.4h138.9c99.1,0,157.4,39.8,157.4,156.4v24.3c0,100.1-41.8,125.3-66.1,136c36.9,17.5,59.3,44.7,59.3,133.1
                                c0,54.4-1,160.3,5.8,199.2h-97.1c-7.8-38.9-6.8-145.7-6.8-193.3c0-78.7-9.7-97.1-68-97.1h-23.3v290.5h-100.1V955.4z M2911.4,1231.3
                                h23.3c52.5,0,71.9-19.4,71.9-90.3v-22.3c0-50.5-9.7-80.6-67-80.6h-28.2V1231.3z"/>
                        </g>
                    </svg>


                    <nav className={` ${styles.nav} ${styles[mobileState]} `}>
                        <Link rel='canonical' href='/' scroll={false}><a className=''>About</a></Link>
                        <Link rel='canonical' href='/work' scroll={false}><a className=''>Work</a></Link>
                        <a className='button' href='mailto:me@bryceyoder.com?subject=Need some web design help'>Contact</a>
                    </nav>
                </div>
            </motion.header>
        </>
    )
}

export default Header
