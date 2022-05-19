import { useCart } from '../../hooks/useCart';
import { NftProps } from '../../types';

import styles from './styles.module.scss'

interface NftCartCardProps {
  nft: NftProps;
}

export function NftCartCard({ nft }: NftCartCardProps) {
  const { removeNft } = useCart();

  return (
    <div className={styles.container}>
      <img src={nft.image.thumbnailUrl} alt={nft.collection.name} />
      <div className={styles.nftInfo}>
        <div className={styles.nftInfoLabels}>
          <span className={styles.nftName}>{nft.collection.name}</span>
          <span className={styles.nftId}>#{nft.id}</span>
        </div>
        <span className={styles.nftEtherPrice}>
          <img src="/images/ether.svg" alt="ícone Ether" />
          {nft.price}
        </span>
      </div>
      <div className={styles.nftRemove} onClick={() => removeNft(nft.id)}>
        <img src="/images/trash.svg" alt="ícone de lixeira" />
      </div>
    </div>
  )
}