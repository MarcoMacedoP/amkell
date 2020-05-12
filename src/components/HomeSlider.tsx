import React, { useState } from "react";
import { Link } from "react-router-dom";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { Slide } from "./Slide";
import banner from "../assets/img/banner.jpg";
import innovationMaterials from "../assets/img/materials-innovation.jpg";
import innovationSistems from "../assets/img/building-innovation.jpg";
import arquitecQuality from "../assets/img/arquitechtonic-quality.jpg";
import interiors from "../assets/img/interiors.jpg";
type Props = {
  projects: [
    {
      slug: string;
      name: string;
    }
  ];
};
type HomeSliderType = React.FC<Props>;

export const HomeSlider: HomeSliderType = ({ projects }) => {
  const [index, setIndex] = useState(0);
  function handleFocus(newIndex: number) {
    console.log({ newIndex });
    setIndex(newIndex);
  }
  const nextSlide = () => setIndex(index + 1);
  const lastSlide = () => setIndex(index - 1);
  return (
    <nav className="w-screen -ml-2 mb-8 md:ml-0 md:w-full  fadeIn relative">
      <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={200}
        totalSlides={5}
        visibleSlides={1}
        currentSlide={index}
      >
        <Slider>
          <Slide
            onFocus={handleFocus}
            index={0}
            title="Calidad e innovacion arquitectonica en la edificación"
            backgroundImage={banner}
            url="/productos/"
            urlText="Nuestros productos"
          />
          <Slide
            onFocus={handleFocus}
            index={1}
            title="Materiales innovadores"
            backgroundImage={innovationMaterials}
            url="/materiales/"
            urlText="Nuestros materiales"
          />
          <Slide
            index={2}
            onFocus={handleFocus}
            title="Sistemas innovadores"
            backgroundImage={innovationSistems}
            url="/soluciones/"
            urlText="Nuestras soluciones"
          />
          <Slide
            onFocus={handleFocus}
            index={3}
            title="Calidad arquitectonica"
            backgroundImage={arquitecQuality}
            url="/compañia/"
            urlText="Nosotros"
          />
          <Slide
            onFocus={handleFocus}
            index={4}
            title="Interior innovador"
            backgroundImage={interiors}
            url="/proyectos"
            urlText="Nuestros proyectos"
          />
        </Slider>
        <div className="carousel-buttons-container">
          <ButtonBack>
            <div
              className=" material-icons text-white"
              onClick={lastSlide}
            >
              arrow_back
            </div>
          </ButtonBack>
          <ButtonNext>
            <div
              className=" material-icons text-white"
              onClick={nextSlide}
            >
              arrow_forward
            </div>
          </ButtonNext>
        </div>
      </CarouselProvider>
      <div className="w-full flex flex-wrap md:justify-end">
        <SectionLink
          to={"/proyectos"}
          isActive={index === 0}
          index={1}
          title={"Innovacion arquitectonica"}
        />
        <SectionLink
          to={"/materiales"}
          isActive={index === 1}
          index={2}
          title={"Materiales innovadores"}
        />
        <SectionLink
          to={"/soluciones"}
          isActive={index === 2}
          index={3}
          title={"Sistemas innovadores"}
        />
        <SectionLink
          to={"/compañia"}
          isActive={index === 3}
          index={4}
          title={"Calidad arquitectonica"}
        />
        <SectionLink
          to={"/proyectos"}
          isActive={index === 4}
          index={5}
          title={"Interior innovador"}
        />
      </div>
    </nav>
  );
};

type SectionLinkProps = {
  to: string;
  isActive: boolean;
  index: number;
  title: string;
};
const SectionLink = ({
  to,
  isActive,
  index,
  title,
}: SectionLinkProps) => (
  <Link
    to={to}
    className={`w-2/6 h-24 flex flex-col text-xs uppercase justify-center px-2 transition-colors duration-300 ease-in md:w-1/6 ${
      isActive
        ? "bg-primary text-white hover:bg-red-700"
        : "bg-gray-100 text-black hover:bg-gray-300"
    }`}
  >
    <span>0{index}</span>
    <span>{title}</span>
  </Link>
);
