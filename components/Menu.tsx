import s from './Menu.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';
import type { MouseEvent } from 'react';

export default function Menu() {
	const { pathname } = useRouter();

	const handleClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
		if (pathname !== href) return;

		e.preventDefault();
		window.history.pushState(null, '', href);
		window.dispatchEvent(new HashChangeEvent('hashchange'));
	};

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
							<h2>Qualitätssicherung und Netzanschlussverfahren</h2>
						</div>
					</Link>
				</div>
				<div className={s.right}>
					<Link
						href={'/'}
						className={cn(pathname === '/' && s.selected)}
						onClick={(e) => handleClick(e, '/')}
					>
						Home
					</Link>
					<Link
						href={'/news'}
						className={cn(pathname === '/news' && s.selected)}
						onClick={(e) => handleClick(e, '/news')}
					>
						News
					</Link>
					<Link
						href={'/about'}
						className={cn(pathname === '/about' && s.selected)}
						onClick={(e) => handleClick(e, '/about')}
					>
						About
					</Link>
				</div>
			</nav>
		</>
	);
}
