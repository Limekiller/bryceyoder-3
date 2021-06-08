import Head from 'next/head'
import Footer from '@/components/Footer/Footer.js'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

export default function Home() {
  const titleToMatch = 'Programming and Graphic Design';
  let title = '';
  const [finalTitle, setFinalTitle] = useState('')

  const addToTitle = (stringToMatch, index) => {
    title += stringToMatch[index]
    setFinalTitle(title);
    if (title != stringToMatch) {
      window.setTimeout(() => {
        addToTitle(stringToMatch, index+1)
      }, 10)
    }
  }

  useEffect(() => {
    addToTitle(titleToMatch, 0);
  }, [])

  return (
    <motion.div 
      initial={{opacity: 0, y: 0}}
      animate={{opacity: 1, y: 0, transition: {ease: 'easeInOut', duration: 0.25}}}
      exit={{opacity: 0, y: 0, transition: {ease: 'easeInOut', duration: 0.25}}}
    >
      <Head>
        <title>Bryce Yoder</title>
      </Head>
      <div className='pageContainer'>
        <div className='gridContainer'>
          <h1 className='title' dangerouslySetInnerHTML={{__html: finalTitle}} />
          <h2 className='languages'>
            React, Next.js, Flask, Laravel, WordPress, Moodle, JavaScript, Python, PHP, Java, C#, Ansible, NGINX, Apache, AWS, PhotoShop, Illustrator, InDesign
          </h2>
          <p>
            Sup dawg. I'm a full-stack developer living in northern Indiana with experience in web development, systems administration, & graphic design. Currently, I'm a Platform Engineer at LMS hosting provider <a href='https://moonami.com'>Moonami</a>. In the past, I have been Lead Developer at grocery-delivery startup <a href='https://www.dropit.bm'>DropIt</a>, Network Technician at LMS hosting provider <a href='https://eclass4learning.com'>eClass4Learning</a>, and System Administrator at WordPress host <a href='https://mennonite.net'>Mennonite.net</a>, and continue to do freelance web design work.
          </p>
          <p>
            In April 2020 I graduated from <a href='https://goshen.edu'>Goshen College</a> with a Bachelor's in Computer Science and a minor in Graphic Design. I love the problem-solving that comes with programming, but I also have a passion for art and design. So while I greatly enjoy the mathy, algorithm side of the spectrum, I most appreciate front-end programming and the way it merges code and design. 
          </p>
        </div>
        <Footer />
      </div>
      
      <style jsx>{`
        .title {
          grid-column: 1 / span 3;
          font-size: 8.5rem;
          line-height: 6.75rem;
        }
        .languages {
          margin-top: 8rem;
          grid-column: 4;
          grid-row: 1 / span 4;
        }
        p {
          margin-top: 3rem;
        }

        @media screen and (max-width: 950px) {
          p {
            margin-top: 0;
          }
          .title {
            grid-column: 1;
            font-size: 16.5vw;
            line-height: 15vw;
            margin-bottom: 3rem;
          }
          .languages {
            margin-top: 0;
            grid-column: 1;
            grid-row: 2 / span 2;
          }
          .gridContainer {
            grid-template-columns: 100%;
          }
        }
      `}</style>
    </motion.div>
  )
}
