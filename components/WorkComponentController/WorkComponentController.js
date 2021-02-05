import { Component } from 'react'
import styles from './WorkComponentController.module.scss'
import WorkComponent from '../WorkComponent/WorkComponent.js'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import Illustration from '@/components/Illustration/Illustration.js'

const buttonVariants = {
    initial: {opacity: 0, y: -10},
    enter: {
        y:0, 
        opacity: 1, 
    },
    exit: {
        opacity: 0, 
        y: -10,
        transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96]}
    }
}
const imageVariants = {
    initial: {opacity: 0, x: -10},
    enter: {
        opacity: 1, 
        x: 0,
    },
    exit: {
        opacity: 0, 
        x: 10,
        transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96]},
    }
}
const categoryVariants = {
    initial: {opacity: 0, x: -10},
    enter: {
        opacity: 1, 
        x: 0,
        transitionEnd: { display: 'block' }
    },
    exit: {
        opacity: 0, 
        x: 10,
        transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96]},
        transitionEnd: { display: 'none' }
    }
}

export class WorkComponentController extends Component {

    constructor(props) {
        super(props);
        this.loadImages = this.loadImages.bind(this);
        this.props.totalWorks.map((category, i) => {
            this.state = {
                active: 0,
                activeCat: category.title,
                activeTitle: category['works'][0]['title'],
                activeImages: 0,
                
                images: category['works'][0]['images'],
                imagesActive: false,
                showImagesMobile: false,
                timeout: null
            }
        });
    }

    handleClick(e) {
        document.querySelectorAll('button').forEach(button => {
            button.classList.remove('active');
        })
        e.target.classList.add('active');
        this.setState({
            imagesActive: false,
        })
        setTimeout(() => {
            this.setState({
                activeCat: e.target.innerHTML
            })
        }, 500)
    }

    loadImages(imageList, title) {
        if (this.state.active < 2) {
            this.setState({ active: this.state.active += 1})
            return
        }
        
        this.setState({ imagesActive: false, activeImages: 0 })

        if (this.state.timeout) {
            clearTimeout(this.state.timeout)
        }
        this.setState({
            timeout: setTimeout(() => {
                this.setState({
                    activeTitle: title,
                    images: imageList,
                    activeImages: 0,
                    timeout: null
                })
            }, 500)
        })
    }

    activateImage() {
        this.setState({
            activeImages: this.state.activeImages += 1
        })
        if (this.state.activeImages >= this.state.images.length) {
            this.setState({
                imagesActive: true,
            })
        }
    }

    toggleShowImages() {
        this.setState({
            //imagesActive: !this.state.imagesActive,
            showImagesMobile: !this.state.showImagesMobile
        })
    }
    
    render() {
        return (
            <>
                <motion.div 
                    initial='initial'
                    animate='enter'
                    exit='exit'
                    variants={{ 
                        exit: { transition: { staggerChildren: 0.1 }},
                        enter: { transition: { staggerChildren: 0.1 }}
                    }}
                >
                    <div className={styles.buttonContainer}>
                        {this.props.totalWorks.map((category, i) => {
                            return (
                                <motion.div 
                                    variants={buttonVariants}
                                    key={category.title}
                                >
                                    <button
                                        onClick={(e) => this.handleClick(e)}
                                        className={`
                                            ${i == this.props.totalWorks.length-1 ? 'active' : ''}
                                        `}
                                    >
                                        {category.title}    
                                    </button>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>

                <div className={styles.workControllerContainer}>
                    <Illustration
                        images={{}} 
                        title='work'
                        bgColor='#90adff'
                    />
                    <button 
                        className={styles.showImages}
                        onClick={() => this.toggleShowImages()}
                    >
                        {this.state.showImagesMobile ? 'Close' : 'Show Images'}
                    </button>
                    <div className={`
                        ${styles.images}
                        ${this.state.showImagesMobile ? styles.active : ''}
                    `} >
                        <motion.div 
                            initial='initial'
                            animate={this.state.imagesActive ? 'enter' : 'exit'}
                            exit='exit'
                            variants={{ 
                                exit: { transition: { staggerChildren: 0.1, transition: 0.5 }},
                                enter: { transition: { staggerChildren: 0.1, transition: 0.5 }}
                            }}
                        >
                            {this.state.images.map((image, i) => ( 
                                <motion.img
                                    variants={imageVariants}
                                    key={image}
                                    alt={'Project image ' + i}
                                    src={'/work/' + 
                                        this.state.activeCat + '/' +
                                        this.state.activeTitle + '/' +
                                        'images/' + image
                                    } 
                                    onLoad={() => this.activateImage()}
                                />
                            ))}
                        </motion.div>
                    </div>
                    <div className={styles.body} >
                        {this.props.totalWorks.map((category, i) => { 
                            return (  
                                <motion.div 
                                    initial='initial'
                                    animate={this.state.activeCat == category.title ? 'enter' : 'exit'}
                                    exit='exit'
                                    variants={categoryVariants}
                                    key={category.title}
                                >
                                    <div 
                                        data-category={category.title}
                                    >
                                        {category['works'].map(work => {
                                            return (
                                                <WorkComponent
                                                    category={category.title}
                                                    title={work.title}
                                                    body={work.body}
                                                    images={work.images}
                                                    loadImages={this.loadImages}
                                                    key={work.title}
                                                />   
                                            ) 
                                        })} 
                                    </div>
                                </motion.div>
                            )      
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default WorkComponentController
