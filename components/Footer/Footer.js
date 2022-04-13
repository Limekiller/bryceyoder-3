import styles from './Footer.module.scss';
import Blob from '../Blob/Blob';

export default function Footer() {
    return (
        <>
            <footer className={`
                ${styles.footer} 
                gridContainer
            `}>
                <h2>Let me build you an amazing website. Email me at <a href='mailto:me@bryceyoder.com'>me@bryceyoder.com</a><br /> to get started.</h2>
                <div>
                    <hr />
                    <div className={styles.lineText}>
                        <p>{new Date().getFullYear()}</p>
                        <p className='cursive' >Built in Next.js and hosted for free on Vercel</p>
                    </div>
                </div>
            </footer>

            <div className='footerBlob'>
                <Blob top='0' left='-15rem' size='125rem' fadeDirection='top right'/>
            </div>
            <style jsx>{`
                .footerBlob {
                    overflow: hidden;
                    position: absolute;
                    width: 100vw;
                    height: 15rem;
                    left: 0;
                    margin-top: -12rem;
                    pointer-events: none;
                }

                @media screen and (max-width: 950px) {
                    .gridContainer {
                        grid-template-columns: 100%;
                    }
                    .gridContainer h2 {
                        grid-column: 1;
                    }
                    .gridContainer h2 a {
                        font-weight: 500;
                    }
                    .gridContainer h2 a:after {
                        display: none;
                    }
                }

                @media screen and (max-width: 500px) {
                    .footerBlob {
                        left: -150vw;
                        width: 300vw;
                    }
                    .gridContainer h2 a {
                        font-size: 9.5vw;
                    }
                }
            `}</style>
        </>
    )
}
