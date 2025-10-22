import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import buildMetaData from "@/lib/meta-data-builder";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = buildMetaData({
  title: "oseven GmbH",
  description: "oseven is built on technology excellence",
  keywords: [
    "AWS",
    "Cloud",
    "Azure",
    "Betrieb",
    "Analyse",
    "Optimierung",
    "Managed Service",
    "Cloud Betrieb",
    "Azure Governance",
    "Cloud Sicherheit",
    "FinOps",
    "Cloud Monitoring",
  ],
  image: {
    src: "/hero-image.webp",
    alt: "oseven Cloud Services",
  },
  url: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary`}
      >
        <Header />
        <div className={`flex flex-col flex-grow`}>
          <main className="flex-1">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
