import Head from 'next/head'
import Menu from '@/components/Menu'
import '/styles/index.scss'
import s from './_app.module.scss'
import type { AppProps } from 'next/app'
import Grid from '@/components/Grid'

export default function App({ Component, pageProps }: AppProps) {


  return (
    <>
      <Head>
        <meta name="description" content="Qualitätssicherung Photovoltaikanlagen" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head >
      <div className={s.container}>
        <Menu />
        <main className={s.main}>
          <Component {...pageProps} />
        </main>
      </div>
      <Grid />
    </>
  )
}
