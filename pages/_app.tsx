import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RootStateProvider } from '../stores/RootStateContext'

function MyApp({ Component, pageProps }: AppProps) {
  return <RootStateProvider>
    <Component {...pageProps} />
  </RootStateProvider>
}
export default MyApp
