import Head from 'next/head'
import { Summary } from '../../components/Summary'
import { useCart } from '../../hooks/useCart'
import { useEffect } from 'react'
import { NftCartCard } from '../../components/NftCartCard'

import styles from './styles.module.scss'

export default function Wallet() {
  const { setCart, cart } = useCart()

  useEffect(() => {
    const storagedCart = localStorage.getItem('@CryptoStore:cart');

    if (storagedCart && cart.length === 0) {
      console.log('wallet setCart')
      setCart(JSON.parse(storagedCart))
    }

  }, [])

  return (
    <>
    <Head>
    <title>Wallet | Crypto Store</title>
    </Head>
      <div className={styles.container}>
        <div className={styles.walletContainer}>
          <div className={styles.nftsContainer}>
            {cart && cart.map(nft => <NftCartCard key={nft.id} nft={nft} />)}
          </div>
          <Summary />
        </div>
      </div>
    </>
  )
}