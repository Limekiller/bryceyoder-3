import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={`
            ${styles.footer} 
            gridContainer
        `}>
            <h2>Got questions, a job offer, or looking to collaborate on a project? Email me at <a href='mailto:me@bryceyoder.com'>me@bryceyoder.com</a></h2>
            <div>
                <hr />
                <p>{new Date().getFullYear()}, Bryce Yoder</p>
            </div>
        </footer>
    )
}
