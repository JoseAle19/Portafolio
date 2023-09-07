import React from "react";

export const SocialLink = ({ url, svg }) => {
  return (
    <>
      <a target="_blank" href={url}>
          {svg}
      </a>
    </>
  );
};

