import React from "react";
import banner2x from "../assets/img/banner-2x.jpg";
import banner from "../assets/img/banner-1x.png";
import banner15x from "../assets/img/banner-1.5x.png";
import bannerContact from "../assets/img/banner-contact.png";


type HeaderType = React.FC<{
  contact?: boolean,
}>;

export const Header: HeaderType = ({contact}) => {
  return (
    <>
      <picture className="md:hidden bg-brown block w-screen h-40 bg-no-repeat -ml-2 bg-center bg-cover w-full mb-8">
        <img
          className="object-cover object-center h-full filter-brightness"
          src={contact ? bannerContact : banner}
          alt=""
          srcSet={`${contact ? bannerContact : banner} 375w, ${contact ? bannerContact : banner15x} 769w, ${contact ? bannerContact : banner2x} 3200w`}
          sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
        />
      </picture>


      <div className="hidden md:block bg-brown w-screen h-middle -mt-64 -ml-5 mb-10 bg-contain bg-no-repeat py-8 box-content bg-left flex flex-col justify-center items-center md:-ml-16 lg:-ml-24 filter-brightness" 
            style={{ backgroundImage: `url(${contact ? bannerContact : banner2x})`, backgroundSize: 'cover' }}>
      </div>
    </>

  );
};
