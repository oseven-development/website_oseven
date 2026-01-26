import ImageWith4Elements from "@/components/content/image-with-4-elements";
import Steps from "@/components/content/steps";
import Section from "@/components/section";
import { getFilesFromFolder } from "@/lib/get-files-from-folder";
import { Metadata } from "next";

import { notFound } from "next/navigation";

const ComponentMap = {
  steps: Steps,
  imageWith4Elements: ImageWith4Elements,
};

interface Props {
  params: { slug: string };
}

// 1. Tell Next.js to pre-render every JSON file found in /data/blog
export async function generateStaticParams() {
  const posts = getFilesFromFolder("n8n-blogs");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const posts = getFilesFromFolder("n8n-blogs");
  const post = posts.find((p) => p.slug === params.slug);

  // If n8n hasn't created the file yet or slug is wrong
  if (!post) return { title: "Post Not Found" };

  const { metadata } = post.content;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      images: [metadata.ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [metadata.ogImage],
    },
  };
}

// 2. Fetch the specific data for the current URL
export default async function Page({ params }: { params: { slug: string } }) {
  const posts = getFilesFromFolder("n8n-blogs");
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) notFound();

  return (
    <main>
      <h1>{post.content.metadata.title}</h1>
      {post.content.sections.map((section, i) => {
        const Component = ComponentMap[section.type];
        return (
          <Section be={section.variant}>
            <Component key={i} {...section.props} />
          </Section>
        );
      })}
    </main>
  );
}
