import { useRouter } from 'next/router'

export default function Blob(props) {
    const router = useRouter()

    return (
        <>
            <div 
                className={`
                    blob
                    ${router.pathname}
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
            `}</style>
        </>
    )
}
