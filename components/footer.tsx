import Link from "next/link";
import Image from "next/image";
import { maxWidthCenter } from "@/static";
import navigation from "@/navigation";

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
      <nav className="py-6 border-b border-gray-700">
        {/* <div className="grid grid-cols-5">
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
        </div> */}

        <div className={`flex flex-col md:flex-row`}>
          {navigation.map((item) => (
            <div
              key={`mega-menu-mobile-${item.name}`}
              className="space-y-2 w-full border-b border-gray-700 md:border-none py-4 md:py-0"
            >
              {item.submenu ? (
                <div className="flex flex-col space-y-1">
                  <span className="text-xl font-bold">{item.name}</span>
                  {item.submenu.map((subItem) => (
                    <div
                      key={`mega-menu-mobile-${item.name}-${subItem.name}`}
                      className="pt-2"
                    >
                      <span className="text-lg border-b border-gray-200">
                        {subItem.name}
                      </span>

                      {subItem.links.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="block hover:text-secondary"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <span className="text-xl font-bold">
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block hover:text-secondary"
                  >
                    {item.name}
                  </Link>
                </span>
              )}
            </div>
          ))}
        </div>
      </nav>

      <div className="mt-4 grid grid-cols-2">
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
