import Head from 'next/head'
import Header from '@/components/Header/Header.js'
import StaticPage from '@/components/StaticPage/StaticPage.js'
import fs from 'fs'
import path from 'path'

export default function Contact(props) {

  const images = {
    at: {coords: [50, 50], rotate: false},
    envelope: {coords: [360, 90], rotate: false},
    phone: {coords: [340, 410], rotate: false},
    smartphone: {coords: [130, 360], rotate: false},
    facebooksucks: {coords: [260, 190], rotate: true},
    linkedin: {coords: [40, 270], rotate: true},
    github: {coords: [330, 630], rotate: true},
  }

  return (
    <>
      <Head>
        <title>Bryce Yoder | Contact</title>
      </Head>
      <div className='pageContainer'>
        <StaticPage
          title="contact"
          heading="Drop me a line"
          content={props.content}
          lineHeight='95px'
          images={images}
          bgColor='#faa'
        />
      </div>
    </>
  )
}

export async function getStaticProps(context) {

  const content = fs.readFileSync(
    path.join(process.cwd(), 'public/pages/contact.html'),
    'utf8'
  );

  return {
    props: {
      content: content
    }
  }
}
