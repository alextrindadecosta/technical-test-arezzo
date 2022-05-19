import { useRouter } from 'next/router'
import { WalletButton } from '../WalletButton'

import styles from './styles.module.scss'

export function Header() {
  const router = useRouter()

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <img className={styles.logo} onClick={() => router.push('/')} src="/images/logo.svg" alt="logo da crypto store" />
        <WalletButton />
      </div>
    </header>
  )
}