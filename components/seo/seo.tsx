/** @format */

import React, { FunctionComponent } from "react";
import Helmet from "react-helmet";
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
      </Head>

      {/* <Facebook
        desc={seo.description}
        // image={seo.image}
        title={seo.title}
        type={article ? "article" : "website"}
        // url={seo.url}
        locale={"DE"}
      />
      <Twitter
        title={seo.title}
        // image={seo.image}
        desc={seo.description}
        // username={twitterUsername}
      /> */}
    </>
  );
};
export default Seo;
