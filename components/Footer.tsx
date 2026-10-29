import { useRouter } from 'next/router';
import s from './Footer.module.scss';

export default function Footer() {
	const { asPath } = useRouter();

	if (asPath === '/') return null;
	return (
		<footer className={s.footer}>
			<p>
				Dipl.-Ing. (FH) Anne Meister und Team
				<br />
				Projektingenieurin / Senior Expertin
			</p>
			<p>
				<a href='tel:+491753778878'>+491753778878</a>
				<br />
				<a href='mailto:services@engineering-studio.de'>services@engineering-studio.de</a>
				<br />
				<br />
				Engineering Studio - Berlin
			</p>
			<p>
				<img src={'/images/engineering-studio-logo.svg'} className={s.elogo} />
			</p>
		</footer>
	);
}
