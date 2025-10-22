import { Metadata } from "next";

export default function buildMetaData(params: {
  title: string;
  description: string;
  keywords: string[];
  image: {
    src: string;
    alt: string;
  };
  url: string;
}): Metadata {
  return {
    title: params.title,
    description: params.description,
    keywords: params.keywords,
    openGraph: {
      title: params.title,
      description: params.description,
      url: params.url,
      images: params.image.src,
      siteName: params.title,
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      title: params.title,
      card: "summary_large_image",
      images: params.image.src,
      description: params.description,
    },
  };
}
