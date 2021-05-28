import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Blob(props) {
    const router = useRouter();
    const [pageIsLoading, setPageIsLoading] = useState(false);

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
        <>
            <div 
                className={`
                    blob
                    ${router.pathname}
                    ${pageIsLoading ? 'loading' : ''}
                `} 
            />
            <style jsx>{`
                .blob {
                    width: 45rem;
                    height: 45rem;
                    background-color: #b8fdb8;
                    background-image: url(/images/noise.jpg);
                    position: absolute;
                    border-radius: 25rem;
                    top: -380px;
                    left: -250px;
                    z-index: -1;
                    transition: background 0.4s ease;
                    background-blend-mode: overlay;
                }
                .blob.\/contact {
                    background-color: #ffe5e5;
                }
                .blob.\/work {
                    background-color: #b5edff;
                }
                .blob.loading {
                    animation: spin 10s linear infinite;
                }

                @keyframes spin {
                    from{transform:rotate(0deg);}
                    to{transform:rotate(360deg);}
                }
            `}</style>
        </>
    )
}
