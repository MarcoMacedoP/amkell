/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { HomeSlider } from "../components/HomeSlider";
import { Button } from "../components/Button";
import { ImageWithBox } from "../components/ImageWithBox";
import buildingImage from "../assets/img/structure.png";
//icons
import planificacionIcon from "../assets/icons/planificacion.svg";
import interiorsIcon from "../assets/icons/Interiores.svg";
import exterioresIcon from "../assets/icons/exteriores.svg";
import buildIcon from "../assets/icons/build-icon.svg";

import {
  useGetCollection,
  useGetItemFromCollection,
  query,
} from "../hooks/Firebase";
import { About } from "./Company";
import nProgress from "nprogress";
import { Link } from "react-router-dom";

const solutionsIcon = [
  planificacionIcon,
  interiorsIcon,
  exterioresIcon,
  buildIcon,
];

type Props = {};
type HomeType = React.FC<Props>;
const MAX_INDEX = 4;

const baseQueryPage: query = {
  key: "type",
  operator: "==",
  value: "main",
};

export const HomePage: HomeType = () => {
  const [soluciones] = useGetCollection("Soluciones");
  const [nosotros, setNosotros] = useState<About>();
  const [materiales] = useGetCollection("Materiales");
  const [proyectos] = useGetCollection("Proyectos");
  const [, nosotrosCollection] = useGetItemFromCollection({
    collection: "Nosotros",
    query: baseQueryPage,
    setData: setNosotros,
  });
  useEffect(() => {
    async function getInitials() {
      await Promise.all([nosotrosCollection.getCollectionData()]);
    }
    getInitials();
  }, []);

  if (!soluciones || !nosotros || !materiales || !proyectos) return null;
  else {
    nProgress.done(true);

    return (
      <>
        <HomeSlider projects={proyectos} />
        <section
          className="flex flex-wrap w-full flex-col-reverse mb-8
                           md:flex-row md:flex-no-wrap lg:mb-32"
        >
          <img
            src={nosotros?.team_photo}
            alt=""
            className="w-full object-cover object-center mt-4 rounded-lg md:w-3/6"
          />
          <div className="flex-col flex md:w-3/6 md:ml-4 lg:ml-6 md:self-center  md:justify-between">
            <div>
              <div className="line mb-2" />
              <h2 className="text-primary text-2xl md:mb-6">Nosotros</h2>
            </div>
            <p className="mt-2 text-black md:mb-6">{nosotros?.desc}</p>
            <Link to="/compañia">
              <Button text="Ver más" className="mt-4 w-2/3" />
            </Link>
          </div>
        </section>

        <section className="flex flex-col fadeInLeft">
          <div className="w-full">
            <div className="line mb-2 uppercase" />
            <h2 className="text-primary text-2xl mb-2 md:mb-8">
              Soluciones arquitectónicas
            </h2>
          </div>
          {soluciones && (
            <>
              <div className="flex flex-row flex-wrap md:flex-col md:mb-16">
                {soluciones.map(
                  (sol: { miniature: string; name: string }, index: number) =>
                    index < MAX_INDEX && (
                      <div key={index} className="w-full">
                        <ImageWithBox
                          image={sol.miniature}
                          title={sol.name}
                          isPrimary={index % 2 !== 0}
                        />
                      </div>
                    )
                )}
              </div>

              <div
                className="bg-brown w-screen h-middle -ml-5 mb-10 bg-contain bg-no-repeat py-8 box-content bg-left flex flex-col justify-center items-center md:-ml-16 lg:-ml-24"
                style={{ backgroundImage: `url(${buildingImage})` }}
              >
                {soluciones.map(
                  (sol: any, index: number) =>
                    index < MAX_INDEX && (
                      <AboutIcon
                        title={sol.name}
                        image={solutionsIcon[index]}
                        desc={sol.caption}
                      />
                    )
                )}
              </div>
            </>
          )}
          <section className="flex flex-col items-center">
            <div className="w-full mb-4 flex flex-col items-center lg:w-1/12">
              <div className="line mb-2 lg:self-start" />
              <h2 className="text-primary text-xl ">Materiales</h2>
            </div>
            <div className="flex flex-wrap w-full items-center justify-center md:mt-8">
              {materiales?.map((m: any) => (
                <MaterialCard name={m.name} image={m.images[0]} slug={m.slug} />
              ))}
            </div>
          </section>
        </section>
      </>
    );
  }
};

type AboutIconProps = {
  title: string;
  image: string;
  desc: string;
};
const AboutIcon = (props: AboutIconProps) => (
  <div className="items-center flex justify-center mb-4 w-full lg:w-1/2">
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
  slug: string;
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
    <Link
      to={`/materiales/${props.slug}`}
      className="block w-full flex justify-center"
    >
      <Button
        color="secondary"
        className="w-2/3"
        text={props.buttonText || "Ver más"}
      />
    </Link>
  </div>
);
