import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { Slide } from "./Slide";
export interface Carousel {
  title: string;
  image: string;
  url: string;
  buttonLabel: string;
  id: string;
}
type Props = {
  data: Carousel[];
};
type HomeSliderType = React.FC<Props>;

export const HomeSlider: HomeSliderType = ({ data }) => {
  const [index, setIndex] = useState(0);
  function handleFocus(newIndex: number) {
    console.log({ newIndex });
    setIndex(newIndex);
  }
  const isLastSlide = useMemo(() => index === data.length - 1, [
    data,
    index,
  ]);
  const nextSlide = () => setIndex(isLastSlide ? 0 : index + 1);
  const lastSlide = () =>
    setIndex(index === 0 ? data.length - 1 : index - 1);
  if (!data || data.length === 0) {
    return null;
  }
  return (
    <nav className="w-screen -ml-2 mb-8 md:ml-0 md:w-full  fadeIn relative">
      <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={200}
        totalSlides={data.length}
        visibleSlides={1}
        currentSlide={index}
      >
        <Slider>
          {data.map((item, index) => (
            <Slide
              onFocus={handleFocus}
              index={index}
              title={item.title}
              backgroundImage={item.image}
              urlText={item.buttonLabel}
              url={item.url}
            />
          ))}
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
        {data.map((item, itemIndex) => (
          <SectionLink
            index={itemIndex + 1}
            isActive={index === itemIndex}
            title={item.title}
            to={item.url}
          />
        ))}
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
