import Head from 'next/head';
import Link from 'next/link';
import s from './index.module.scss';
import cn from 'classnames';
import { GrDocumentPdf } from 'react-icons/gr';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
	const [page, setPage] = useState('services');

	return (
		<>
			<Head>
				<title>Engineering Studio – News</title>
			</Head>
			<div className={s.container}>
				<div className={s.left}></div>
				<div className={s.right}>
					<h3>Aktuelles</h3>
					<section>
						<strong>Qualität von PV-Anlagen & Batteriespeichern</strong>
						<br />
						<p>
							See you in Berlin auf der Konferenz "Qualität von PV-Anlagen und Batteriespeichern" am
							5.–6. November. Mein Thema am Freitag "Risiken im Netzanschlussverfahren – Erkennen &
							Minimieren"
						</p>
						<Image src={'/images/news/berlin-050611.png'} width={908} height={112} />
					</section>
					<section>
						<strong>DGS Kurs Netzanschlussverfahren</strong>
						<br />
						<p>
							Der Kurs deckt den gesamten Netzanschlussprozess ab – von Dokumentationspflichten über
							die Abstimmung mit Netzbetreiber und Stationslieferant bis hin zu Vor-Ort-Tests,
							Direktvermarktung und Zertifizierung im Zusammenspiel mit der Parkregelung. Die
							Fortbildung eignet sich gut, um neue Mitarbeiter auf das Netzanschlussverfahren
							vorzubereiten, aber auch, um Mitarbeiter ohne bisherige Erfahrung in dem Bereich zu
							schulen oder bestehende Abläufe zu optimieren. Der Kurs kann auch als Inhouse-Schulung
							angeboten werden
						</p>
						<Image src={'/images/news/berlin-070809.png'} width={908} height={108} />
					</section>
				</div>
			</div>
		</>
	);
}
