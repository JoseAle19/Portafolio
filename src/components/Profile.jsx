import React from "react";

import { SocialLink } from "./SocialLink";
import { hookGetImages } from "../hooks/hookGetImages";
import { FacebookSvg, WhatsAppSvg, LinkedinSvg, GitHubSvg } from "../svgs/svgs";
export const Profile = () => {
  const { images } = hookGetImages("svg");
  return (
    <>
      {/* nformacion */}
      <div className="my-3 flex flex-col  items-center  xl:flex-row  xl:flex xl:justify-start xl:items-center xl:gap-5 md:flex md:justify-start md:items-center md:gap-5 md:flex-row ">
        <img
          className="rounded-full w-20 h-20 object-cover bg-white"
          // src={
          //   "https://firebasestorage.googleapis.com/v0/b/crudpapeleria.appspot.com/o/img-tecnologies%2Frock.jpg?alt=media&token=1d436d9d-21f9-43e3-8186-5a9a8ca7035c"
          // }
          src={"https://cdn-icons-png.flaticon.com/512/4661/4661320.png"}
          alt=""
        />
        <p className="text-center font-bold text-xl text-white m-3">
          José Alejandro.
        </p>
      </div>
      {/* Contacto */}
      <div className=" flex justify-around w-full xl:flex xl:w-full  xl:justify-between  md:flex md:w-full  md:justify-between ">
        <SocialLink
          alt={"Linkedin"}
          svg={<LinkedinSvg/>}
          url={
            "https://www.linkedin.com/in/jos%C3%A9-alejandro-cruz-p%C3%A9rez-34694123a"
          }
        />
        <SocialLink
          alt={"Git"}
          svg={<GitHubSvg />}
          url={"https://github.com/JoseAle19/"}
        />
        <SocialLink
          alt={"Facebook"}
          svg={<FacebookSvg />}
          url={"https://www.facebook.com/profile.php?id=100018178207573"}
        />
        <SocialLink
          alt={"WhatsApp"}
          svg={<WhatsAppSvg />}
          url={"https://wa.me/9631853517"}
        />
      </div>
    </>
  );
};
