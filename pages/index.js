import React from 'react';
import Head from 'next/head';
import Homepage from '../components/Homepage';
// import styles from '../styles/Home.module.css';

function Home(props) {
  return (
      <div className="container-fluid">
        <Head>
          <title>SpaceX</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1,viewport-fit=cover, minimum-scale=1"
          />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="SpaceX - Launches" />
          <meta name="theme-color" content="#000000" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="og:title"
            property="og:title"
            content="SpaceX - Launches"
          />
          <meta property="og:type" content="website" />
          <meta name="keywords" content="SpaceX - Launches" />
          <meta
            property="og:image"
            content="https://www.spacex.com/static/images/share.jpg"
          />
          <meta
            property="og:description"
            content="SpaceX Launches Description"
          />
          <link
            rel="icon"
            href="https://www.spacex.com/static/images/favicon.ico"
          />
        </Head>

        <main>
          <h4 className={''} role="heading">SpaceX Launch Programs</h4>
        </main>
        <Homepage {...props} />
        <footer>
          <b>Developed By:</b> Gaurav Sharma
        </footer>
      </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { params: context.query },
  };
}

export default Home;
