import '../styles/globals.scss'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Blob from '@/components/Blob/Blob.js'
import Header from '@/components/Header/Header.js'
import { useEffect } from 'react';

function MyApp({ Component, pageProps, router }) {

  // Restore v9.5 fuctionality -- don't remove CSS styles on page changes.
  // This prevents a flash of unstyled content on route changes when using Framer Motion
  // https://github.com/vercel/next.js/issues/17464
  useEffect(() => {
    Array.from(
        document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')
    ).forEach(node => {
        node.removeAttribute('data-n-p');
    });
    const mutationHandler = mutations => {
        mutations.forEach(({ target }) => {
            if (target.nodeName === 'STYLE') {
                if (target.getAttribute('media') === 'x') {
                    target.removeAttribute('media');
                }
            }
        });
    };
    const observer = new MutationObserver(mutationHandler);
    observer.observe(document.head, {
        subtree: true,
        attributeFilter: ['media'],
    });
    return () => {
        observer.disconnect();
    };
  }, []);

  // Always snap to the to of the page on route changes
  // Ideally this wouldn't happen when using back button, but it *needs* to be here for general page loads.
  useEffect(() => {
    document.querySelector('.background').style.background = 'white'
    setTimeout(() => {window.scrollTo({top: 0, behavior: 'smooth'})}, 250);
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="description" content="Web design and development in Lancaster, PA" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/js/splide.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/css/splide.min.css" />

      </Head>
      <Header />
      <div className='background' />
      <Blob />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
