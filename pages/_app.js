import '../styles/globals.scss'
import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'
import Header from '@/components/Header/Header.js'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import Router from 'next/router'

function MyApp({ Component, pageProps, router }) {
  const routeChange = () => {
    // Temporary fix to avoid flash of unstyled content
    // during route transitions. Keep an eye on this
    // issue and remove this code when resolved:
    // https://github.com/vercel/next.js/issues/17464

    const tempFix = () => {
      const allStyleElems = document.querySelectorAll('style[media="x"]');
      allStyleElems.forEach((elem) => {
        elem.removeAttribute("media");
      });
    };
    tempFix();
  };

  Router.events.on("routeChangeComplete", routeChange );
  Router.events.on("routeChangeStart", routeChange );

  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="description" content="Generalist developer living in northern Indiana with experience in web development, systems administration, DevOps, and UI & graphic design." />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <Header />
    <motion.div
      animate={{opacity: [0, 1]}}
      transition={{ delay: 0.25, duration: 0.25}}
    >
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </motion.div>
    </>
  )
}

export default MyApp
