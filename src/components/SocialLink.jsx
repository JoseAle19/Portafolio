import React from "react";

export const SocialLink = ({url, svg, alt}) => {
  return (
    <>
      <a
        target="_blank"
        href={url}
      >
        <img
          className="w-8 h-8 scale hover:scale-125 transition duration-300 cursor-pointer"
          src={svg}
          alt={alt}
        />
      </a>
    </>
  );
};

// https://www.facebook.com/profile.php?id=100018178207573
