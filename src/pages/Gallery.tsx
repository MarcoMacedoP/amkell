import React from "react";
import nprogress from 'nprogress';

import { Header } from "../components/Header";
import { Title } from "../components/Title";
import galleryImgOne from "../assets/img/galeria_1.png";
import galleryImgTwo from "../assets/img/galeria_2.png";
import galleryImgThree from "../assets/img/galeria_3.png";
import galleryImgFour from "../assets/img/galeria_4.png";
import galleryImgFive from "../assets/img/galeria_5.png";
import galleryImgSix from "../assets/img/galeria_6.png";
import galleryImgSeven from "../assets/img/galeria_7.png";
import galleryImgEight from "../assets/img/galeria_8.png";
import galleryImgNine from "../assets/img/galeria_9.png";

type Props = {};
type GalleryPageType = React.FC<Props>;

const images = [
  galleryImgOne,
  galleryImgTwo,
  galleryImgThree,
  galleryImgFour,
  galleryImgFive,
  galleryImgSix,
  galleryImgSeven,
  galleryImgEight,
  galleryImgNine,
];
export const GalleryPage: GalleryPageType = (props) => {
  const isLoading = true;
  if (isLoading) {
    nprogress.done();
  }
  return (
    <>
      <Header />
      <Title>Galería</Title>
      <section className="flex flex-wrap justify-start w-full">
        {images.map((src, index) => (
          <img
            src={src}
            key={index}
            alt=""
            className="w-full md:w-1/2 lg:w-1/3"
          />
        ))}
      </section>
    </>
  );
};
