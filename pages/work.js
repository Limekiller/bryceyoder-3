import Head from 'next/head'
import WorkComponent from '@/components/WorkComponent/WorkComponent.js'

export default function Work(props) {

  return (
    <>
      <Head>
        <title>Bryce Yoder | Work</title>
      </Head>
      <div className='pageContainer'>
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
            link='https://ddddddddddd.com'
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
            link='https://ddddddddddd.com'
            images={[
              '/websites/lp/images/1.jpg',
              '/websites/lp/images/2.jpg',
              '/websites/lp/images/3.jpg',
              '/websites/lp/images/4.jpg',
            ]}
          />
      </div>
    </>
  )
}