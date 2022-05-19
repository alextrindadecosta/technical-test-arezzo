import Head from 'next/head'
import { api } from '../services/api';
import { useCart } from '../hooks/useCart';
import { NftProps } from '../types'
import { useEffect } from 'react'
import { NftStoreCard } from '../components/NftStoreCard'
import { GetServerSideProps } from 'next'

import styles from './home.module.scss'

interface HomeProps {
  nfts: NftProps[]
}

export default function Home({ nfts }: HomeProps) {
  const { setCart } = useCart()

  useEffect(() => {
    const storagedCart = localStorage.getItem('@CryptoStore:cart');

    if (storagedCart) {
      setCart(JSON.parse(storagedCart))
    }

  }, [])

  return (
    <>
      <Head>
        <title>Home | Crypto Store</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.nftsContainer}>
          {nfts.map(nft => <NftStoreCard key={nft.id} nft={nft} />)}
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  let allNfts = [] as NftProps[]

  await api.get('/nfts')
    .then(response => response.data)
    .then((data: NftProps[]) => {
      allNfts = data
    })

  return {
    props: {
      nfts: allNfts
    }
  }
}