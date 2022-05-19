import Head from 'next/head'
import { api } from '../services/api';
import { useCart } from '../hooks/useCart';
import { NftProps } from '../types'
import { NftStoreCard } from '../components/NftStoreCard'
import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'

import styles from './home.module.scss'

interface HomeProps {
  nfts: NftProps[]
}

export default function Home({ nfts }: HomeProps) {
  const [nftsCatalog, setNftsCatalog] = useState<NftProps[]>([])
  const { setCart } = useCart()

  useEffect(() => {
    setNftsCatalog(nfts)

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
          {nftsCatalog.map(nft => <NftStoreCard key={nft.id} nft={nft} />)}
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