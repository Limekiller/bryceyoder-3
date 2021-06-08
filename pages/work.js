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
        details={`
          <p>LMPC was looking to update their old, cluttered website with a design that improved readability, reflected their new branding, and made it easy to sign up for events.</p>
          <ul>
            <li>Easy editing with WordPress</li>
            <li>Responsive design</li>
          </ul>
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
        title='Dorothy Yoder Nyce'
        details={`
          Dorothy needed a personal website to host her writing. I created a simple and streamlined design that makes it incredibly easy for anybody to access, browse, and search her work.
          <ul>
            <li>Easy editing with WordPress</li>
            <li>Automatically converts Word docs to WordPress posts</li>
            <li>Responsive design</li>
          </ul>
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
        details={`
          A website for a clinic I created from the ground-up using WordPress while living in Arequipa, Perú. Completing this project was a unique challenge, as I had to create mockups, plan features, and build the site while communicating in Spanish with the client, all on a relatively short timetable. 
          <ul>
            <li>Easy editing with WordPress</li>
            <li>Responsive design</li>
          </ul>
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
        details={`
          A mockup for a local restaurant I created as part of a class project. Straight HTML with a touch of PHP.
          <ul>
            <li>Scrapes Yelp for 5-star reviews on load</li>
            <li>Responsive design</li>
          </ul>
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
        details={`
          <p>This React/Next.js-based media server allows a user to safely and painlessly build and store a library of movies and shows, accessible from anywhere.</p>
          <ul>
            <li>Download and store media easily</li>
            <li>Manage and view in-progress downloads</li>
            <li>Movie details grabbed automatically</li>
            <li>Converts and streams unsupported media in real-time</li>
            <li>Responsive design</li>
          </ul>
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
        title='Fileshare'
        details={`
          <p>Quick project to teach myself React: your standard filesharing website. Upload files and receive a unique code to share. </p>
          <ul>
            <li>Upload and share files easily</li>
            <li>Server zips files automatically</li>
            <li>Upload progress bar with the help of websockets</li>
            <li>Files deleted after 24 hours</li>
            <li>Responsive design</li>
          </ul>
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
        title='TF2 Filter'
        details={`
          <p>Use Google's Perspective API to filter hate speech in real-time from Team Fortress 2. Product of research done for my college capstone.</p>
          <ul>
            <li>Filter hate speech from TF2 in real time</li>
            <li>Easy to run: add a few launch args to your game and open the program</li>
          </ul>
        `}
        link='https://github.com/Limekiller/TF2Filter'
        color='#FFD9D9'
        button='Check it out on GitHub!'
        images={[
          '/projects/tf2/images/1.jpg',
          '/projects/tf2/images/2.jpg',
        ]}
      />
      <WorkComponent
        title='Riverdance'
        details={`
          <p>A music streaming application for the desktop. Python backend, Electron frontend using Eel. Fetches songs from YouTube and uses youtube-dl to download the files locally and then play.</p>
          <ul>
            <li>Jukebox mode allows listeners to submit song requests to the queue via email</li>
            <li>Free and ad-free access to the entire YouTube Music library</li>
            <li>Search by song, album, artist</li>
            <li>Add entire albums to the queue at once and manage them in the queue as albums or lists of songs</li>
          </ul>
        `}
        link='https://github.com/Limekiller/riverdance'
        color='#D9E6FF'
        button='Check it out on GitHub!'
        images={[
          '/projects/riverdance/images/1.jpg',
          '/projects/riverdance/images/2.jpg',
          '/projects/riverdance/images/3.jpg',
          '/projects/riverdance/images/4.jpg',
          '/projects/riverdance/images/5.jpg',
          '/projects/riverdance/images/6.jpg',
        ]}
      />
      <WorkComponent
        title='Homeboard'
        details={`
          <p>A dashboard for your home. Login with your Google account, and display your calendar, Google Drive documents, breaking news, weather, or the time. Written in Flask. </p>
          <ul>
            <li>Movable and resizable widgets</li>
            <li>Save your dashboard to your account</li>
            <li>Customize colors and styles</li>
            <li>Easily develop more custom widgets</li>
          </ul>
        `}
        link='https://github.com/Limekiller/Homeboard'
        color='#E8E8E8'
        button='Check it out on GitHub!'
        images={[
          '/projects/homeboard/images/1.jpg',
          '/projects/homeboard/images/2.jpg',
          '/projects/homeboard/images/3.jpg',
          '/projects/homeboard/images/4.jpg'
        ]}
      />
    </>,
    'games':
    <>
      <WorkComponent
        title='Squirrelly: A GC Odyssey'
        details={`
          <p>Squirrelly is a fun, fast-paced third-person collectathon where players collect as many nuts as possible without being run over! Built in Unity with C#, with Blender being used for modeling.</p>
          <ul>
            <li>Explore campus in 3D</li>
            <li>AI reacts to your decisions and hunts you down</li>
            <li>Music streamed live from Goshen College's radio station, 91.1 The Globe</li>
          </ul>
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
      <WorkComponent
        title='Radio Control'
        details={`
          <p>Created for the Global Game Jam 2018, with theme transmissions. We combined the radio and car variety for a game where the car radio controls the steering, but only one station will give you directions. Rotate the mouse left or right to turn, and balance navigation with a continually changing radio to figure out where to go. Built in Unity with C#.</p>
          <ul>
            <li>Audio-based gameplay</li>
            <li>Lots of fun stations to listen to</li>
          </ul>
        `}
        link='https://globalgamejam.org/2018/games/radio-control'
        color='#FFEED9'
        button='Check it out on Global Game Jam'
        images={[
          '/games/radio/images/1.jpg',
          '/games/radio/images/2.jpg',
        ]}
      />
      <WorkComponent
        title='Soundwaves'
        details={`
          <p>Global Game Jam 2017: theme was "waves". We created a tech demo for a first-person exploration game entirely in the dark, navigated by sound. Built in Unity with C#.</p>
          <ul>
            <li>Unique exploration mechanics</li>
          </ul>
        `}
        link='https://globalgamejam.org/2017/games/soundwaves'
        color='#D9EBFF'
        button='Check it out on Global Game Jam'
        images={[
          '/games/soundwaves/images/1.jpg',
          '/games/soundwaves/images/2.jpg',
        ]}
      />
      <WorkComponent
        title='Cards Against Humanity'
        details={`
          <p>Nifty, dependency-free LAN-multiplayer Cards Against Humanity game that runs in the terminal. Includes group chat in separate window. Pure Python.</p>
          <ul>
            <li>Search for games on local network</li>
            <li>Integrated instant chat for players</li>
            <li>Add and edit your own cards easily</li>
          </ul>
        `}
        link='https://github.com/Limekiller/Cards-Against-Humanity'
        color='#E3FFD9'
        button='Check it out on GitHub'
        images={[
          '/games/cah/images/1.jpg',
          '/games/cah/images/2.jpg',
          '/games/cah/images/3.jpg',
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
          <div className='gridContainer buttonCatContainer'>
            <button onClick={() => setCategory('games')} className={currentCategory == 'games' ? 'active' : ''}>Games</button>
            <button onClick={() => setCategory('projects')} className={currentCategory == 'projects' ? 'active' : ''}>Projects</button>
            <button onClick={() => setCategory('websites')} className={currentCategory == 'websites' ? 'active' : ''}>Websites</button>
          </div>
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