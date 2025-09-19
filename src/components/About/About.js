"use client"

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Nav from '../Nav/Nav'

import styles from './About.module.scss'

const About = ({ pageData }) => {

    useEffect(() => {
        document.querySelectorAll('.techTag').forEach(elem => {
            const degrees = Math.floor(Math.random() * 19) - 9
            elem.addEventListener('mouseover', e => {
                e.target.style.transform = `scale(1.05) rotate(${degrees}deg)`
            })
            elem.addEventListener('mouseout', e => {
                e.target.style.transform = 'scale(1) rotate(0deg)'
            })
        })
    }, [])
    

    return <div className={`${styles.about} container`}>
        <div className='textPanel'>
            <div className='stickyContainer'>
                <div>
                    <h1 className='name'>BRYCE YODER</h1>
                    <h2>Designer and <br /> full-stack developer</h2>
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={1}
                        className='textContent'
                        initial={{ opacity: 0, scale: 0.99 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.99 }}
                        transition={{ duration: 0.25 }}
                    >
                        <img className={styles.profileImg} src={pageData.imgPath} alt='An image of me' />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
        <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.25 }}
        >            
            <div className={styles.textContent} dangerouslySetInnerHTML={{__html: pageData.content.text}} />
            <div className={styles.techs}>
                {pageData.content.techs.map(tech => {
                    return <a 
                        className='techTag' 
                        key={tech.name} 
                        style={{filter: `hue-rotate(${Math.floor(Math.random() * 360) + 1}deg)`}}
                        href={tech.link}
                    >
                        {tech.name}
                    </a>
                })}
            </div>
        </motion.div>
        <Nav />
    </div>
}

export default About