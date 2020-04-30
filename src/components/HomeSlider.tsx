import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/img/banner.jpg";
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
  return (
    <nav className="w-screen -ml-2 mb-8 md:ml-0 md:w-full lg:h-screen fadeIn">
      <div className=" bg-black h-4/6 p-2 relative lg:p-8">
        <div
          className="h-full w-full bg-cover bg-center absolute top-0 bottom-0 left-0 right-0 z-0 filter-brightness"
          style={{ backgroundImage: `url(${banner})` }}
        />
        <div className="flex flex-col w-full justify-center items-center h-48 relative z-20 md:items-start lg:h-full">
          <div className="line mb-2" />
          <h1 className="text-xl text-white uppercase text-center lg:text-4xl lg:w-1/2 lg:text-left  ">
            Calidad e innovacion arquitectonica en la edificación
          </h1>
          <button className="hidden mb-4 mt-8 text-primary uppercase bg-white opacity-75 border-primary border-2 py-2 rounded-lg w-1/3 lg:block">
            <Link to="/proyectos">Nuestros proyectos</Link>
          </button>
        </div>
      </div>
      <div className="w-full flex flex-wrap md:justify-end">
        {projects.map(
          (p, i) =>
            i < 5 && (
              <SectionLink
                to={`proyectos/${p.slug}`}
                isActive={i === 0}
                title={p.name}
                index={i + 1}
              />
            )
        )}
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
const SectionLink = ({ to, isActive, index, title }: SectionLinkProps) => (
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
