import Script from "next/script";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { AppWrapper } from "../ctx";

function MyApp({ Component, pageProps, router }) {
  return (
    <AppWrapper>
      <Layout>
        <Head>
          <meta
            name='keywords'
            content='Altamont, School, Publications, Students, Newspaper, Birmingham, Independent, Private, Altamont School, Beacon, Dragon, Acta Diurna'
          />
          <meta
            name='description'
            content='At The Altamont School, we embrace the importance of student voice through written and visual works. We strive to provide a safe environment for student self-expression. Below, you will find our three student publications and our excellent work.'
          />
          <meta name='language' content='EN' />
          <meta name='og:title' content='Student Publications Home' />
          <meta name='og:type' content='education' />
          <meta
            name='og:url'
            content='https://publications.altamontschool.org'
          />
          <meta name='og:image' content='./landing_bg.jpeg' />
          <meta
            name='og:site_name'
            content='Student Publications | The Altamont School'
          />
          <meta
            name='og:description'
            content='At The Altamont School, we embrace the importance of student voice through written and visual works. We strive to provide a safe environment for student self-expression. Below, you will find our three student publications and our excellent work.'
          />
          <meta
            name='twitter:card'
            content='At The Altamont School, we embrace the importance of student voice through written and visual works. We strive to provide a safe environment for student self-expression. Below, you will find our three student publications and our excellent work.'
          />
          <meta name='twitter:site' content='@AltamontSchool' />
          <meta name='twitter:title' content='Student Publications Home' />
          <meta
            name='twitter:description'
            content='Check out our great work!'
          />
          <meta name='twitter:image' content='./landing_bg.jpeg' />
        </Head>
        <Script
          strategy='lazyOnload'
          src={`https://www.googletagmanager.com/gtag/js?id=G-W0C8BZ1FL1`}
        />

        <Script strategy='lazyOnload'>
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-W0C8BZ1FL1', {
        page_path: window.location.pathname,
      });
  `}
        </Script>
        <AnimatePresence
          // exitBeforeEnter
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <motion.div
            key={router.asPath}
            // initial='pageInitial'
            // animate='pageAnimate'
            // variants={{
            //   pageInitial: {
            //     opacity: 0,
            //     transition: {
            //       duration: 0.5,
            //       when: "beforeChildren",
            //     },
            //   },
            //   pageAnimate: {
            //     opacity: 1,
            //     transition: {
            //       duration: 0.5,
            //       when: "afterChildren",
            //     },
            //   },
            // }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
