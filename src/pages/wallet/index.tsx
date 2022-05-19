import Head from 'next/head'
import { Summary } from '../../components/Summary'
import { useCart } from '../../hooks/useCart'
import { NftCartCard } from '../../components/NftCartCard'

import styles from './styles.module.scss'

export default function Wallet() {
  const { cart } = useCart()

  return (
    <>
    <Head>
    <title>Wallet | Crypto Store</title>
    </Head>
      <div className={styles.container}>
        <div className={styles.walletContainer}>
          <div className={styles.nftsContainer}>
            {cart.map(nft => <NftCartCard key={nft.id} nft={nft} />)}
          </div>
          <Summary />
        </div>
      </div>
    </>
  )
}