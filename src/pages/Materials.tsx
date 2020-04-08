import React from "react";

import { Button } from "../components/Button";

//Materiales

import banner from "../assets/img/nosotros_banner.jpg";
import bannerBrightness from "../assets/img/banner_opacity.jpg";

type Props = {};
type MaterialsType = React.FC<Props>;

export const MaterialsPage: MaterialsType = (props) => {
  return (
    <>
      <section className="flex flex-col">
        <div className="-mt-40 bg-brown w-screen h-middle -ml-5 mb-10 bg-contain bg-no-repeat py-8 box-content bg-left flex flex-col justify-center items-center md:-ml-16 lg:-ml-24" 
             style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', }}>
        </div>
      </section>

     <section className="flex flex-wrap w-full flex-col mb-8 md:flex-row md:flex-no-wrap lg:mb-32">
        <div className="flex-col flex m-4 md:w-3/6 md:ml-4 lg:ml-6 md:self-center  md:justify-between">
          <div className="box-red md:w-3/6 md:self-center">
            <h1 className="text-8xl font-bold text-center">18</h1>
            <h2 className="text-4xl text-center tracking-widest mb-6">A Ñ O S</h2>
          </div>
        </div>
        <div className="flex-col flex md:w-3/6 md:ml-4 lg:ml-6 md:self-center  md:justify-between">
          <div className="p-4 md:p-0">
            <div className="line mb-2" />
            <h2 className="text-primary text-2xl md:mb-6">NOSOTROS</h2>
          </div>
          <p className="p-4 md:p-0 mt-2 text-gray-500 md:mb-6">
            Somos una empresa mexicana comprometida a proveer a la arquitectura
            y al diseño de los mejores materiales importados y nacionales para revestimiento. 
            En alianza comercial con fábricas europeas totalmente certificadas 
            en el ámbito de arquitectura sustentable, brindando con ello un servicio 
            global a la edificación partiendo desde el diseño, solución técnica, ingenierías 
            hasta la instalación final en el proyecto. <br/><br/>
            Somos además consultoría de fachadas ventiladas en México con más de
            15 años de experiencia tanto en el ramo técnico y comercial, con personal
            de instalación altamente especializado en estos tipos de sistemas. Ofreciendo al mercado de la construcción experiencia, calidad y servicio.
          </p>
        </div>
      </section>

      <section className="flex flex-col">
        <div className=" bg-brown w-screen h-middle -ml-5 mb-10 bg-contain bg-no-repeat py-8 box-content bg-left flex flex-col md:flex-row justify-center items-center md:-ml-16 lg:-ml-24" 
             style={{ backgroundImage: `url(${bannerBrightness})`, backgroundSize: 'cover', }}>
            <div className="md:w-1/4 md:self-center">
                <h1 className="transition text-white text-4xl lg:text-8xl font-bold text-center ">9</h1>
                <h2 className="transition text-white lg:text-4xl text-center tracking-widest md:mb-6">ALIANZAS <br/> COMERCIALES</h2>
            </div>
            <div className="md:w-1/4 md:self-center">
                <h1 className="transition text-primary text-4xl lg:text-8xl font-bold text-center ">211</h1>
                <h2 className="transition text-primary lg:text-4xl text-center tracking-widest md:mb-6">CLIENTES</h2>
            </div>
            <div className="md:w-1/4 md:self-center">
                <h1 className="transition text-white text-4xl lg:text-8xl font-bold text-center ">17</h1>
                <h2 className="transition text-white lg:text-4xl text-center tracking-widest md:mb-6">MATERIALES</h2>
            </div>
            <div className="md:w-1/4 md:self-center">
                <h1 className="transition text-primary text-4xl lg:text-8xl font-bold text-center ">3</h1>
                <h2 className="transition text-primary lg:text-4xl text-center tracking-widest md:mb-6">CONTINENTES</h2>
            </div>
        </div>
      </section>

      <section className="flex flex-wrap m-4 w-full flex-col-reverse mb-8 md:flex-row md:flex-no-wrap lg:mb-32">
        <div className="flex-col flex md:w-3/6 md:ml-4 lg:ml-6 md:self-center  md:justify-between">
          <div>
            <div className="line mb-2" />
            <h2 className="text-primary text-2xl md:mb-6">TRABAJAMOS CON GRANDES EMPRESAS</h2>
          </div>
          
        </div>
      </section>
    </>
  );
};
