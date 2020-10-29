import '../styles/globals.scss'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
    </Head>
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
    </>
  )
}

export default MyApp
