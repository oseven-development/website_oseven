"use client";
import Link from "next/link";
import Image from "next/image";
import { maxWidthCenter } from "@/static";
import { useState } from "react";

const menuItems = [
  {
    name: "Services",
    href: "/services",
    submenu: [
      {
        title: "Audit",
        links: [
          { name: "Cloud Audit", href: "/services/audit/cloud-audit" },
          { name: "Cost-Review", href: "/services/audit/cloud-audit" },
          { name: "CICD-Review", href: "/services/audit/cloud-audit" },
          // { name: "Cost-Review", href: "/services/audit/cost-review" },
          // { name: "CICD-Review", href: "/services/audit/cicd-review" },
        ],
      },
      {
        title: "Cloud Services",
        links: [
          { name: "Cloud Beratung", href: "/" },
          { name: "DevOps", href: "/" },
          { name: "Kubernetes", href: "/" },
          {
            name: "Cloud Native Entwicklung",
            href: "/",
          },
          // { name: "Cloud Beratung", href: "/services/cloud/cloud-beratung" },
          // { name: "DevOps", href: "/services/cloud/devops" },
          // { name: "Kubernetes", href: "/services/cloud/kubernetes" },
          // {
          //   name: "Cloud Native Entwicklung",
          //   href: "/services/cloud-native-entwicklung",
          // },
        ],
      },
    ],
  },
  {
    name: "Projekte",
    href: "/projekte",
  },
  {
    name: "Ressourcen",
    href: "/ressourcen",
    submenu: [
      {
        title: "Audit",
        links: [
          { name: "Blog", href: "/blog" },
          { name: "Case Studies", href: "/case-studies" },
          { name: "Whitepapers", href: "/whitepapers" },
        ],
      },
    ],
  },
  {
    name: "Jobs",
    href: "/jobs",
  },
  {
    name: "Über Uns",
    href: "/about-us",
  },
];

export default function Header() {
  const [activeSubmenu, setActiveSubmenu] = useState<string>("");

  const subMenus = menuItems
    .filter((item) => item.submenu)
    .map((item) => item.name);

  return (
    <header
      className={`${maxWidthCenter} h-16 flex items-center justify-between text-white px-4`}
      onMouseLeave={() => setActiveSubmenu("")}
    >
      {subMenus.map((menu) => (
        <MegaMenuBar
          key={menu}
          activeSubmenu={activeSubmenu}
          menuType={menu}
          setActiveSubmenu={setActiveSubmenu}
        />
      ))}
      <Link className="flex items-center justify-center" href="/">
        <Image
          src={"/logo-oseven-07.svg"}
          alt="CloudConsult Pro Logo"
          width={160}
          height={60}
        />
      </Link>
      <nav className="flex-grow flex items-center justify-end gap-6 pl-16">
        <div className="hidden md:flex items-center gap-4 sm:gap-6">
          {menuItems.map((item) =>
            item.submenu ? (
              <div
                key={item.name}
                className="relative font-medium cursor-pointer flex items-center gap-1"
                onMouseEnter={() => setActiveSubmenu(item.name)}
              >
                {item.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>

                <div
                  className={`absolute -bottom-5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-white transition-opacity duration-300 ease-in-out ${
                    activeSubmenu === item.name ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
              </div>
            ) : (
              <Link
                key={item.name}
                className="font-medium hover:text-secondary"
                href={item.href}
                onMouseEnter={() => setActiveSubmenu("")}
              >
                {item.name}
              </Link>
            )
          )}
        </div>
        <div className="flex-1"></div>
        <Link
          className="font-medium hover:text-secondary"
          href="/kontakt"
          onMouseEnter={() => setActiveSubmenu("")}
        >
          Kontakt
        </Link>
      </nav>
    </header>
  );
}

function MegaMenuBar({
  activeSubmenu,
  menuType,
  setActiveSubmenu,
}: {
  activeSubmenu: string;
  menuType: string;
  setActiveSubmenu: (menu: string) => void;
}) {
  const items = menuItems.find((item) => item.name === menuType)?.submenu;
  if (!items) return null;
  return (
    <div
      id={`mega-menu-${menuType.toLowerCase()}`}
      className={`z-20 absolute left-0 top-16 w-full bg-white text-black transition-opacity duration-300 ease-in-out ${
        menuType === activeSubmenu
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className={`${maxWidthCenter} p-4 grid grid-cols-4`}>
        {items.map((item) => (
          <div key={item.title} className="space-y-2">
            <span className="text-gray-500 text-small border-b border-gray-200 mb-2">
              {item.title}
            </span>
            {item.links.map((link) => (
              <Link
                onClick={() => setActiveSubmenu("")}
                key={link.name}
                href={link.href}
                className="block hover:text-secondary "
              >
                {link.name}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
