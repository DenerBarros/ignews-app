import type { NextPage } from 'next'
import styles from '../styles/home.module.scss';
import Head from 'next/head';
import Link from 'next/head';


const Home: NextPage = () => {
  return (
  <>
    <Head>
      <title>Inicio | ig.news</title>
    </Head>
    <h1 className={styles.title}>      
      Ola
    </h1>
  </>
  )
}

export default Home
