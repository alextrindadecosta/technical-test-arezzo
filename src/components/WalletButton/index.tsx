import { useCart } from '../../hooks/useCart';
import { useRouter } from 'next/router';

import styles from './styles.module.scss'

export function WalletButton() {
  const router = useRouter()
  const { cart } = useCart()

  return router.pathname !== '/wallet' ? (
    <div className={styles.container}
      onClick={() => router.push('/wallet')}>
      <div className={styles.labels}>
        <span className={styles.title}>Minha Carteira</span>
        <span className={styles.countItems}>
          {cart.length} ite{cart.length > 1 || cart.length == 0 ? 'ns' : 'm'}
        </span>
      </div>
      <img src="/images/wallet.svg" alt="ícone de carteira" />
    </div>
  ) : <></>
}