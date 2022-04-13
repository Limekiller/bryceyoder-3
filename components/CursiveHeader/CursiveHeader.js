import { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'

import styles from './CursiveHeader.module.scss'

export default function CursiveHeader(props) {

    const [hasViewed, sethasViewed] = useState(false)

    const animateLine = (isInView) => {
        if (isInView) {
            sethasViewed(true)
            console.log('ok')
        }
    }

    return <VisibilitySensor delayedCall={true} onChange={(e) => animateLine(e)}>
        <div className={styles.CursiveHeader}>
            <h3 className={`cursive ${styles.title}`}>{props.title}</h3>
            <div className={`${styles.afterBar} ${hasViewed ? styles.viewed : ''}`}/>
        </div>
    </VisibilitySensor>
}
