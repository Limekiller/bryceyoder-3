import GiftBox from '@/components/GiftBox/GiftBox'
import { Router, useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Contact() {
    const router = useRouter()

    useEffect(() => {
        const canvasEl = document.querySelector('#canvas');

        const w = canvasEl.width = window.innerWidth;
        const h = canvasEl.height = window.innerHeight * 2;

        function loop() {
            requestAnimationFrame(loop);
            ctx.clearRect(0,0,w,h);
            
            confs.forEach((conf) => {
                conf.update();
                conf.draw();
            })
        }

        function Confetti () {
            //construct confetti
            const colours = ['#fde132', '#009bde', '#ff6b00'];
            
            this.x = Math.round(Math.random() * w);
            this.y = Math.round(Math.random() * h)-(h/2);
            this.rotation = Math.random()*360;

            const size = Math.random()*(w/60);
            this.size = size < 15 ? 15 : size;

            this.color = colours[Math.floor(colours.length * Math.random())];

            this.speed = this.size/7;
            
            this.opacity = Math.random();

            this.shiftDirection = Math.random() > 0.5 ? 1 : -1;
        }

        Confetti.prototype.border = function() {
            if (this.y >= h) {
                    this.y = h;
                }
            }

            Confetti.prototype.update = function() {
            this.y += this.speed;
            
            if (this.y <= h) {
                this.x += this.shiftDirection/3;
                this.rotation += this.shiftDirection*this.speed/100;
            }

            if (this.y > h) this.border();
        };

        Confetti.prototype.draw = function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, this.rotation, this.rotation+(Math.PI/2));
            ctx.lineTo(this.x, this.y);
            ctx.closePath();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;
            ctx.fill();
        };

        const ctx = canvasEl.getContext('2d');
        const confNum = Math.floor(w / 4);
        const confs = new Array(confNum).fill().map(_ => new Confetti());

        window.setTimeout(loop, 8000);

    }, [])

    return (
        <>
            <div className='background'>
                <canvas id="canvas"></canvas>
                <GiftBox link={router.query.image} />
            </div>
            <style jsx>{`
                .background {
                    background: white;
                    z-index: 999;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: fixed;
                    width: 100vw;
                    height: 100vh;
                    left: 0;
                    top: 0;
                }
                canvas {
                    position: absolute;
                    opacity: 0;
                    animation: fade-in 2s 8s ease forwards;
                }
                @keyframes fade-in {
                    from {opacity: 0;}
                    to {opacity: 1;}
                }
            `}</style>
        </>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}
  
