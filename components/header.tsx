import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-black text-white">
      <Link className="flex items-center justify-center" href="/">
        <Image
          src={"/oseven-logo.svg"}
          alt="CloudConsult Pro Logo"
          width={100}
          height={30}
        />
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/impressum"
        >
          Impressum
        </Link>
      </nav>
    </header>
  );
}
