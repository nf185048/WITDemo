import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Checkout from './Checkout'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Checkout />
    </div>
  )
}

export default Home
