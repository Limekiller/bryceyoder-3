"use client"

import { useState } from 'react'
import { AnimatePresence, motion } from "motion/react"
import ImgScroller from './ImgScroller/ImgScroller'
import Nav from '../Nav/Nav'

import styles from './Work.module.scss'
import Divider from '../Divider/Divider'

const Work = ({ pageData }) => {
    const [viewedProject, setViewedProject] = useState(Object.keys(pageData)[0])

    const imgArray = Object.keys(pageData).map(
        key => pageData[key].images.map(image => { return { ...image, id: key } })
    )

    return <div className={`${styles.work} container`}>
        <div className={`${styles.textPanel} textPanel`}>
            <div className={`${styles.stickyContainer} stickyContainer`}>
                <div>
                    <h1 className={`${styles.name} name`}>BRYCE YODER</h1>
                    <h2>Designer and <br /> full-stack developer</h2>
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={viewedProject}
                        className={`${styles.textContent} textContent`}
                        initial={{ opacity: 0, scale: 0.99 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.99 }}
                        transition={{ duration: 0.25 }}
                    >
                        <div className={styles.info}>
                            <span><b dangerouslySetInnerHTML={{ __html: pageData[viewedProject].name }} /></span>
                            <a 
                                target='_blank'
                                href={pageData[viewedProject].url} 
                                className={styles.url}
                            >
                                <i>{pageData[viewedProject].url}</i>
                            </a>
                            <Divider title={pageData[viewedProject].type} />
                        </div>

                        <p>{pageData[viewedProject].description}</p>
                        <div className={styles.techs}>
                            <Divider title='Technology Used' />
                            {pageData[viewedProject].tech.map(item => {
                                return <div
                                    className={styles.tech}
                                    style={{ display: 'flex', gap: '0.5rem' }}
                                    key={item}
                                >
                                    <img alt={`${item} logo`} src={`/tech/${item.toLowerCase()}.png`} width="25px" height="25px" />
                                    <span>{item}</span>
                                </div>
                            })}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
        <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.25 }}
        >
            <span className={styles.swipeLabel}>
                Swipe to view more →
            </span>
            <ImgScroller
                imgArray={imgArray}
                viewedProject={viewedProject}
                setViewedProject={setViewedProject}
            />
        </motion.div>
        <Nav />
    </div>
}

export default Work