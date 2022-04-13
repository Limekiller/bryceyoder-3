import Head from 'next/head'
import WorkComponent from '@/components/WorkComponent/WorkComponent.js'
import Footer from '@/components/Footer/Footer.js'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Work(props) {
  const [currentCategory, setCurrentCategory] = useState('websites');

  // This is very silly... but if we switch directly from one category to another,
  // it's so fast that the animation doesn't replay -- so the background color doesn't change, for example
  // to deal with this, I'm first switching to a category that "clears" the state and then switching back very quickly, forcing the animation
  const setCategory = (category) => {
    setCurrentCategory('transition');
    setTimeout(() => setCurrentCategory(category), 10);
  }

  const dyanmicHTMLObj = {
    'websites':
    <>
      <WorkComponent
        title='Lombard Mennonite Peace Center'
        type='Client work'
        details={`
          <p>LMPC was looking to update their old, cluttered website with a design that improved readability, reflected their new branding, and made it easy to sign up for events.</p>
        `}
        link='https://lmpeacecenter.org'
        color='#d9f6ff'
        button='Visit the live site!'
        images={[
          '/websites/lmpc/images/0.png',
          '/websites/lmpc/images/1.png'
        ]}
      />

      <WorkComponent
        title='Beth Oberholtzer Design'
        type='Client work'
        details={`
          <p>Beth wanted a website to display her books and host her portfolio, promoting her work to both readers and clients.</p>
        `}
        link='https://bethoberholtzerdesign.com'
        color='#D9FFDB'
        button='Visit the live site!'
        images={[
          '/websites/bod/images/0.png',
          '/websites/bod/images/1.png',
          '/websites/bod/images/2.png'
        ]}
      />

      <WorkComponent
        title='Dorothy Yoder Nyce'
        type='Client work'
        details={`
          Dorothy needed a personal website to host her writing. I created a simple and streamlined design that makes it incredibly easy for anybody to access, browse, and search her work.
        `}
        link='https://dorothyyodernyce.com'
        color='#FFE7D9'
        button='Visit the live site!'
        images={[
          '/websites/dyn/images/0.jpg',
          '/websites/dyn/images/1.jpg',
          '/websites/dyn/images/2.png',
        ]}
      />

      <WorkComponent
        title='Policlínico Vásquez'
        type='Client work'
        details={`
          A website for a clinic I created from the ground-up using WordPress while living in Arequipa, Perú. Completing this project was a unique challenge, as I had to create mockups, plan features, and build the site while communicating in Spanish with the client, all on a relatively short timetable.
        `}
        color='#D9FFF4'
        button='Check it out on GitHub!'
        images={[
          '/websites/policlinico/images/1.jpg',
          '/websites/policlinico/images/2.jpg',
          '/websites/policlinico/images/3.jpg',
          '/websites/policlinico/images/4.jpg',
        ]}
      />

      <WorkComponent
        title='Los Primos'
        type='Personal project'
        details={`
          A mockup for a local restaurant I created as part of a class project. Straight HTML with a touch of PHP.
        `}
        color='#EEFFD9'
        button='Check it out on GitHub!'
        link='https://github.com/Limekiller/Los-Primos'
        images={[
          '/websites/lp/images/1.jpg',
          '/websites/lp/images/2.jpg',
          '/websites/lp/images/3.jpg',
          '/websites/lp/images/4.jpg',
        ]}
      />
    </>,
    'projects':
    <>
      <WorkComponent
        title='Lido'
        type='Personal project'
        details={`
          <p>This React/Next.js-based media server allows a user to safely and painlessly build and store a library of movies and shows, accessible from anywhere.</p>
        `}
        link='https://github.com/Limekiller/lido'
        color='#FFFBD9'
        button='Set it up yourself!'
        images={[
          '/projects/lido/images/1.png',
          '/projects/lido/images/2.png',
          '/projects/lido/images/3.jpg'
        ]}
      />

      <WorkComponent
        title='OpenAI Chat Block'
        type='Moodle development'
        details={`
          <p>This Moodle block allows users to get 24/7 chat support through OpenAI's GPT-3 predictive text model. The prompt is fully customizable, allowing an admin to give the AI any personality they want.</p>
        `}
        link='https://github.com/Limekiller/moodle-block_openai_chat'
        color='#FFFFFF'
        button='Install on your Moodle site'
        images={[
          '/projects/block_openai_chat/1.webp',
          '/projects/block_openai_chat/2.webp',
        ]}
      />

      <WorkComponent
        title='local_gitplugins'
        type='Moodle development'
        details={`
          <p>This Moodle plugin allows administrators to install plugins on GitHub directly to their site through the UI.</p>
        `}
        link='https://github.com/Limekiller/moodle-local_gitplugins'
        color='#FFFFFF'
        button='Install on your Moodle site'
        images={[
          '/projects/local_gitplugins/1.webp',
          '/projects/local_gitplugins/2.webp',
        ]}
      />

      <WorkComponent
        title='Fileshare'
        type='Personal project'
        details={`
          <p>Upload files and receive a unique code to share. </p>
        `}
        link='http://fileshare.bryceyoder.com'
        color='#D9FFF6'
        button='Visit the live site!'
        images={[
          '/projects/fileshare/images/1.jpg',
          '/projects/fileshare/images/2.jpg',
          '/projects/fileshare/images/3.jpg'
        ]}
      />
      <WorkComponent
        title='Squirrelly: A GC Odyssey'
        type='College project'
        details={`
          <p>Squirrelly is a fun, fast-paced third-person collectathon where players collect as many nuts as possible without being run over! Built in Unity with C#, with Blender being used for modeling.</p>
        `}
        color='#DED9FF'
        button=''
        images={[
          '/games/squirrelly/images/1.jpg',
          '/games/squirrelly/images/2.jpg',
          '/games/squirrelly/images/4.jpg',
          '/games/squirrelly/images/5.jpg',
        ]}
      />
    </>,
    'transition': <div style={{height: '100vh'}} />
  }

  useEffect(() => {
    return () => {
      document.querySelector('.blob').style.background = '';
      document.querySelector('html').style.background = '';
    }
  }, [])

  return (
    <motion.div
      initial={{opacity: 0, y: 0}}
      animate={{opacity: 1, y: 0, transition: {ease: 'easeInOut', duration: 0.25}}}
      exit={{opacity: 0, y: 0, transition: {ease: 'easeInOut', duration: 0.25}}}
    >
      <Head>
        <title>Bryce Yoder | Work</title>
      </Head>
      <div className='pageContainer'>
          <motion.div 
            initial={{opacity: 0, y: 0}}
            animate={{opacity: 1, y: 0, transition: {delay: 0.25, ease: 'easeInOut', duration: 0.5}}}
            exit={{opacity: 0, y: 0, transition: {ease: 'easeInOut', duration: 0.25}}}
            className='gridContainer buttonCatContainer'
          >
            <button onClick={() => setCategory('websites')} className={currentCategory == 'websites' ? 'active' : ''}>Websites</button>
            <button onClick={() => setCategory('projects')} className={currentCategory == 'projects' ? 'active' : ''}>Other projects</button>
          </motion.div>
          {dyanmicHTMLObj[currentCategory]}
        <Footer />
      </div>
      <style jsx>{`
        @media screen and (max-width: 950px) {
          .buttonCatContainer {
            grid-template-columns: auto auto auto;
          }
        }
      `}</style>
    </motion.div>
  )
}