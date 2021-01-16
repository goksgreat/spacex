import React from 'react';
import Head from 'next/head';
import Homepage from '../components/Homepage';
// import styles from '../styles/Home.module.css';

function Home(props) {
  return (
    <div className='container-fluid'>
      <Head>
        <title>SpaceX</title>
        <link
          rel='icon'
          href='https://www.spacex.com/static/images/favicon.ico'
        />
      </Head>

      <main>
        <h4 className={''}>SpaceX Launch Programs</h4>
      </main>
      <Homepage {...props}/>
      <footer>
        <b>Developed By:</b> Gaurav Sharma
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {params: context.query}
  };
}

export default Home;