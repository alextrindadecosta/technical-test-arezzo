import { useCart } from '../../hooks/useCart'
import { formatPrice, convertToBRL } from '../../util/format'

import styles from './styles.module.scss'

export function Summary() {
  const { cart } = useCart()

  const totalEther =
    parseFloat(cart.reduce((sumTotalEther, nft) => {
      sumTotalEther += nft.price

      return sumTotalEther
    }, 0).toFixed(2))

  return (
    <div className={styles.container}>
      <h1>Resumo</h1>
      <div className={styles.nftsSummary}>
        {cart.map(nft => (
          <div key={nft.id} className={styles.nftSummaryLine}>
            <span className={styles.nftId}>#{nft.id}</span>
            <span className={styles.nftEtherPrice}>
              <img src="/images/ether.svg" alt="ícone Ether" />
              {nft.price}
            </span>
            <span className={styles.BRLTotal}>
              {formatPrice(convertToBRL(nft.price))}
            </span>
          </div>
        ))}
      </div>
      <div className={styles.nftSummaryLine}>
        <h2>Total</h2>
        <span className={styles.nftEtherPrice}>
          <img src="/images/ether.svg" alt="ícone Ether" />
          {totalEther}
        </span>
        <span className={styles.BRLTotal}>
          {formatPrice(convertToBRL(totalEther))}
        </span>
      </div>
    </div>
  )
}