import styles from './StaticPage.module.scss'
import Link from 'next/link'
import { motion } from "framer-motion"
import React, { Component } from 'react'
import Illustration from '@/components/Illustration/Illustration.js'

const contentVariants = {
    initial: {opacity: 0, x: -15},
    enter: {
        x:0, 
        opacity: 1, 
        transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
        opacity: 0, 
        x: 15,
        transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1]}
    }
}

export class StaticPage extends Component {

    constructor(props) {
        super(props);
        const titleID = 'styles.' + this.props.id;
    }

    render() {
        return (
            <motion.div 
                    initial='initial'
                    animate='enter'
                    exit='exit'
                    variants={{ exit: { transition: { staggerChildren: 0.1 }}}}
            >
                <div className={styles.StaticPage}>
                    <div>
                        <Illustration 
                            images={this.props.images} 
                            title={this.props.title}
                            bgColor={this.props.bgColor}
                        />
                    </div>
                    <motion.div 
                        variants={contentVariants}
                        className={styles.text}
                    >
                        <h1>{this.props.heading}</h1>
                        <motion.div
                            dangerouslySetInnerHTML={{__html: this.props.content}} 
                            variants={contentVariants}
                        />
                    </motion.div>
                </div>
            </motion.div>
        )
    }
}

export default StaticPage