import { useRouter } from 'next/router';

import styles from './styles.module.scss'

export function WalletButton() {
  const router = useRouter()

  console.log(router.pathname)

  return (
    <div className={styles.container}
      onClick={() => router.push('/wallet')}>
      <div className={styles.labels}>
        <span className={styles.title}>Minha Carteira</span>
        <span className={styles.countItems}>3 itens</span>
      </div>
      <img src="/images/wallet.svg" alt="ícone de carteira"/>
    </div>
  )
}