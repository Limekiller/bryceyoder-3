import Head from 'next/head'
import Header from '@/components/Header/Header.js'
import StaticPage from '@/components/StaticPage/StaticPage.js'
import fs from 'fs'
import path from 'path'

export default function Home(props) {
  
  const images = {
    laptop: {coords: [340, 210], rotate: false},
    mouse: {coords: [290, 580], rotate: false},
    pen: {coords: [170, 30], rotate: false},
    pencil: {coords: [100, 200], rotate: false},
    phplogo: {coords: [30, 310], rotate: true},
    python: {coords: [100, 610], rotate: true},
    react: {coords: [350, 120], rotate: true},
    ruler: {coords: [120, 200], rotate: false},
    vscode: {coords: [40, 40], rotate: true}
  }

  return (
    <>
      <Head>
        <title>Bryce Yoder</title>
      </Head>

      <Header />
      <div class='pageContainer'>
        <StaticPage
          heading='Programming and Graphic Design'
          title='about'
          content={props.content}
          images={images}
          bgColor='#9f9'
        />
      </div>
    </>
  )
}

export async function getStaticProps(context) {

  const content = fs.readFileSync(
    path.join(process.cwd(), 'public/pages/about.html'),
    'utf8'
  );

  return {
    props: {
      content: content
    }
  }
}
