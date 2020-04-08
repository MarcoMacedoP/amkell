import React from "react";
import { HomeSlider } from "../components/HomeSlider";
import { Button } from "../components/Button";
import { ImageWithBox } from "../components/ImageWithBox";
import nosotrosImage from "../assets/img/nosotros.jpeg";
import fachadaImage from "../assets/img/fachada-ventilada.jpg";
import productsImage from "../assets/img/productos-arquitectonicos.png";
import solutionsImage from "../assets/img/soluciones-interiores.png";
import buildingImage from "../assets/img/structure.png";
//icons
import planificacionIcon from "../assets/icons/planificacion.svg";
import interiorsIcon from "../assets/icons/Interiores.svg";
import exterioresIcon from "../assets/icons/exteriores.svg";
import buildIcon from "../assets/icons/build-icon.svg";
//Materiales

import alucobondIamge from "../assets/img/Alucobond.png";
import celciasImage from "../assets/img/Celocias.png";

type Props = {};
type HomeType = React.FC<Props>;

export const HomePage: HomeType = (props) => {
  return (
    <>
      <HomeSlider />
      <section
        className="flex flex-wrap w-full flex-col-reverse mb-8
                           md:flex-row md:flex-no-wrap lg:mb-32"
      >
        <img
          src={nosotrosImage}
          alt=""
          className="w-full object-cover object-center mt-4 rounded-lg md:w-3/6"
        />
        <div className="flex-col flex md:w-3/6 md:ml-4 lg:ml-6 md:self-center  md:justify-between">
          <div>
            <div className="line mb-2" />
            <h2 className="text-primary text-2xl md:mb-6">Nosotros</h2>
          </div>
          <p className="mt-2 text-black md:mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper
            tempus quam lobortis tempus. Curabitur a dictum eros, non volutpat
            neque. Ut imperdiet placerat felis, et scelerisque felis consectetur
            eget. Suspendisse potenti. In consequat cursus turpis, nec iaculis
            augue facilisis eu. Nam eget fringilla ante. Sed tortor turpis,
            congue nec bibendum ut, pellentesque eget orci. Morbi quam justo,
            ullamcorper vitae metus sit amet, commodo molestie augue.
          </p>
          <Button text="Ver más" className="mt-4 w-2/3" />
        </div>
      </section>

      <section className="flex flex-col">
        <div className="w-full">
          <div className="line mb-2 uppercase" />
          <h2 className="text-primary text-2xl mb-2 md:mb-8">
            Soluciones arquitectónicas
          </h2>
        </div>
        <div className="flex flex-row flex-wrap md:flex-col md:mb-16">
          <ImageWithBox image={fachadaImage} title="Fachada Ventilada" />
          <ImageWithBox
            image={productsImage}
            title="Productos Arquitectonicos"
            isPrimary
          />
          <ImageWithBox
            image={solutionsImage}
            title="Soluciones en interiores"
          />
        </div>
        <div className="bg-brown w-screen h-middle -ml-5 mb-10 bg-contain bg-no-repeat py-8 box-content bg-left flex flex-col justify-center items-center md:-ml-16 lg:-ml-24" 
             style={{ backgroundImage: `url(${buildingImage})` }}>
          <AboutIcon
            title="Planificación"
            image={planificacionIcon}
            desc="Nuestros planes maestros proporcionan una vision integral de donde está una organización hoy en día"
          />
          <AboutIcon
            title="Interiores"
            image={interiorsIcon}
            desc="Nuestros planes maestros proporcionan una vision integral de donde está una organización hoy en día"
          />
          <AboutIcon
            title="Exteriores"
            image={exterioresIcon}
            desc="Nuestros planes maestros proporcionan una vision integral de donde está una organización hoy en día"
          />
          <AboutIcon
            title="Fachadas Ventiladas"
            image={buildIcon}
            desc="Nuestros planes maestros proporcionan una vision integral de donde está una organización hoy en día"
          />
        </div>
        <section className="flex flex-col items-center">
          <div className="w-full mb-4 flex flex-col items-center lg:w-1/12">
            <div className="line mb-2 lg:self-start" />
            <h2 className="text-primary text-xl ">Materiales</h2>
          </div>
          <div className="flex flex-wrap w-full items-center justify-center md:mt-8">
            <MaterialCard name="Alucobond" image={alucobondIamge} />
            <MaterialCard name="Celcias" image={celciasImage} />
            <MaterialCard name="Alucobond" image={alucobondIamge} />
            <MaterialCard name="Celcias" image={celciasImage} />
            <MaterialCard name="Alucobond" image={alucobondIamge} />
            <MaterialCard name="Celcias" image={celciasImage} />
          </div>
        </section>
      </section>
    </>
  );
};

type AboutIconProps = {
  title: string;
  image: string;
  desc: string;
};
const AboutIcon = (props: AboutIconProps) => (
  <div className="items-center flex justify-center mb-4">
    <div className="bg-white rounded-full w-12 h-12 p-2 mr-4">
      <div
        className="bg-no-repeat bg-contain bg-center h-full w-full"
        style={{ backgroundImage: `url(${props.image})` }}
      />
    </div>
    <div className="text-gray-300 text-sm w-2/3">
      <p className="font-bold">{props.title}</p>
      <p className="text-xs">{props.desc}</p>
    </div>
  </div>
);

type MaterialCardProps = {
  name: string;
  buttonText?: string;
  image: string;
  className?: string;
};

const MaterialCard = (props: MaterialCardProps) => (
  <div
    className={`flex flex-col w-3/8 justify-center my-4 mx-2 items-center ${props.className}`}
  >
    <img
      className="h-32 w-32 bg-brown rounded-full mb-2"
      src={props.image}
      alt={props.name}
    />
    <p className="text-black text-sm mb-2">{props.name}</p>
    <Button
      color="secondary"
      className="w-2/3"
      text={props.buttonText || "Ver más"}
    />
  </div>
);
