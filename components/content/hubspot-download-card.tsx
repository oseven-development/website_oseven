import Link from "next/link";
import Image from "next/image";

export default function HubSpotDownloadCard(params: {
  title: string;
  description: string;
  cta: string;
  imageSrc: string;
}) {
  return (
    <div className="flex flex-col items-center border border-secondary rounded-xl overflow-hidden max-w-[340px] bg-white shadow-lg">
      <div className="w-full h-44 bg-gray-100 flex items-center justify-center relative">
        <Image
          src={params.imageSrc}
          alt={params.title}
          fill
          className="object-cover"
          sizes="340px"
          priority
        />
      </div>
      <div className="p-6 text-center w-full bg-primary text-white">
        <h3 className="mb-2 text-xl font-semibold">{params.title}</h3>
        <p className="mb-5 text-gray-200 text-base">{params.description}</p>

        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          href={params.cta}
        >
          Download{" "}
        </Link>
      </div>
    </div>
  );
}
