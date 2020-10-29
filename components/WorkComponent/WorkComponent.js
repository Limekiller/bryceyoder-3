import styles from './WorkComponent.module.scss'
import { Component } from 'react'
import { InView } from 'react-intersection-observer'
import { motion } from "framer-motion"

const bodyVariants = {
    initial: {opacity: 0, x: -10},
    enter: {
        x:0, 
        opacity: 1, 
        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1]}
    },
    exit: {
        opacity: 0, 
        x: 10,
        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1]}
    }
}


export class WorkComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        }; 
    }

    handleIntersection(images, title) {
        this.props.loadImages(images, title);
    }

    render() {
        return (

            <InView 
                onChange={(isVisible) => {
                    this.setState({active: isVisible})
                    if (isVisible) {
                        this.handleIntersection(this.props.images, this.props.title)
                    }
                }}
                threshold={0.6}
                className={styles.body}
            >
                <div className={`
                    ${styles.workContainer}
                    ${this.state.active ? styles.active : ''}
                `}>            
                    <motion.div
                        dangerouslySetInnerHTML={{__html: this.props.body}}
                        variants={bodyVariants}
                        className={styles.body}
                    />
                </div>
            </InView>
        )
    }
}

export default WorkComponent