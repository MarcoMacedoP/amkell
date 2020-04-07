import React from "react";
import { Link } from "react-router-dom";

type Props = {};
type HomeSliderType = React.FC<Props>;

export const HomeSlider: HomeSliderType = (props) => {
  return (
    <nav className="w-screen -ml-5 mb-8">
      <div className="h-40 bg-black h-2/3 p-2">
        <div className="flex flex-col w-full justify-center items-center h-48">
          <div className="line mb-2" />
          <h1 className="text-xl text-white uppercase text-center">
            Calidad e innovacion arquitectonica en la edificación
          </h1>
          <button className="hidden my-4 text-primary uppercase bg-white opacity-75 border-primary border-2 py-2 rounded-lg w-2/3">
            Nuestros proyectos
          </button>
          <div className="w-full flex text-primary items-center justify-center mt-2">
            <span className="material-icons text-4xl">keyboard_backspace</span>
            <span className="material-icons text-4xl rotate-180 transform">
              keyboard_backspace
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap">
        <SectionLink
          to={"/proyectos"}
          isActive={true}
          index={1}
          title={"Innovacion arquitectonica"}
        />
        <SectionLink
          to={"/materiales"}
          isActive={false}
          index={2}
          title={"Materiales innovadores"}
        />
        <SectionLink
          to={"/sistemas"}
          isActive={false}
          index={3}
          title={"Sistemas innovadores"}
        />
        <SectionLink
          to={"/calidad"}
          isActive={false}
          index={4}
          title={"Calidad arquitectonica"}
        />
        <SectionLink
          to={"/proyectos"}
          isActive={false}
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
const SectionLink = ({ to, isActive, index, title }: SectionLinkProps) => (
  <Link
    to={to}
    className={`w-2/6 h-24 flex flex-col text-sm justify-center px-2 transition-colors duration-300 ease-in ${
      isActive
        ? "bg-primary text-white hover:bg-red-700"
        : "bg-gray-100 text-black hover:bg-gray-300"
    }`}
  >
    <span>0{index}</span>
    <span>{title}</span>
  </Link>
);
