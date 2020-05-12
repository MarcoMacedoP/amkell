import * as React from "react";
import { Slide as BaseSlide } from "pure-react-carousel";
import { Link } from "react-router-dom";

type SlideProps = {
  index: number;
  title: string;
  url: string;
  urlText: string;
  backgroundImage: string;
  onFocus: (index: number) => void;
};

export const Slide: React.FC<SlideProps> = ({
  index,
  title,
  onFocus,
  backgroundImage,
  urlText,
  url,
}) => {
  return (
    <BaseSlide
      index={index}
      key={index}
      className="h-full block"
      onFocus={() => onFocus(index)}
    >
      <div className=" bg-black h-full p-2 relative lg:p-8">
        <div
          className="h-full w-full bg-cover bg-center absolute top-0 bottom-0 left-0 right-0 z-0 filter-brightness"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="flex flex-col w-full justify-center items-center h-48 relative z-20 md:items-start lg:h-full">
          <div className="line mb-2" />
          <h1 className="text-xl text-white uppercase text-center lg:text-4xl lg:w-1/2 lg:text-left  ">
            {title}
          </h1>
          <button className="hidden mb-4 mt-8 text-primary uppercase bg-white opacity-75 border-primary border-2 py-2 rounded-lg w-1/3 lg:block">
            <Link to={url}>{urlText}</Link>
          </button>
        </div>
      </div>
    </BaseSlide>
  );
};
