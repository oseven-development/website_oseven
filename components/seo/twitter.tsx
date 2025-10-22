import React from "react";

interface Props {
  type?: string;
  username?: string;
  title: string;
  desc: string;
  image?: string;
}

export default function Twitter({
  type = "summary_large_image",
  username,
  title,
  desc,
  image,
}: Props) {
  return (
    <>
      {username && <meta name="twitter:creator" content={username} />}
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      {image && <meta name="twitter:image" content={image} />}
      <meta name="twitter:image:alt" content={desc} />
    </>
  );
}
