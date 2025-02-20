import { Cloud, Server, Shield, Globe2, Zap, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Experten für Cloud-Beratung
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Spezialisierte Beratungsdienste für AWS, Microsoft Azure und
                  Google Cloud Platform. Transformieren Sie Ihr Unternehmen mit
                  cloud-nativen Lösungen.
                </p>
              </div>
              <div className="space-x-4">
                {/* <Button className="bg-primary" size="lg">
                Jetzt starten
              </Button>
              <Button variant="outline" size="lg">
                Mehr erfahren
              </Button> */}
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Unsere Cloud-Dienstleistungen
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Umfassende Cloud-Lösungen, die auf Ihre Geschäftsanforderungen
                  zugeschnitten sind
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Server className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AWS-Beratung</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Fachkundige Beratung zu Amazon Web Services Infrastruktur, von
                  Migration bis Optimierung
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Globe2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Azure-Lösungen</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Microsoft Azure Implementierung und Verwaltung für
                  Unternehmensanwendungen
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Cloud className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Google Cloud Platform</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Nutzen Sie die neueste Technologie von GCP für Ihre
                  geschäftliche Innovation
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Warum uns wählen?
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Wir bringen jahrelange Erfahrung in der Cloud-Architektur
                    und Implementierung mit.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start space-x-4">
                    <Shield className="mt-1 h-6 w-6 text-primary" />
                    <div className="space-y-1">
                      <h3 className="font-bold">Sicherheit zuerst</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Sicherheitsimplementierungen in Unternehmensqualität
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Zap className="mt-1 h-6 w-6 text-primary" />
                    <div className="space-y-1">
                      <h3 className="font-bold">Leistung</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Optimierte Cloud-Infrastruktur
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Users className="mt-1 h-6 w-6 text-primary" />
                    <div className="space-y-1">
                      <h3 className="font-bold">Expertenteam</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Zertifizierte Cloud-Profis
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Cloud className="mt-1 h-6 w-6 text-primary" />
                    <div className="space-y-1">
                      <h3 className="font-bold">Multi-Cloud</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Plattformübergreifende Expertise
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Bereit loszulegen?</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Kontaktieren Sie uns für eine kostenlose Beratung und lassen
                    Sie uns Ihre Cloud-Strategie besprechen.
                  </p>
                </div>
                {/* <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-4">
                  <Input placeholder="Ihr Name" type="text" />
                  <Input placeholder="Ihre E-Mail" type="email" />
                  <Button type="submit" className="w-full">
                    Beratung anfordern
                  </Button>
                </form>
              </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} oseven GmbH. Alle Rechte vorbehalten.
        </p>
        {/* <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Datenschutzrichtlinie
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Nutzungsbedingungen
          </Link>
        </nav> */}
      </footer>
    </div>
  );
}
