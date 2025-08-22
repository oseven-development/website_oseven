import React from "react";
import {
  Heading,
  Paragraph,
  List,
  ListItem,
} from "../../components/typography/Typography";
import { maxWidthCenter } from "@/static";
import Section from "@/components/section";

export default function Page() {
  return (
    <Section className={"bg-gradient-to-b from-white to-gray-300"}>
      <div className={`${maxWidthCenter} px-4 md:px-6`}>
        <Heading level={1}>Datenschutzerklärung</Heading>
        <Heading level={2}>Datenschutz</Heading>
        <Paragraph>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung. Die Nutzung unserer Website ist in der Regel
          ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten
          personenbezogene Daten (beispielsweise Name, Anschrift oder
          E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
          auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass
          die Datenübertragung im Internet (z.B. bei der Kommunikation per
          E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
          Daten vor dem Zugriff durch Dritte ist nicht möglich.
        </Paragraph>
        <Heading level={2}>Cookies</Heading>
        <Paragraph>
          Die Internetseiten verwenden teilweise so genannte Cookies. Cookies
          richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren.
          Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und
          sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem
          Rechner abgelegt werden und die Ihr Browser speichert. Die meisten der
          von uns verwendeten Cookies sind so genannte „Session-Cookies“. Sie
          werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies
          bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese
          Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch
          wiederzuerkennen. Sie können Ihren Browser so einstellen, dass Sie
          über das Setzen von Cookies informiert werden und Cookies nur im
          Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder
          generell ausschließen sowie das automatische Löschen der Cookies beim
          Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies
          kann die Funktionalität dieser Website eingeschränkt sein.
        </Paragraph>
        <Heading level={2}>Server-Log- Files</Heading>
        <List className="list-disc ml-6">
          <ListItem>
            Beim Aufrufen dieser Website werden durch den auf Ihrem Endgerät zum
            Einsatz kommenden Browser automatisch Informationen an den Server
            unserer Website gesendet. Diese Informationen werden temporär in
            einem sog. Logfile gespeichert. Folgende Informationen werden dabei
            ohne Ihr Zutun erfasst und bis zur automatisierten Löschung
            gespeichert:,
          </ListItem>
          <ListItem>IP-Adresse des anfragenden Rechners,</ListItem>
          <ListItem>Datum und Uhrzeit des Zugriffs,</ListItem>
          <ListItem>Name und URL der abgerufenen Datei,</ListItem>
          <ListItem>Referrer URL,</ListItem>
          <ListItem>Uhrzeit der Serveranfrage,</ListItem>
          <ListItem>Browsertyp und Browserversion,</ListItem>
          <ListItem>
            Die Möglichkeit, diese Daten auf der Rechtsgrundlage nach Art. 6
            Abs. 1 S. 1 lit. f DSGVO für Zwecke wie die Gewährleistung eines
            reibungslosen Verbindungsaufbaus der Website, die Gewährleistung
            einer komfortablen Nutzung unserer Website, die Auswertung der
            Systemsicherheit und -stabilität sowie zu weiteren administrativen
            Zwecken zu nutzen, wird derzeit von uns nicht wahrgenommen. Sollten
            wir diese Möglichkeit künftig nutzen wollen, werden wir die
            erhobenen Daten in keinem Fall dafür verwenden, Rückschlüsse auf
            Ihre Person zu ziehen.,
          </ListItem>
        </List>
        <Heading level={2}>SSL-Verschlüsselung</Heading>
        <Paragraph>
          Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der
          Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen, die
          Sie an uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. Eine
          verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
          Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und
          an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL
          Verschlüsselung aktiviert ist, können die Daten, die Sie an uns
          übermitteln, nicht von Dritten mitgelesen werden.
        </Paragraph>
        <Heading level={2}>Recht auf Auskunft, Löschung, Sperrung</Heading>
        <Paragraph>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
          gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
          und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung,
          Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen
          zum Thema personenbezogene Daten können Sie sich jederzeit unter der
          im Impressum angegebenen Adresse an uns wenden.
        </Paragraph>
        <Heading level={2}>Widerspruch Werbe-Mails</Heading>
        <Paragraph>
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
          Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
          Werbung und Informationsmaterialien wird hiermit widersprochen. Die
          Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
          Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
          Spam-E-Mails, vor.
        </Paragraph>
        <Heading level={2}>Terminvereinbarung via calendly</Heading>
        <Paragraph>
          Zur einfachen, schnellen und unkomplizierten Terminvereinbarung setzen
          wir das Tool calendly ein. Die Nutzung von calendly erfolgt zur
          Verbesserung unserer Dienstleistung für bestehende und neue Mandanten.
          Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit.
          f DSGVO dar. Bei der Verwendung des Tools werden von Ihnen persönliche
          Daten wie Name, E-Mail-Adresse und Telefonnummer abgefragt. Sie haben
          außerdem die Möglichkeit, Ihr Anliegen darzustellen und uns weitere
          Informationen zur Verfügung zu stellen. Wenn Sie das Tool nutzen,
          werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen
          dort angegebenen Informationen gespeichert und selbstverständlich im
          Internet übertragen. Die Verarbeitung der eingegebenen Daten erfolgt
          ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
          DSGVO). Für den Umgang mit den durch Verwendung von calendly erfassten
          Daten gilt diese Datenschutzerklärung sowie die Datenschutzerklärung
          des Anbieters. Die Datenschutzerklärung von calendly finden Sie unter:
          https://calendly.com/pages/privacy
        </Paragraph>

        <Heading level={2}>Bildnachweise</Heading>
        <Paragraph>
          Wir verwenden auf unserer Website Icons von Flaticon. Nachfolgend
          finden Sie die entsprechenden Quellenangaben:
        </Paragraph>
        <List className="list-disc ml-6">
          <ListItem>
            <a
              href="https://www.flaticon.com/de/kostenlose-icons/keylogger"
              title="keylogger Icons"
            >
              Keylogger Icons erstellt von Good Ware - Flaticon
            </a>
          </ListItem>
          <ListItem>
            <a
              href="https://www.flaticon.com/de/kostenlose-icons/cyber-attacke"
              title="cyber attacke Icons"
            >
              Cyber attacke Icons erstellt von Good Ware - Flaticon
            </a>
          </ListItem>
          <ListItem>
            <a
              href="https://www.flaticon.com/de/kostenlose-icons/betrug"
              title="betrug Icons"
            >
              Betrug Icons erstellt von Good Ware - Flaticon
            </a>
          </ListItem>
          <ListItem>
            <a
              href="https://www.flaticon.com/de/kostenlose-icons/anonym"
              title="anonym Icons"
            >
              Anonym Icons erstellt von Good Ware - Flaticon
            </a>
          </ListItem>
        </List>
      </div>
    </Section>
  );
}
