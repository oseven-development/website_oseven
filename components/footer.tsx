import Link from "next/link";
import Image from "next/image";
import { maxWidthCenter } from "@/static";

export default function Footer() {
  return (
    <footer className={`${maxWidthCenter} text-white py-8 px-4`}>
      <div className="grid grid-cols-2 py-8 border-b border-gray-700">
        <div>
          <Link className="" href="/">
            <Image
              src={"/logo-oseven-07.svg"}
              alt="CloudConsult Pro Logo"
              width={160}
              height={60}
            />
          </Link>
        </div>
        <div></div>
      </div>
      <nav className="py-6">
        <div className="grid grid-cols-5">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/projekte"
          >
            Projekte
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/ressourcen"
          >
            Ressourcen
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/jobs"
          >
            Jobs
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/about-us"
          >
            Über Uns
          </Link>
        </div>
      </nav>

      <div className="grid grid-cols-2">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} oseven GmbH. Alle Rechte vorbehalten.
        </p>

        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/impressum"
          >
            Impressum
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/datenschutz"
          >
            Datenschutz
          </Link>
        </nav>
      </div>
    </footer>
  );
}
// flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t
