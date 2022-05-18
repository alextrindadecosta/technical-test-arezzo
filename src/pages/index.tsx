import Head from 'next/head'
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Crypto Store</title>
      </Head>
      <h1 className={styles.title}>Hello, world!</h1>
    </>
  )
}