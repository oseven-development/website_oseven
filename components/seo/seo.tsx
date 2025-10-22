import React, { FunctionComponent } from "react";
import Facebook from "./facebook";
import Twitter from "./twitter";
import Head from "next/head";
interface Props {
  title: string;
  description: string;
  keywords: string;
  article?: true;
  image?: string;
}

const Seo: FunctionComponent<Props> = ({
  title,
  description,
  keywords,
  article,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        {/* <meta name="image" content={seo.image} /> */}
        {/* <meta name="image" content={seo.image} /> */}
        <Facebook
          desc={description}
          // image={seo.image}
          title={title}
          type={article ? "article" : "website"}
          // url={seo.url}
          locale={"DE"}
        />
        <Twitter
          title={title}
          // image={seo.image}
          desc={description}
          // username={twitterUsername}
        />
      </Head>
    </>
  );
};
export default Seo;
