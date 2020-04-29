import React, { useEffect } from "react";
//Materiales
import banner from "../assets/img/banner-2x.jpg";
import { Header } from "../components/Header";
import AbetLaminati from "../assets/empresas/logo_Amkel_AbetLaminati.svg";
import Amevec from "../assets/empresas/logo_Amkel_Amevec.png";
import Cembrit from "../assets/empresas/logo_Amkel_Cembrit.png";
import Louvelia from "../assets/empresas/logo_Amkel_Louvelia.png";
import Madertech from "../assets/empresas/logo_Amkel_Madertech.png";
import Reynobond from "../assets/empresas/logo_Amkel_Reynobond.png";
import Stacbond from "../assets/empresas/logo_Amkel_Stacbond.png";
import Valchromat from "../assets/empresas/logo_Amkel_Valchromat.png";
import Viroc from "../assets/empresas/logo_Amkel_Viroc.png";
import "../styles/hover-box.css";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
type Props = {};
type CompanyType = React.FC<Props>;

export const CompanyPage: CompanyType = (props) => {
  useEffect(() => {
    nprogress.start();
  }, []);
  return (
    <>
      <Header />

      <section className="flex flex-wrap w-full flex-col mb-8 md:flex-row md:flex-no-wrap lg:mb-32">
        <div className="flex-col flex m-4 md:w-3/6 md:ml-4 lg:ml-6 md:self-center  md:justify-between">
          <div className="box-red md:w-3/6 md:self-center">
            <h1 className="text-8xl font-bold text-center">18</h1>
            <h2 className="text-4xl text-center tracking-widest mb-6">
              A Ñ O S
            </h2>
          </div>
        </div>
        <div className="flex-col flex md:w-3/6 md:ml-4 lg:ml-6 md:self-center  md:justify-between">
          <div className="p-4 md:p-0">
            <div className="line mb-2" />
            <h2 className="text-primary text-2xl md:mb-6">NOSOTROS</h2>
          </div>
          <p className="p-4 md:p-0 mt-2 text-gray-500 md:mb-6">
            Somos una empresa mexicana comprometida a proveer a la arquitectura
            y al diseño de los mejores materiales importados y nacionales para
            revestimiento. En alianza comercial con fábricas europeas totalmente
            certificadas en el ámbito de arquitectura sustentable, brindando con
            ello un servicio global a la edificación partiendo desde el diseño,
            solución técnica, ingenierías hasta la instalación final en el
            proyecto. <br />
            <br />
            Somos además consultoría de fachadas ventiladas en México con más de
            15 años de experiencia tanto en el ramo técnico y comercial, con
            personal de instalación altamente especializado en estos tipos de
            sistemas. Ofreciendo al mercado de la construcción experiencia,
            calidad y servicio.
          </p>
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
              9
            </h1>
            <h2 className="transition text-white lg:text-4xl text-center tracking-widest md:mb-6">
              ALIANZAS <br /> COMERCIALES
            </h2>
          </div>
          <div className="md:w-1/4 md:self-center">
            <h1 className="transition text-primary text-4xl lg:text-8xl font-bold text-center ">
              211
            </h1>
            <h2 className="transition text-primary lg:text-4xl text-center tracking-widest md:mb-6">
              CLIENTES
            </h2>
          </div>
          <div className="md:w-1/4 md:self-center">
            <h1 className="transition text-white text-4xl lg:text-8xl font-bold text-center ">
              17
            </h1>
            <h2 className="transition text-white lg:text-4xl text-center tracking-widest md:mb-6">
              MATERIALES
            </h2>
          </div>
          <div className="md:w-1/4 md:self-center">
            <h1 className="transition text-primary text-4xl lg:text-8xl font-bold text-center ">
              3
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
        <a
          href="http://abetlaminati.com/en/"
          target="_blank"
          className="box-url w-full md:w-1/4 p-8"
        >
          <img src={AbetLaminati} alt="logo" className="ml-8 md:m-0 w-64" />
        </a>
        <a
          href="http://amevec.mx/"
          target="_blank"
          className="box-url w-full md:w-1/4 p-8"
        >
          <img src={Amevec} alt="logo" className="ml-8 md:m-0 w-64" />
        </a>
        <a
          href="https://www.cembrit.com/"
          target="_blank"
          className="box-url w-full md:w-1/4 p-8"
        >
          <img src={Cembrit} alt="logo" className="ml-8 md:m-0 w-64" />
        </a>
        <a
          href="http://www.louvelia.com/?lang=es"
          target="_blank"
          className="box-url w-full md:w-1/4 p-8"
        >
          <img src={Louvelia} alt="logo" className="ml-8 md:m-0 w-64" />
        </a>
        <a
          href="http://www.madertech.es/"
          target="_blank"
          className="box-url w-full md:w-1/4 p-8"
        >
          <img src={Madertech} alt="logo" className="ml-8 md:m-0 w-64" />
        </a>
        <a
          href="https://www.alcoa.com/global/en/home.asp"
          target="_blank"
          className="box-url w-full md:w-1/4 p-8"
        >
          <img src={Reynobond} alt="logo" className="ml-8 md:m-0 w-64" />
        </a>
        <a
          href="https://www.stacbond.es/paginas/inicio"
          target="_blank"
          className="box-url w-full md:w-1/4 p-8"
        >
          <img src={Stacbond} alt="logo" className="ml-8 md:m-0 w-64" />
        </a>
        <a
          href="http://www.valchromat.pt/"
          target="_blank"
          className="box-url w-full md:w-1/4 p-8"
        >
          <img src={Valchromat} alt="logo" className="ml-8 md:m-0 w-64" />
        </a>
        <a
          href="http://www.viroc.pt/homepage.aspx"
          target="_blank"
          className="box-url w-full md:w-1/4 p-8"
        >
          <img src={Viroc} alt="logo" className="ml-8 md:m-0 w-64" />
        </a>
      </section>
    </>
  );
};
