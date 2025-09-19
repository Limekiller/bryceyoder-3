"use client"

import { useRef, useEffect } from 'react'
import Script from 'next/script'
import { motion, AnimatePresence } from 'motion/react'
import Nav from '../Nav/Nav'

import styles from './Contact.module.scss'

const Contact = () => {

    const scriptRoot = useRef()
    const script = `<script src="https://js.hcaptcha.com/1/api.js?cache=${Date.now()}"></script>`

    useEffect(() => {
        const range = document.createRange()
        const documentFragment = range.createContextualFragment(script)
        scriptRoot.current.append(documentFragment)
    }, [])

    return <div className={`${styles.contact} container`} ref={scriptRoot}>
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
                        <p>Whether you want to work with me or just say hi, you can fill out the form to send me an email.</p>
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
            <form
                action="https://formspree.io/f/mblavwnd"
                method="POST"
                className={styles.contactForm}
            >
                <div>
                    <label htmlFor='name'>Name</label>
                    <input id='name' name='name' size='25' type='name' />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input id='email' name='email' size='25' type='email' />
                </div>
                <div>
                    <label htmlFor='message'>Message</label>
                    <textarea id='message' name='message' size='200' rows="10" cols="50" />
                </div>
                <div className="h-captcha" data-sitekey="1afa2cfc-1966-4012-a680-818429d206ee"></div>
                <button
                    style={{ filter: `hue-rotate(${Math.floor(Math.random() * 360) + 1}deg)` }}
                >
                    Submit
                </button>
            </form>
        </motion.div>
        <Nav />
    </div>
}

export default Contact