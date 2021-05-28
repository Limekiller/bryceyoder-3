import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <>
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
            <style jsx>{`
                @media screen and (max-width: 950px) {
                    .gridContainer {
                        grid-template-columns: 100%;
                    }
                    .gridContainer h2 {
                        grid-column: 1;
                    }
                    .gridContainer h2 a {
                        font-size: 9vw;
                        font-weight: 600;
                    }
                    .gridContainer h2 a:after {
                        top: 14vw;
                    }
                }
            `}</style>
        </>
    )
}
