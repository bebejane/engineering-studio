import Head from 'next/head'
import Link from 'next/link'
import s from './index.module.scss'
import { GrDocumentPdf } from 'react-icons/gr'

export default function Home() {
  return (
    <>
      <Head>
        <title>Engineering Studio – About</title>
      </Head>
      <p className={s.pdfs}>
        <Link href="/docs/Services_Dipl._Ing.A.meister_dt.pdf"><GrDocumentPdf /> Leistungen</Link> <br />
        <Link href="/docs/References_Dipl._Ing.A.meister_dt.pdf"><GrDocumentPdf /> Referenzen</Link>
      </p>

      <h2 className={s.contact}>Kontakt</h2>
      <p>
        Dipl.-Ing. (FH) Anne Meister<br />
        Projektingenieurin
      </p>

      <p>
        Torstr. 101<br />
        10119 Berlin<br />
        <a href="mailto:a.meister@engineering-studio.de">a.meister@engineering-studio.de</a>
      </p>
    </>
  )
}
