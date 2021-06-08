import Head from 'next/head'
import Footer from '@/components/Footer/Footer.js'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Contact(props) {
  const titleToMatch = 'Drop me a line';
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
        <title>Bryce Yoder | Contact</title>
      </Head>
      <div className='pageContainer'>
        <div className='gridContainer'>
          <h1 className='title' dangerouslySetInnerHTML={{__html: finalTitle}} />
          <h2 className='languages'>
            <span class='linkedin'><a target='_blank' href='https://www.linkedin.com/in/bryce-yoder-283503126/'>LinkedIn <svg aria-hidden="true" width='50px' height='50px' focusable="false" data-prefix="fab" data-icon="linkedin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-linkedin fa-w-14 fa-9x"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" class=""></path></svg></a>,</span>
            <span class='github'><a target='_blank' href='https://github.com/limekiller'>GitHub <svg aria-hidden="true" width='50px' height='50px' focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="svg-inline--fa fa-github fa-w-16 fa-9x"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" class=""></path></svg></a>,</span> 
            <span class='facebook'><a target='_blank' href='https://www.facebook.com/bryce.yoder.75/'>Facebook <svg aria-hidden="true" width='50px' height='50px' focusable="false" data-prefix="fab" data-icon="facebook-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-facebook-square fa-w-14 fa-9x"><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" class=""></path></svg></a></span>
          </h2>
          <p>
            My inbox is open! If you're looking to get in touch for any reason—whether that's a job offer, freelance work, or anything else—you can contact me at my email below or one of the following social networks.
          </p>
          <p>Check out my working history and resume at LinkedIn. Take a look at my projects on GitHub or try one out (I'm especially proud of Lido.) Use Facebook if you have to, I guess...</p>
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
        h2 span {
          display: inline-block;
          width: max-content;
        }
        h2 span a:after {
          display: none;
        }

        @media screen and (max-width: 950px) {
          p {
            margin-top: 0;
          }
          .title {
            grid-column: 1;
            font-size: 17vw;
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
            grid-gap: 20px;
          }
        }
      `}</style>
    </motion.div>
  )
}
