import Head from 'next/head';
import Link from 'next/link';
import s from './index.module.scss';
import cn from 'classnames';
import { GrDocumentPdf } from 'react-icons/gr';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
	const [page, setPage] = useState<string | null>(null);

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
					{page === 'impressum' && (
						<>
							<h3>Impressum</h3>
							<section>
								<p>Angaben gemäß § 5 DDG</p>
							</section>
							<section>
								<strong>Anbieter</strong>
								<p>
									Engineering Studio
									<br />
									Inhaberin: Anne Meister
									<br />
									c/o Werkhausen Technik
									<br />
									Köpenicker Str. 187
									<br />
									10997 Berlin
									<br />
									Deutschland
								</p>
							</section>
							<section>
								<strong>Kontakt</strong>
								<p>
									E-Mail:{' '}
									<a href='mailto:services@engineering-studio.de'>services@engineering-studio.de</a>
								</p>
							</section>
							<section>
								<strong>Umsatzsteuer-Identifikationsnummer</strong>
								<p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE416511368</p>
							</section>
							<section>
								<strong>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</strong>
								<p>
									Anne Meister
									<br />
									c/o Werkhausen Technik
									<br />
									Köpenicker Str. 187
									<br />
									10997 Berlin
								</p>
							</section>
							<section>
								<strong>Verbraucherstreitbeilegung</strong>
								<p>
									Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor
									einer Verbraucherschlichtungsstelle teilzunehmen.
								</p>
							</section>
							<section>
								<strong>Haftung für Inhalte</strong>
								<p>
									Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen
									Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir
									als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
									fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
									rechtswidrige Tätigkeit hinweisen.
								</p>
							</section>
							<section>
								<strong>Haftung für Links</strong>
								<p>
									Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
									keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
									Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
									Anbieter oder Betreiber der Seiten verantwortlich.
								</p>
							</section>
							<section>
								<strong>Urheberrecht</strong>
								<p>
									Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
									unterliegen dem deutschen Urheberrecht. Downloads und Kopien dieser Seite sind nur
									für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
									dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
									beachtet.
								</p>
							</section>
						</>
					)}
					{page === 'datenschutz' && (
						<>
							<h3>Datenschutz</h3>
							<section>
								<p>Informationen zur Verarbeitung personenbezogener Daten nach Art. 13 DSGVO</p>
							</section>
							<section>
								<strong>1. Verantwortliche</strong>
								<p>
									Verantwortlich für die Datenverarbeitung auf dieser Website ist:
									<br />
									<br />
									Engineering Studio
									<br />
									Inhaberin: Anne Meister
									<br />
									c/o Werkhausen Technik
									<br />
									Köpenicker Str. 187
									<br />
									10997 Berlin
									<br />
									Deutschland
									<br />
									E-Mail:{' '}
									<a href='mailto:services@engineering-studio.de'>services@engineering-studio.de</a>
								</p>
							</section>
							<section>
								<strong>2. Allgemeines</strong>
								<p>
									Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer
									funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.
									Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. b DSGVO (Vertrag und
									Vertragsanbahnung), Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung) und Art.
									6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Website).
								</p>
							</section>
							<section>
								<strong>3. Hosting und Server-Logfiles</strong>
								<p>
									Diese Website wird bei der Vercel Inc., 440 N Barranca Ave #4133, Covina, CA
									91723, USA, gehostet. Beim Aufruf der Website verarbeitet Vercel in unserem
									Auftrag die technisch anfallenden Daten. Mit Vercel besteht ein Vertrag über die
									Auftragsverarbeitung gemäß Art. 28 DSGVO, der die Standardvertragsklauseln der
									EU-Kommission nach Art. 46 Abs. 2 lit. c DSGVO einschließt.
								</p>
								<p>
									Bei jedem Aufruf der Website werden vom Server automatisch Informationen erfasst,
									die Ihr Browser übermittelt:
								</p>
								<ul>
									<li>IP-Adresse</li>
									<li>Datum und Uhrzeit des Zugriffs</li>
									<li>aufgerufene Seite bzw. Datei</li>
									<li>übertragene Datenmenge</li>
									<li>Referrer-URL</li>
									<li>verwendeter Browser und Betriebssystem</li>
								</ul>
								<p>
									Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und nicht zur
									Identifizierung einzelner Personen genutzt. Rechtsgrundlage ist Art. 6 Abs. 1 lit.
									f DSGVO; unser berechtigtes Interesse liegt im technisch fehlerfreien Betrieb und
									in der Sicherheit unserer Website. Die Protokolldaten werden bei Vercel nur
									kurzfristig gespeichert; die Dauer richtet sich nach dem von uns gebuchten Tarif
									und liegt zwischen einer Stunde und wenigen Tagen.
								</p>
								<p>
									Vercel setzt dabei Unterauftragsverarbeiter ein, insbesondere Amazon Web Services,
									Microsoft Azure und Google Cloud. Die aktuelle Liste ist unter{' '}
									<a href='https://security.vercel.com'>https://security.vercel.com</a> abrufbar.
								</p>
							</section>
							<section>
								<strong>4. Kontaktaufnahme per E-Mail</strong>
								<p>
									Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen übermittelten Daten
									(Name, E-Mail-Adresse, Inhalt der Nachricht) zum Zweck der Bearbeitung Ihrer
									Anfrage gespeichert und verarbeitet.
								</p>
								<p>
									Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
									Anbahnung oder Erfüllung eines Vertrags zusammenhängt. In allen übrigen Fällen
									beruht die Verarbeitung auf unserem berechtigten Interesse an der Beantwortung von
									Anfragen gemäß Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald die
									Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten
									entgegenstehen.
								</p>
							</section>
							<section>
								<strong>5. Kunden- und Vertragsdaten</strong>
								<p>
									Im Rahmen der Vertragsanbahnung und -durchführung verarbeiten wir die zur
									Erbringung unserer Leistungen erforderlichen Daten unserer Auftraggeber und
									Geschäftspartner (z. B. Name, Anschrift, Kontaktdaten, Projektdaten,
									Rechnungsdaten).
								</p>
								<p>
									Rechtsgrundlagen sind Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie Art. 6
									Abs. 1 lit. c DSGVO in Verbindung mit handels- und steuerrechtlichen
									Aufbewahrungspflichten (§ 257 HGB, § 147 AO). Danach sind Geschäftsunterlagen
									sechs bzw. zehn Jahre aufzubewahren. Eine Weitergabe an Dritte erfolgt nur, soweit
									dies zur Vertragserfüllung erforderlich ist (z. B. an Steuerberatung oder Bank)
									oder eine gesetzliche Pflicht besteht.
								</p>
							</section>
							<section>
								<strong>6. Cookies und Analyse-Tools</strong>
								<p>
									Diese Website setzt keine Cookies. Es werden keine Analyse- oder Tracking-Dienste
									eingesetzt, keine Webfonts von externen Servern geladen und keine Inhalte Dritter
									(z. B. Karten, Videos, Social-Media-Plugins) eingebettet. Es findet kein Profiling
									und keine automatisierte Entscheidungsfindung statt.
								</p>
							</section>
							<section>
								<strong>7. Empfänger von Daten</strong>
								<p>
									Eine Übermittlung Ihrer Daten an Dritte erfolgt nur, wenn dies gesetzlich
									vorgeschrieben ist, Sie eingewilligt haben oder es zur Vertragserfüllung
									erforderlich ist. Dienstleister, die in unserem Auftrag tätig werden (insbesondere
									der Hoster), sind vertraglich zur Vertraulichkeit und zur Verarbeitung
									ausschließlich nach unseren Weisungen verpflichtet.
								</p>
								<p>
									Der Hosting-Anbieter Vercel Inc. hat seinen Sitz in den USA. Die Übermittlung
									dorthin erfolgt auf Grundlage der Standardvertragsklauseln der EU-Kommission nach
									Art. 46 Abs. 2 lit. c DSGVO, die Bestandteil des Auftragsverarbeitungsvertrags mit
									Vercel sind. Weitere Empfänger Ihrer Daten bestehen nicht.
								</p>
							</section>
							<section>
								<strong>8. Ihre Rechte</strong>
								<p>
									Sie haben uns gegenüber folgende Rechte hinsichtlich der Sie betreffenden
									personenbezogenen Daten:
								</p>
								<ul>
									<li>Recht auf Auskunft (Art. 15 DSGVO)</li>
									<li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
									<li>Recht auf Löschung (Art. 17 DSGVO)</li>
									<li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
									<li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
									<li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
								</ul>
								<p>
									Zur Ausübung Ihrer Rechte genügt eine Nachricht an die oben genannte
									E-Mail-Adresse.
								</p>
							</section>
							<section>
								<strong>9. Widerspruchsrecht</strong>
								<p>
									Soweit wir Daten auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1
									lit. f DSGVO verarbeiten, haben Sie das Recht, aus Gründen, die sich aus Ihrer
									besonderen Situation ergeben, jederzeit Widerspruch gegen diese Verarbeitung
									einzulegen. Wir verarbeiten die Daten dann nicht mehr, es sei denn, wir können
									zwingende schutzwürdige Gründe nachweisen, die Ihre Interessen überwiegen.
								</p>
							</section>
							<section>
								<strong>10. Beschwerderecht bei der Aufsichtsbehörde</strong>
								<p>
									Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
									Zuständig für uns ist:
									<br />
									<br />
									Berliner Beauftragte für Datenschutz und Informationsfreiheit
									<br />
									Alt-Moabit 59–61
									<br />
									10555 Berlin
								</p>
							</section>
							<section>
								<strong>11. Verschlüsselung</strong>
								<p>
									Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung.
									Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile Ihres
									Browsers mit „https://“ beginnt.
								</p>
							</section>
							<section>
								<strong>12. Stand</strong>
								<p>
									Diese Datenschutzerklärung hat den Stand Oktober 2026. Durch die Weiterentwicklung
									unserer Website oder aufgrund geänderter gesetzlicher Vorgaben kann eine Anpassung
									erforderlich werden.
								</p>
							</section>
						</>
					)}
				</div>
			</div>
			{!page && (
				<>
					<div className={s.logos}>
						<img src={'/images/dgs-logo.svg'} className={s.dgs} />
						<Image
							src={'/images/female-engineering.png'}
							className={s.female}
							width={867}
							height={867}
							alt={'Female engineering'}
						/>
					</div>
					<div className={s.impressum}>
						<span onClick={() => setPage('impressum')}>Impressum</span>&nbsp;|&nbsp;
						<span onClick={() => setPage('datenschutz')}>Datenschutz</span>
					</div>
				</>
			)}
		</>
	);
}

//
