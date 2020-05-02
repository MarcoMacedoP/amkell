/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import nprogress from "nprogress";
//Materiales
import banner from "../assets/img/banner-2x.jpg";
import { Header } from "../components/Header";

import "../styles/hover-box.css";
import { useGetItemFromCollection } from "../hooks/Firebase";
type Props = {};
type CompanyType = React.FC<Props>;

export interface About {
  desc: string;
  id: string;
  alliances: string;
  clients: string;
  continents: string;
  logos: string[];
  materials: string;
  team_photo: string;
  years_photo: string;
}
export const CompanyPage: CompanyType = (props) => {
  const isLoading = true;
  const [about, setAbout] = useState<About>();
  const [status, collection] = useGetItemFromCollection({
    collection: "Nosotros",
    query: {
      key: "type",
      operator: "==",
      value: "main",
    },
    setData: setAbout,
  });

  useEffect(() => {
    collection.getCollectionData().then(() => nprogress.done());
  }, []);
  if (isLoading) {
    nprogress.done();
  }
  if (status.isLoading) return null;

  return (
    <>
      <Header />

      <section className="flex flex-wrap w-full flex-col mb-8 md:flex-row md:flex-no-wrap lg:mb-32">
        <div className="flex-col flex m-4 md:w-3/6 md:ml-4 lg:ml-6 md:self-center  md:justify-between">
          <div className=" md:w-3/6 md:self-center">
            <img src={about?.years_photo} alt="" />
          </div>
        </div>
        <div className="flex-col flex md:w-3/6 md:ml-4 lg:ml-6 md:self-center  md:justify-between">
          <div className="p-4 md:p-0">
            <div className="line mb-2" />
            <h2 className="text-primary text-2xl md:mb-6">NOSOTROS</h2>
          </div>
          <p className="p-4 md:p-0 mt-2 text-gray-500 md:mb-6">{about?.desc}</p>
          <iframe
            title="Amkell"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dLHzJMAp4ic"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </section>

      <section className="flex flex-col">
        <div
          className=" bg-brown w-screen h-middle -ml-5 mb-10 bg-contain bg-no-repeat py-8 box-content bg-left flex flex-col md:flex-row justify-center items-center md:-ml-16 lg:-ml-24"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
          }}
        >
          <div className="md:w-1/4 md:self-center">
            <h1 className="transition text-white text-4xl lg:text-8xl font-bold text-center ">
              {about?.alliances}
            </h1>
            <h2 className="transition text-white lg:text-4xl text-center tracking-widest md:mb-6">
              ALIANZAS <br /> COMERCIALES
            </h2>
          </div>
          <div className="md:w-1/4 md:self-center">
            <h1 className="transition text-primary text-4xl lg:text-8xl font-bold text-center ">
              {about?.clients}
            </h1>
            <h2 className="transition text-primary lg:text-4xl text-center tracking-widest md:mb-6">
              CLIENTES
            </h2>
          </div>
          <div className="md:w-1/4 md:self-center">
            <h1 className="transition text-white text-4xl lg:text-8xl font-bold text-center ">
              {about?.materials}
            </h1>
            <h2 className="transition text-white lg:text-4xl text-center tracking-widest md:mb-6">
              MATERIALES
            </h2>
          </div>
          <div className="md:w-1/4 md:self-center">
            <h1 className="transition text-primary text-4xl lg:text-8xl font-bold text-center ">
              {about?.continents}
            </h1>
            <h2 className="transition text-primary lg:text-4xl text-center tracking-widest md:mb-6">
              CONTINENTES
            </h2>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap m-4 w-full flex-col-reverse mb-8 md:flex-row md:flex-no-wrap">
        <div className="flex-col flex md:w-3/6 md:ml-4 lg:ml-6 md:self-center  md:justify-between">
          <div>
            <div className="line mb-2" />
            <h2 className="text-primary text-2xl md:mb-6">
              TRABAJAMOS CON GRANDES EMPRESAS
            </h2>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap w-full flex-col md:flex-row">
        {about?.logos.map((img, index) => (
          <div className="box-url w-full md:w-1/4 p-8" key={index}>
            <img src={img} alt="amkell" className="ml-8 md:m-0 w-64" />
          </div>
        ))}
      </section>
    </>
  );
};
