import s from './Menu.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';

export default function Menu() {
	const { asPath } = useRouter();

	return (
		<>
			<nav className={s.menu}>
				<div className={s.left}>
					<Link className={s.logo} href={'/'}>
						<h1>
							Engineering Studio
							<br />
							Anne Meister
						</h1>
						<div className={s.subtitle}>
							<h2>Netzanschlussverfahren Photovoltaik</h2>
						</div>
					</Link>
				</div>
				<div className={s.right}>
					<Link href={'/'} className={cn(asPath === '/' && s.selected)}>
						Home
					</Link>
					<Link href={'/news'} className={cn(asPath === '/news' && s.selected)}>
						News
					</Link>
					<Link href={'/about'} className={cn(asPath === '/about' && s.selected)}>
						About
					</Link>
				</div>
			</nav>
		</>
	);
}
