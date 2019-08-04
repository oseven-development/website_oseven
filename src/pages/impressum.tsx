/** @format */

// /** @format */

import React from 'react'
import {SvgImage, Container, Content, Seo} from '../components'
// Containers

export default () => (
  <React.Fragment>
    <Seo title="Impressum" description="Impressum" keywords="Kontakt Email" />
    <Container>
      <Content title={'Impressum'} />
    </Container>
    <Container>
      <Content subtitle={'Angaben gemäß § 5 TMG'} text={['Maximilian Hänsel', 'Nordring 171', '90409 Nürnberg']} />
    </Container>
    <Container>
      <Content subtitle={'Vertreten durch'} text={['Maximilian Hänsel', 'Steuernummer: 238/224/30791']} />
    </Container>
    <Container>
      <Content subtitle={'Kontakt'} text={['Telefon: +49(0)163-4412159', 'E-Mail: hallo@oseven.de']} />
    </Container>
    <Container>
      <Content
        subtitle={'Streitschlichtung'}
        text={[
          'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
        ]}
      />
    </Container>
    <Container>
      <Content
        subtitle={'Haftung für Inhalte'}
        text={[
          'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
          'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
        ]}
      />
    </Container>
    <Container>
      <Content
        subtitle={'Haftung für Links'}
        text={[
          'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.',
          'Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
        ]}
      />
    </Container>
    <Container>
      <Content
        subtitle={'Urheberrecht'}
        text={[
          'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.',
          'Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
        ]}
      />
    </Container>

    <Container>
      <Content title={'Datenschutz-erklärung'} />
    </Container>
    <Container>
      <Content
        subtitle={'Datenschutz'}
        text={[
          'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.',
          'Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.',
          'Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.',
        ]}
      />
    </Container>
    <Container>
      <Content
        subtitle={'Cookies'}
        text={[
          'Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.',
          'Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.',
          'Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.',
        ]}
      />
    </Container>
    <Container>
      <Content
        subtitle={'Server-Log- Files'}
        text={[
          'Beim Aufrufen dieser Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:',
          '',
          'IP-Adresse des anfragenden Rechners',
          '',
          'Datum und Uhrzeit des Zugriffs',
          '',
          'Name und URL der abgerufenen Datei',
          '',
          'Referrer URL',
          '',
          'Uhrzeit der Serveranfrage',
          '',
          'Browsertyp und Browserversion',
          '',
          'Die Möglichkeit, diese Daten auf der Rechtsgrundlage nach Art. 6 Abs. 1 S. 1 lit. f DSGVO für Zwecke wie die Gewährleistung eines reibungslosen Verbindungsaufbaus der Website, die Gewährleistung einer komfortablen Nutzung unserer Website, die Auswertung der Systemsicherheit und -stabilität sowie zu weiteren administrativen Zwecken zu nutzen, wird derzeit von uns nicht wahrgenommen. Sollten wir diese Möglichkeit künftig nutzen wollen, werden wir die erhobenen Daten in keinem Fall dafür verwenden, Rückschlüsse auf Ihre Person zu ziehen.',
        ]}
      />
    </Container>
    <Container>
      <Content
        subtitle={'SSL-Verschlüsselung'}
        text={[
          'Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.',
          'Wenn die SSL Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.',
        ]}
      />
    </Container>
    <Container>
      <Content
        subtitle={'Recht auf Auskunft, Löschung, Sperrung'}
        text={[
          'Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.',
        ]}
      />
    </Container>
    <Container>
      <Content
        subtitle={'Widerspruch Werbe-Mails'}
        text={[
          'Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.',
        ]}
      />
    </Container>
  </React.Fragment>
)
