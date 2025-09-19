"use client"
import { motion } from "motion/react"
import { useEffect, useState } from 'react'

import styles from './ImgScroller.module.scss'

const ImgScroller = ({ imgArray, viewedProject, setViewedProject }) => {

    const [viewedImage, setViewedImage] = useState(imgArray[0][0].path)
    const [focusedImage, setFocusedImage] = useState(null)

    const isElementInViewport = el => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    const handleScroll = () => {
        const imgs = document.querySelectorAll('.portfolioImage')
        for (const img of imgs) {
            if (isElementInViewport(img)) {
                setViewedImage(img.dataset.src)
                setViewedProject(img.dataset.id)
                return
            }
        }
    }

    const handleTouch = () => {
        if (window.innerWidth < 675) {
            window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        document.body.style.overflowY = 'auto'
        if (focusedImage) {
            document.body.style.overflowY = 'hidden'
        }
    }, [focusedImage])

    return <div
        className={styles.ImgScroller}
        onScroll={handleScroll}
        onTouchStart={handleTouch}
    >
        {imgArray.map(category => category.map(img => {
            return <div
                key={img.path}
                data-id={img.id}
                data-src={img.path}
                className={`
                    portfolioImage 
                    ${styles.portfolioImage} 
                    ${img.path === viewedImage ? styles.active : ''}
                    ${focusedImage === img.path ? styles.focused : ''}
                `}
            >
                <motion.img
                    layout
                    transition={{
                        ease: [.34, 1.25, .61, 1.01],
                        duration: 0.4
                    }}
                    src={img.path}
                    alt={img.name}
                    key={img.path}
                    tabIndex={0}
                    onClick={() => {
                        if (img.path === viewedImage && window.innerWidth > 675) {
                            setFocusedImage(img.path)
                        }
                    }}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            setFocusedImage(img.path)
                        }
                    }}
                />
                <motion.span
                    layout
                    transition={{
                        ease: [.34, 1.25, .61, 1.01],
                        duration: 0.4
                    }}
                >
                    {img.description}
                </motion.span>
                <button
                    onClick={() => setFocusedImage(null)}
                    className={styles.close}
                >
                    <img src='/close.png' alt='Close' width='40' height='40' />
                </button>
                <a
                    href={img.path}
                    target="_blank"
                    className={`${styles.close} ${styles.popout}`}
                >
                    <img src='/popout.png' alt='Open in new tab' width='40' height='40' />
                </a>
            </div>
        }))}
        <div style={{ width: '100%', height: '20rem' }} />
        <div style={{ width: '100%', height: '20rem' }} />
    </div>
}

export default ImgScroller