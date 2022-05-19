import { Header } from '../components/Header'
import { AppProps } from 'next/app'
import { CartProvider } from '../hooks/useCart'
import { ToastContainer } from 'react-toastify'

import '../styles/global.scss'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartProvider>
        <Header />
        <Component {...pageProps} />
        <ToastContainer theme='dark' autoClose={3000} position='bottom-right'/>
      </CartProvider>
    </>
  )
}

export default MyApp