import styles from './WorkComponent.module.scss'
import { useEffect, useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import Image from 'next/image'

export default function WorkComponent(props) { 
    const [hasViewed, setHasViewed] = useState('');
    const [iframeInjected, setIframeInjected] = useState(false);
    const [viewState, setViewState] = useState('photos');
    const [isMobile, setIsMobile] = useState(false);
    
    const changeColorShade = (color, amount) => {
        return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
    }

    const changeColor = (isInView, color) => {
        if (isInView) {
            setHasViewed(styles.viewed);

            // This doesn't fire if we don't add a slight delay, for some reason
            window.setTimeout(() => {
                document.querySelector('html').style.background = color;
                document.querySelector('.blob').style.backgroundColor = changeColorShade(color, -15);
            }, 50)
        }
    }

    useEffect(() => {
        new Splide( `.splide${props.images[0].split('/')[2]}`, {
            perPage: 1,
        }).mount();
        if (window.innerWidth < 950) {
            setIsMobile(true);
        }
    }, [])

    return (
        <VisibilitySensor 
            delayedCall={true} 
            onChange={(e) => changeColor(e, props.color)}
            partialVisibility={true}
            minTopValue={isMobile ? 450 : 0}
            offset={isMobile ? {} : {bottom:600, top:400}}
        >
            <div 
                className={`
                    ${styles.work} 
                    ${hasViewed}
                    work 
                    gridContainer
                `}
                onScroll={() => console.log(isInViewport())}
            >
                <div className={styles.details}>
                    <h1>{props.title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: props.details }} />
                    <div className={styles.buttonContainer}>
                        {props.link ?
                            <a href={props.link} target='_blank' className={`button ${styles.button}`}>{props.button}</a>
                        : ''}
                        {props.button == 'Visit the live site!' ? 
                        <div className={styles.subButtons}>
                            <button
                                className={viewState == 'live' ? styles.active : ''}
                                onClick={() => {setViewState('live'); setIframeInjected(true);}}
                            >
                                <svg height="50px" width="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" x="0px" y="0px"><title>Live Video</title><g data-name="Layer 11"><path d="M11.57,23a1,1,0,0,1-.68-.27,9.28,9.28,0,0,1,0-13.46,1,1,0,0,1,1.36,1.46,7.3,7.3,0,0,0,0,10.54A1,1,0,0,1,11.57,23Zm-4,2.68a1,1,0,0,0,0-1.41,11.43,11.43,0,0,1,0-16.54A1,1,0,1,0,6.16,6.27a13.44,13.44,0,0,0,0,19.46,1,1,0,0,0,1.42-.05ZM21.1,22.73a9.28,9.28,0,0,0,0-13.46,1,1,0,1,0-1.37,1.46,7.27,7.27,0,0,1,0,10.54,1,1,0,0,0-.05,1.41,1,1,0,0,0,.74.32A1,1,0,0,0,21.1,22.73Zm4.72,3a13.41,13.41,0,0,0,0-19.46,1,1,0,0,0-1.36,1.46,11.43,11.43,0,0,1,0,16.54,1,1,0,0,0-.05,1.41,1,1,0,0,0,.73.32A1,1,0,0,0,25.82,25.73ZM18,16a2,2,0,1,0-2,2A2,2,0,0,0,18,16Zm-2,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Z"/></g></svg>
                            </button>
                            <button
                                className={viewState == 'photos' ? styles.active : ''}
                                onClick={() => setViewState('photos')}
                            >
                                <svg height="50px" width="50px" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 100" x="0px" y="0px"><title>all</title><path d="M28.19,38.67a6.56,6.56,0,1,0,6.56,6.56A6.56,6.56,0,0,0,28.19,38.67Zm50-15.85H10.67A10.7,10.7,0,0,0,0,33.48V77A10.7,10.7,0,0,0,10.67,87.7H78.22A10.7,10.7,0,0,0,88.89,77V33.48A10.7,10.7,0,0,0,78.22,22.81ZM83.56,77a5.34,5.34,0,0,1-5.33,5.33H77.4a7.56,7.56,0,0,0-1-2.66L58.63,48.88c-2.44-4.23-6.44-4.23-8.89,0L35.63,73.33,31.85,67c-2.5-4.2-6.59-4.2-9.09,0l-7.61,12.8a7.59,7.59,0,0,0-1,2.6H10.67A5.34,5.34,0,0,1,5.33,77V33.48a5.34,5.34,0,0,1,5.33-5.33H78.22a5.34,5.34,0,0,1,5.33,5.33V77Z"/><path d="M88.77,12.3H27.66a11.27,11.27,0,0,0-10.74,8l6.13,0a5.66,5.66,0,0,1,4.61-2.39H88.77a5.68,5.68,0,0,1,5.67,5.67V68.1a5.62,5.62,0,0,1-2.66,4.76c0,1.81,0,3.86,0,6A11.25,11.25,0,0,0,100,68.1V23.53A11.26,11.26,0,0,0,88.77,12.3Z"/></svg>
                            </button>
                        </div> : ''}

                    </div>
                </div>
                <div className={styles.preview}>
                    {iframeInjected ? 
                        <div style={{display: viewState == 'live' ? 'block' : 'none'}} className={styles.iframeWrap}>
                            <iframe src={props.link}></iframe>
                        </div>
                    : ''}
                    <div 
                        style={{display: viewState == 'photos' ? 'initial' : 'none'}} 
                        className={`splide${props.images[0].split('/')[2]} splide`}
                    >
                        <div className='splide__track'>
                            <div className='splide__list'>
                                {props.images.map((image, index) => {
                                    return <li className='splide__slide' key={index} ><img src={`/work${image}`} /></li>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </VisibilitySensor>
    )
}
  