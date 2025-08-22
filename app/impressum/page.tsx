import React from "react";
import {
  Heading,
  Paragraph,
  List,
  ListItem,
} from "../../components/typography/Typography";
import Section from "@/components/section";
import { maxWidthCenter } from "@/static";

export default function Page() {
  return (
    <Section className={"bg-gradient-to-b from-white to-gray-300"}>
      <div className={`${maxWidthCenter} px-4 md:px-6`}>
        {/* <Seo title="Impressum" description="Impressum" keywords="Kontakt Email" /> */}
        <Heading level={1}>Impressum</Heading>
        <Heading level={3}>Angaben gemäß § 5 TMG</Heading>
        <Paragraph>
          oseven GmbH <br />
          Im Zwergfeld 13 <br />
          90427 Nürnberg
        </Paragraph>

        <Paragraph>
          Handelsregister: HRB 43513 <br />
          Registergericht: Amtsgericht Nürnberg
        </Paragraph>

        <Heading level={3}>Vertreten durch</Heading>
        <Paragraph>Geschäftsführer Maximilian Hänsel</Paragraph>
        <Heading level={3}>Kontakt</Heading>
        <Paragraph>
          Telefon: +49(0)163-4412159
          <br />
          E-Mail: max@oseven.de
        </Paragraph>

        <Heading level={3}>Umsatzsteuer</Heading>
        <Paragraph>
          Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
          <br />
          DE406003610
        </Paragraph>

        <Heading level={2}>Streitschlichtung</Heading>
        <Paragraph>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </Paragraph>
        <Heading level={2}>Haftung für Inhalte</Heading>
        <Paragraph>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
          Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
          hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
          Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
          Inhalte umgehend entfernen.
        </Paragraph>
        <Heading level={2}>Haftung für Links</Heading>
        <Paragraph>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </Paragraph>
        <Heading level={2}>Urheberrecht</Heading>
        <Paragraph>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </Paragraph>
      </div>
    </Section>
  );
}
