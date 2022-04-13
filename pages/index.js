import Head from 'next/head'
import Footer from '@/components/Footer/Footer.js'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

import CursiveHeader from '@/components/CursiveHeader/CursiveHeader';

export default function Home() {
  const titleToMatch = 'Designer and developer in Lancaster, PA';
  let title = '';
  const [finalTitle, setFinalTitle] = useState('')

  const addToTitle = (stringToMatch, index) => {
    title += stringToMatch[index]
    setFinalTitle(title);
    if (title != stringToMatch) {
      window.setTimeout(() => {
        addToTitle(stringToMatch, index+1)
      }, 15)
    }
  }

  useEffect(() => {
    addToTitle(titleToMatch, 0);
  }, [])

  return (
    <>
      <Head>
        <title>Bryce Yoder | Lancaster, PA-based web development</title>
      </Head>
      <div className='pageContainer'>
        <motion.div 
          initial={{opacity: 0, y: 0}}
          animate={{opacity: 1, y: 0, transition: {ease: 'easeInOut', duration: 0.5}}}
          exit={{opacity: 0, y: 0, transition: {ease: 'easeInOut', duration: 0.25}}}
        >
          <h1 className='title' dangerouslySetInnerHTML={{__html: finalTitle}} />
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 0}}
          animate={{opacity: 1, y: 0, transition: {delay: 1, ease: 'easeInOut', duration: 0.5}}}
          exit={{opacity: 0, y: 0, transition: {ease: 'easeInOut', duration: 0.25}}}
        >
          <div className='gridContainer'>
            <div>
              <CursiveHeader title="Who I am" />
              <p>
                I'm a graphic designer and full-stack web developer living in Lancaster, Pennsylvania, with extensive experience in both tried-and-true technologies like WordPress as well as modern frameworks like <a href='https://nextjs.org/'>Next.js</a> and <a href='https://twill.io/'>Twill</a>. I will work with you to find the very best fit for your website so you can stand out and focus on what you do best.
              </p>
            </div>
            <p className='noHeading'>
                From Lancaster County originally, I studied computer science and graphic design at <a href='https://goshen.edu'>Goshen College</a> and lived in Goshen, Indiana for six years. I'm also a Moodle developer and DevOps Engineer at <a href='https://moodle.us'>MoodleUS.</a>
            </p>
            <p></p>
            <h2 className='languages'>
              WordPress, React, Next.js, Vue, Laravel, Flask, Moodle, AWS, PhotoShop, Illustrator, InDesign
            </h2>

            <p></p><p></p>
            <div>
              <CursiveHeader title="What's the process?" />
              <p>
                First, we'll do an initial discovery meeting, free-of-charge, to determine your needs and budget. I'll use that information to create a contract and a creative brief, capturing everything your site needs to achieve to meet your requirements.
              </p>
            </div>
            <p className='noHeading'>
              From there, I'll present multiple mockup designs for you to choose from. Once a design is chosen, I'll get to work developing it into a real site, and we'll have periodic progress meetings so you can make sure that everything is turning out the way you want it, and make changes before it's set in stone. Before you know it, you'll have a beautiful, new website!
            </p>
          </div>
        </motion.div>

        <Footer />
      </div>

      <style jsx>{`
        .title {
          grid-column: 1 / span 4;
          font-size: 8rem;
          line-height: 7.5rem;
          text-align: center;
        }
        .languages {
          grid-column: 4;
        }
        .noHeading {
          margin-top: 5.5rem;
        }
        .gridContainer > div {
          margin-top: 2rem;
        }

        @media screen and (max-width: 950px) {
          p {
            margin-top: 1rem;
          }
          .title {
            grid-column: 1;
            font-size: 22.5vw;
            line-height: 21vw;
            margin-bottom: 3rem;
          }
          .languages {
            margin-top: 0;
            grid-column: 1;
            grid-row: 1;
          }
          .gridContainer {
            grid-template-columns: 100%;
          }
          .noHeading {
            margin-top: 0;
          }
        }
      `}</style>
    </>
  )
}
