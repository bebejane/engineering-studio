import Menu from '@/components/Menu'
import '/styles/index.scss'
import s from './_app.module.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <div className={s.container}>
      <Menu />
      <main className={s.main}>
        <Component {...pageProps} />
      </main>
    </div>
  )
}
