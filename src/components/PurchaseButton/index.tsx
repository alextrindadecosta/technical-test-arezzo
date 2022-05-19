import { useCart } from '../../hooks/useCart'

import styles from './styles.module.scss'

interface PurchaseButtonProps {
  nftId: number;
}

export default function PurchaseButton({ nftId }: PurchaseButtonProps) {
  const { addNft, cart } = useCart()

  const isPurchasable = !cart.some(nft => nft.id === nftId)
  const disabledPurchase = 'disabled-' + !isPurchasable

  return (
    <button className={`${styles.button} ${styles[disabledPurchase]}`}
      onClick={() => {
        if(isPurchasable)
          addNft(nftId)
      }}>
      COMPRAR
    </button>
  )
}