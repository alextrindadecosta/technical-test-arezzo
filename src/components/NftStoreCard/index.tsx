import PurchaseButton from '../PurchaseButton'
import { NftProps } from '../../types'

import styles from './styles.module.scss'

interface NftStoreCardProps {
  nft: NftProps;
}

export function NftStoreCard({ nft }: NftStoreCardProps) {
  return (
    <div className={styles.container}>
      <figure className={styles.nftImage}>
        <img src={nft.image.url} alt={nft.collection.name} />
      </figure>
      <div className={styles.nftInfoContainer}>
        <div className={styles.nftInfo}>
          <span className={styles.nftName}>{nft.collection.name}</span>
          <span className={styles.nftId}>#{nft.id}</span>
        </div>
        <span className={styles.nftEtherPrice}>
          <img src="/images/ether.svg" alt="ícone Ether" />
          {nft.price}
        </span>
      </div>
      <PurchaseButton nftId={nft.id} />
    </div>
  )
}