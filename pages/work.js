import Head from 'next/head'
import Header from '@/components/Header/Header.js'
import WorkComponent from '@/components/WorkComponent/WorkComponent.js'
import WorkComponentController from '@/components/WorkComponentController/WorkComponentController.js'
import fs from 'fs'
import path from 'path'
import { motion } from 'framer-motion'


export default function Work(props) {

  return (
    <>
      <Head>
        <title>Bryce Yoder | Work</title>
      </Head>

      <Header />
      <div class='pageContainer'>
          <WorkComponentController
            totalWorks={props.totalWorks}
          />
      </div>
    </>
  )
}

export async function getStaticProps(context) {

  let totalWorks = [];
  const projectFolders = fs.readdirSync(path.join(process.cwd(), '/public/work'));

  projectFolders.forEach((folder, i) => {
    totalWorks.push({title: folder, works: []});
    const works = fs.readdirSync(path.join(process.cwd(), '/public/work/' + folder));
    
    works.forEach((work, j) => {
      const content = fs.readFileSync(
        path.join(process.cwd(), '/public/work/' + folder + '/' + work + '/' + 'body.html'),
        'utf8'
      );
      totalWorks[i]['works'].push({title: work});
      totalWorks[i]['works'][j]['body'] = content;

      totalWorks[i]['works'][j]['images'] = [];
      const images = fs.readdirSync(path.join(process.cwd(), '/public/work/' + folder + '/' + work + '/images'));
      images.forEach((image) => {
        totalWorks[i]['works'][j]['images'].push(image);
      });
    });
  });

  return {
    props: {
      totalWorks: totalWorks
    }
  }
}
