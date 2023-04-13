import s from './Menu.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useRef, useEffect } from 'react'

export default function Menu() {

  const { asPath } = useRouter()

  return (
    <>
      <nav className={s.menu} >
        <Link className={s.logo} href={'/'}>
          <h1>
            Engineering Studio<br />Anne Meister
          </h1>
          <div className={s.subtitle}>
            <h2>Qualitätssicherung Photovoltaikanlagen</h2>
          </div>
        </Link>
        <Link href={'/'} className={cn(asPath === '/' && s.selected)}>
          Home
        </Link>
        <Link href={'/about'} className={cn(asPath === '/about' && s.selected)}>
          About
        </Link>
      </nav>
    </>
  )
}
