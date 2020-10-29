import { motion } from 'framer-motion'
import styles from './illustration.module.scss'
import { useEffect } from 'react'

const illustrationVariants = {
    initial: {opacity: 0, x: -250, y: -250},
    enter: {
        x: 0,
        y: 1, 
        opacity: 1, 
        //transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
        opacity: 0, 
        x: -250, 
        y: -250,
        //transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1]}
    }
}

function Illustration(props) {

    const adjustScale = () => {
        if (window.innerWidth < 1600 && window.innerWidth > 1000) {
            const scaleFactor = window.innerWidth / 1600;
            document.querySelector('.'+styles.illustration).style.transform = `scale(${scaleFactor})`;
        }
    }

    useEffect(() => {
        adjustScale();
        window.onresize = () => adjustScale();
    }, []);

    return (
        <motion.div 
            className={styles.illustration}
            initial='initial'
            animate='enter'
            exit='exit'
            //variants={{ exit: { transition: { staggerChildren: 0.01 }}}}
        >
            <motion.div 
                className={styles.background} 
                id='background'
                variants={{ initial: {opacity:0, scale:0.5}, exit: {opacity:0, scale:0.5}, enter:{opacity:0.75, scale:1}}}
            />
            <style jsx global>{` .${styles.background} { background-color: ${props.bgColor}; }`}</style>
            {Object.keys(props.images).map((image, i) => (
                <>
                    <motion.img 
                        src={'/images/illustrations/' + props.title + '/' + image + '.png'}
                        id={'illustration' + i}
                        alt=''
                        className={`
                            ${props.images[image]['rotate'] ? styles.rotate : ''}
                            ${Math.random() > 0.5 ? styles.reverse : ''}
                        `}
                        variants={{ 
                            initial: {
                                opacity: 0,
                                bottom: '0px',
                                left: '0px',
                            },
                            exit: {
                                opacity: 0,
                            },
                            enter: {
                                left: props.images[image]['coords'][1],
                                bottom: props.images[image]['coords'][0],
                                opacity: 1
                            }
                        }}
                    />
                </>
            ))}
        </motion.div>
    )
}

export default Illustration
