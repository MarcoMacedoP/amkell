import React from "react";
import banner2x from "../assets/img/banner-2x.jpg";
import banner from "../assets/img/banner-1x.png";
import banner15x from "../assets/img/banner-1.5x.png";

type HeaderType = React.FC<{}>;

export const Header: HeaderType = () => {
  return (
    <picture className=" bg-brown block w-screen h-40 bg-no-repeat -ml-2 bg-center bg-cover w-full mb-8">
      <img
        className="object-cover object-center h-full"
        src={banner}
        alt=""
        srcSet={`${banner} 375w, ${banner15x} 769w, ${banner2x} 3200w`}
        sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
      />
    </picture>
  );
};
