import Head from 'next/head'
import Footer from '@/components/Footer/Footer.js'

export default function Home() {

  return (
    <>
      <Head>
        <title>Bryce Yoder</title>
      </Head>
      <div className='pageContainer'>
        <div className='gridContainer'>
          <h1 className='title'>Programming and<br />Graphic Design</h1>
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
      `}</style>
    </>
  )
}
