import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Blob(props) {
    const router = useRouter();
    const [pageIsLoading, setPageIsLoading] = useState(false);
    const fadeDirection = props.fadeDirection ? props.fadeDirection : 'bottom right';

    const startPageLoad = () => {
        setPageIsLoading(true);
    }
    const endPageLoad = () => {
        setPageIsLoading(false);
    }

    useEffect(() => {
        router.events.on("routeChangeStart", startPageLoad);
        router.events.on("routeChangeComplete", endPageLoad);
        return () => {
            router.events.off("routeChangeStart", startPageLoad);
            router.events.off("routeChangeComplete", endPageLoad);
        }
    }, [])

    return (
        <div className='blobContainer'>
            <div 
                className={`
                    blob
                    ${router.pathname.slice(1)}
                    ${pageIsLoading ? 'loading' : ''}
                `} 
            />
            <style jsx>{`
                .blobContainer {
                    width: ${props.size ? props.size : '45rem'};
                    height: ${props.size ? props.size : '45rem'};
                    position: absolute;
                    top: ${props.top ? props.top : '-380px'};
                    left: ${props.left ? props.left : '-250px'};
                    z-index: -1;
                    mask-image: linear-gradient(to ${fadeDirection},black 40%,rgba(0,0,0,0.1) 80%);
                }
                .blob {
                    width: 100%;
                    height: 100%;
                    background-color: #b8fdb8;
                    background-image: url(/images/noise.webp);
                    border-radius: 9999rem;
                    transition: background 0.4s ease;
                    background-blend-mode: overlay;
                    animation: spin 10s linear infinite;
                    animation-play-state: paused;
                }
                .blob.contact {
                    background-color: #ffe5e5;
                }
                .blob.work {
                    background-color: #b5edff;
                }
                .blob.loading {
                    animation-play-state: running;
                }

                @keyframes spin {
                    from{transform:rotate(0deg);}
                    to{transform:rotate(360deg);}
                }
            `}</style>
        </div>
    )
}
