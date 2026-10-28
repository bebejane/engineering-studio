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
				<title>Engineering Studio – About</title>
			</Head>
			<div className={s.container}>
				<div className={s.left}>
					<nav className={s.menu}>
						<ul>
							<li
								className={cn(page === 'services' && s.selected)}
								onClick={() => setPage('services')}
							>
								Leistungen
							</li>
							<li
								className={cn(page === 'references' && s.selected)}
								onClick={() => setPage('references')}
							>
								Referenzen
							</li>
						</ul>
					</nav>
					<div className={s.contact}>
						<p>
							Dipl.-Ing. (FH) Anne Meister und Team
							<br />
							Senior Expertin Qualitätsmanagement und Netzanschlussverfahren Photovoltaik
						</p>
						<p>
							<a href='tel:+491753778878'>+491753778878</a>
							<br />
							<a href='mailto:services@engineering-studio.de'>services@engineering-studio.de</a>
							<br />
							<br />
							Engineering Studio - Berlin
						</p>
						<div>
							<img src={'/images/engineering-studio-logo.svg'} className={s.elogo} />
						</div>
					</div>
				</div>
				<div className={s.right}>
					{page === 'services' && (
						<>
							<h3>Leistungen</h3>
							<section>
								<strong>Netzanschlussverfahren</strong>
								<ul>
									<li>
										Erstellen und Prüfen von EPC Verträgen unter Einbindung der vergütungsrelevanten
										Netzanschlussthemen
									</li>
									<li>Netzverträglichkeitsprüfung und Netzanschlussverfahren</li>
									<li>
										Bestellung und Abstimmung Stationslieferant sowie Durchführung der
										Inbetriebnahme mit allen Projektbeteiligten
									</li>
									<li>Begleitung Anlagenzertifikat</li>
									<li>Anbindung und Auswahl Direktvermarkter</li>
									<li>Auswahl und Abschluss PPA</li>
									<li>
										Parkregelung und Initialmonitoring mit Netzbetreiber, Direktvermarkter und
										Monitoringschnittstelle
									</li>
									<li>Begleitung Konformitätserklärung</li>
								</ul>
							</section>
							<section>
								<strong>Beratung & Technische Leitung</strong>
								<ul>
									<li>
										EPC-Vertragsgestaltung unter Berücksichtigung der Netzanschlussthemen und
										vergütungsrelevanten Prozessen
									</li>
									<li>
										Unterstützung bei Entscheidungen die vergütungsrelevant sind bezogen auf EEG
									</li>
									<li>
										Entwicklung und Optimierung von Geschäftsprozessen für EPC und PVA-Entwicklern
									</li>
									<li>
										Qualitätssicherung PV mit Schwerpunkt Netzanschluss und Netzanschlussverfahren
									</li>
									<li>Mediation / Vermittlung Stakeholder</li>
									<li>
										Prozesseinbindung Netzanschlussverfahren auf Firmenebene / in Firmenstruktur
									</li>
								</ul>
							</section>
							<section>
								<strong>Qualitätssicherung & Gutachten</strong>
								<ul>
									<li>Due Diligence und Abnahmegutachten</li>
									<li>Dokumentationsprüfung gemäß VDE-AR 62446</li>
									<li>Expertenwissen für Normen und Standards</li>
								</ul>
							</section>
							<section>
								<strong>Planung</strong>
								<ul>
									<li>Ausschreibungsverfahren nach EEG</li>
									<li>Sicherung der Einspeisekapazitäten entsprechend EEG</li>
									<li>Initialmonitoring</li>
								</ul>
							</section>
						</>
					)}
					{page === 'references' && (
						<>
							<h3>Referenzen</h3>
							<section>
								<strong>Netzanschluss & Inbetriebnahme</strong>
								<ul>
									<li>
										Netzanschluss und Inbetriebnahme von PV-Großanlagen (150+ MWp), inkl. Betreuung
										des Anlagenzertifizierungsprozesses gemäß VDE-NORM
									</li>
									<li>Planung von Kraftwerksregelung gemäß VDE-NORM und TAB</li>
									<li>Kurs „Netzanschlussverfahren“, DGS</li>
								</ul>
							</section>
							<section>
								<strong>Beratung & Technische Leitung</strong>
								<ul>
									<li>Technische Leitung, Kraftwerk RPS GmbH – Mitaufbau Standort Berlin</li>
									<li>Vorplanung und Elektrofachplanung von PV-Großanlagen</li>
									<li>Beratung & Planung für E.ON Energie Deutschland GmbH, München</li>
								</ul>
							</section>
							<section>
								<strong>Qualitätssicherung & Gutachten</strong>
								<ul>
									<li>
										Gutachterliche Anlagenabnahme im Bereich Bau- und Qualitätsmanagement, 120+ MWp
										PV
									</li>
									<li>Due Diligence in der Slowakei über 30 PV-Anlagen</li>
									<li>Quality Assurance Workshop mit BSW und GIZ, Tunis, Tunesien</li>
								</ul>
							</section>
							<section>
								<strong>Internationale Projekte</strong>
								<ul>
									<li>Rockefeller Christmas Tree goes solar</li>
									<li>Building Integrated PV, New York</li>
									<li>Planung von Off-Grid-Anlagen in Tansania und Pakistan</li>
								</ul>
							</section>
						</>
					)}
				</div>
			</div>

			<Image
				src={'/images/female-engineering.png'}
				className={s.female}
				width={867}
				height={867}
				alt={'Female engineering'}
			/>
		</>
	);
}

//
