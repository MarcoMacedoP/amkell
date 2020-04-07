import React from "react";
import { HomeSlider } from "../components/HomeSlider";
import { Button } from "../components/Button";
import nosotrosImage from "../assets/img/nosotros.jpeg";
import fachadaImage from "../assets/img/fachada-ventilada.jpg";
import productsImage from "../assets/img/productos-arquitectonicos.png";
import solutionsImage from "../assets/img/soluciones-interiores.png";
import buildingImage from "../assets/img/structure.png";

import planificacionIcon from "../assets/icons/planificacion.svg";
import interiorsIcon from "../assets/icons/Interiores.svg";
import exterioresIcon from "../assets/icons/exteriores.svg";
import buildIcon from "../assets/icons/build-icon.svg";

import { ImageWithBox } from "../components/ImageWithBox";

type Props = {};
type HomeType = React.FC<Props>;

export const HomePage: HomeType = (props) => {
  console.log(props);
  return (
    <>
      <HomeSlider />
      <section className="flex flex-wrap w-full flex-col-reverse mb-8">
        <img
          src={nosotrosImage}
          alt=""
          className="w-full object-cover object-center mt-4 rounded-lg"
        />
        <div className="flex-col flex">
          <div className="line mb-2" />
          <h2 className="text-primary text-2xl">Nosotros</h2>
          <p className="mt-2 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper
            tempus quam lobortis tempus. Curabitur a dictum eros, non volutpat
            neque. Ut imperdiet placerat felis, et scelerisque felis consectetur
            eget. Suspendisse potenti. In consequat cursus turpis, nec iaculis
            augue facilisis eu. Nam eget fringilla ante. Sed tortor turpis,
            congue nec bibendum ut, pellentesque eget orci. Morbi quam justo,
            ullamcorper vitae metus sit amet, commodo molestie augue.
          </p>
          <Button text="Ver más" className="mt-4" />
        </div>
      </section>

      <section className="flex flex-col">
        <div className="w-full">
          <div className="line mb-2 uppercase" />
          <h2 className="text-primary text-2xl mb-2">
            Soluciones arquitectónicas
          </h2>
        </div>
        <div className="flex flex-row flex-wrap">
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
        <div
          className="bg-brown w-screen h-middle -ml-5 mb-10 bg-contain bg-no-repeat py-8 box-content bg-left flex flex-col justify-center items-center"
          style={{ backgroundImage: `url(${buildingImage})` }}
        >
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
