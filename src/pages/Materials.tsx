import React from "react";

import { Header } from "../components/Header";
import { ImageBoxText } from "../components/ImageBoxText";
import alucobondImage from "../assets/img/alucobond-material.png";
import celosiasImage from "../assets/img/celosias-material.png";
import terracotaImage from "../assets/img/terracota-material.png";
import hplImage from "../assets/img/hpl-material.png";
import fibrocementoImage from "../assets/img/fibrocemento-material.png";
import porcelanicoImage from "../assets/img/porcelanico-material.png";
import decksImage from "../assets/img/decks-material.png";

type Props = {};
type MaterialsType = React.FC<Props>;

export const MaterialsPage: MaterialsType = (props) => {
  return (
    <>
      <Header />

      <section className="flex flex-col">
        <div className="w-full">
          <div className="line mb-2 uppercase" />
          <h2 className="text-primary text-2xl mb-2 md:mb-8">MATERIALES</h2>
        </div>
        <div className="flex flex-row flex-wrap p-4 md:p-0 md:flex-col md:mb-16">
          <div className="flex flex-col fadeInLeft md:flex-row">
            <ImageBoxText image={alucobondImage} title="ALUCOBOND" />
            <p className="text-gray-1000 w-full md:w-1/2 md:pl-4 text-justify">
              Alucobond, es un material ligero y de gran resistencia al
              exterior. A pesar de existir en el mercado diferentes proveedores,
              el panel de aluminio con calidad Premium son fabricados por marcas
              como Alucobond, Reynobond, Alpolic o Vicobond.
            </p>
          </div>
          <br />
          <hr />
          <br />
          <div className="flex flex-col-reverse fadeInRight md:flex-row">
            <p className="text-gray-1000 w-full md:w-1/2 md:pr-4 text-justify justify-start">
              La celosía arquitectónica o conocida como louver, es además una
              solución arquitectónica de la incidencia solar de la cual se puede
              mitigar o canalizar la iluminación natural.
            </p>
            <ImageBoxText
              image={celosiasImage}
              title="CELOSÍAS ARQUITECTÓNICAS"
              isPrimary
            />
          </div>
          <br />
          <hr />
          <br />
          <div className="flex flex-col fadeInLeft md:flex-row">
            <ImageBoxText image={terracotaImage} title="TERRACOTA EXTRUIDA" />
            <p className="text-gray-1000 w-full md:w-1/2 md:pl-4 text-justify">
              Frontek es una pieza para fachada que combina las ventajas de los
              paneles extruídos de terracota y las piezas prensadas de
              porcelánico. Son paneles de gres porcelánico compacto extruído que
              nos permiten ofrecer un amplio abanico de acabados y medidas,
              garantizando colores imperecederos, Piezas
              extraordinarias/magníficas, que dotan a la piel del edificio de
              tan poca absorción de agua que mejoran mucho las prestaciones de
              otras soluciones.
              <br />
              <br />
              Frontek son los únicos paneles extruídos rectificados a cuatro
              cantos, que ofrecen unos niveles de tolerancia inalcanzables para
              otros materiales, gracias al revolucionario proceso productivo
              cada pieza es única y su facilidad de limpieza solo es comparable
              a la del vidrio. Es la solución más ligera y resistente del
              mercado. Con un peso de 32 kg/m2 y un espesor de 19 mm es difícil
              de igualar en prestaciones de módulo de rotura.
            </p>
          </div>
          <br />
          <hr />
          <br />
          <div className="flex flex-col-reverse fadeInRight md:flex-row">
            <p className="text-gray-1000 w-full md:w-1/2 md:pr-4 text-justify justify-start">
              HPL MEG de la prestigiosa marca italiana Abet Laminati son paneles
              laminados de revestimiento para interiores y exteriores,
              elaborados con madera prensada, fibra, láminas compactas y
              laminados de alta presión.
            </p>
            <ImageBoxText image={hplImage} title="HPL MEG" isPrimary />
          </div>
          <br />
          <hr />
          <br />
          <div className="flex flex-col fadeInLeft md:flex-row">
            <ImageBoxText image={fibrocementoImage} title="FIBROCEMENTO" />
            <p className="text-gray-1000 w-full md:w-1/2 md:pl-4 text-justify">
              El fibrocemento es un material de construcción compuesto a base de
              fibras de arena, cemento y celulosa, el cual es utilizado para
              cubrir el exterior de un edificio, ya sea de aplicación comercial
              o doméstica.
            </p>
          </div>
          <br />
          <hr />
          <br />
          <div className="flex flex-col-reverse fadeInRight md:flex-row">
            <p className="text-gray-1000 w-full md:w-1/2 md:pr-4 text-justify justify-start">
              Infinity del grupo Concorde es líder de los productores italianos
              en pisos y revestimientos en paredes, y ha trabajado en la
              industria del diseño y producción por mas de 50 años.
              <br />
              <br />
              Nuestras placas están hechas de minerales y materias primas
              exclusivamente naturales. Son los mismos elementos esenciales del
              granito que, sintetizados a una temperatura de 1230 °C, crean un
              nuevo material compacto con una prestación técnica sin igual.
              <br />
              <br />
              Buscamos, seleccionamos y extraemos las mejores materias primas de
              canteras controladas y certificadas. Garantizamos un producto de
              larga duración, libre de adhesivos y resinas. Cuarzos,
              feldespatos, arcillas y caolines se purifican, atomizan, prensan y
              someten a altas temperaturas para formar el cuerpo del producto.
              Gracias a este proceso podemos combinar más estratificaciones de
              polvos de colores en el cuerpo de la placa, perfeccionando la
              estética en sus mínimos detalles. Todos los productos Infinity
              tienen características estructurales, estéticas y funcionales que
              los hacen únicos para la fabricación de muebles, revestimientos y
              pavimentos para interiores y exteriores.
              <br />
              <br />
              Las placas son resistentes al desgaste, a los arañazos y fáciles
              de limpiar.
              <br />
              <br />
              No manifiestan con el tiempo los efectos antiestéticos del
              desgaste típico de las resinas y otros materiales naturales y son
              inalterables al calor y a los ácidos.
            </p>
            <ImageBoxText
              image={porcelanicoImage}
              title="PORCELÁNICO SLIM"
              isPrimary
            />
          </div>
          <br />
          <hr />
          <br />
          <div className="flex flex-col fadeInLeft md:flex-row">
            <ImageBoxText image={decksImage} title="DECKS" />
            <p className="text-gray-1000 w-full md:w-1/2 md:pl-4 text-justify">
              Producto prefabricado con madera y plástico WPC (Wood Plastic
              Composite) ideal para exteriores en terrazas, albercas o de uso
              general en muros. Alta resistencia al exterior, humedad y agentes
              atmosféricos, contamos con una gama de colores naturales que dan
              la apariencia natural de la madera.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
