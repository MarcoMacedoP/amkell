import React from "react";

import { Header } from "../components/Header";
import { ImageBoxText } from "../components/ImageBoxText";
import fachadaImage from "../assets/img/fachada-ventilada.jpg";
import trenImage from "../assets/img/tren-ligero.png";
import terracotaImage from "../assets/img/torres-zenic.png";
import hplImage from "../assets/img/panel-aluminio.png";
import fibrocementoImage from "../assets/img/meg-laminati.png";
import porcelanicoImage from "../assets/img/portobelo.png";
import decksImage from "../assets/img/puerto-manzanillo.png";
import ecohotelImage from "../assets/img/eco-hotel.png";
import awardsImage from "../assets/img/a-awards.png";


type Props = {};
type ProyectsType = React.FC<Props>;

export const ProyectsPage: ProyectsType = (props) => {
  return (
    <>
      <Header />

      <section className="flex flex-col">
        <div className="w-full">
          <div className="line mb-2 uppercase" />
          <h2 className="text-primary text-2xl mb-2 md:mb-8">
            PROYECTOS
          </h2>
        </div>
        <div className="flex flex-row flex-wrap p-4 md:p-0 md:flex-col md:mb-16">
          <div className="flex flex-col md:flex-row fadeInLeft">
            <ImageBoxText  
              image={fachadaImage} 
              title="FACHADA VENTILADA"
            />
            <p className="text-gray-1000 w-full md:w-1/2 md:pl-4 text-justify">
              Es un sistema constructivo formado por una doble piel, que 
              garantiza un funcionamiento duradero y un aislamiento 
              térmico y acústico. Protegiendo al edificio de la acción combinada 
              de lluvia, viento, agentes atmosféricos, entre otros, aumentado 
              la vida útil y la seguridad del edificio puede tener diferentes 
              aplicaciones de revestimiento. Nuestro sistema de Fachada Ventilada, 
              se ancla a la estructura principal del edificio. Hace posible una 
              perfecta planicidad y uniformidad del revestimiento. 
              Asegura la durabilidad de la fachada con ahorros de tiempo de 
              montaje y limpieza. Amortigua los cambios de temperatura en los 
              meses de verano la piel exterior se calienta y hace circular el 
              aire en el interior de la cámara ya que este baja su densidad, 
              este “efecto chimenea” desaloja el aire caliente y lo renueva con 
              aire más frío, rompiendo el puente térmico del exterior. 
              Con ello se consigue un ahorro energético entre el 25-40%.
            </p>
          </div>
          <br/><hr/><br/>
          <div className="flex flex-col-reverse md:flex-row fadeInRight">
            <p className="text-gray-1000 w-full md:w-1/2 md:pr-4 text-justify justify-start">
            Estamos trabajando en las estaciones de la línea 3 del Tren Ligero en la 
            Zona Metropolitana de Guadalajara aplicando HPL Abet Laminati.
            </p>
            <ImageBoxText  
              image={trenImage}
              title="TREN LIGERO"
              isPrimary
            />
          </div>
          <br/><hr/><br/>

          <div className="flex flex-col md:flex-row fadeInLeft">
            <ImageBoxText  
              image={terracotaImage} 
              title="TORRES ZENIC"
            />
            <p className="text-gray-1000 w-full md:w-1/2 md:pl-4 text-justify">
              Aplicación del producto de alta calidad cemento compuesto marca 
              Viroc en la fachada de las Torres Zenic ubicadas en Tlaquepaque, Jalisco.
            </p>
          </div>
          <br/><hr/><br/>
          <div className="flex flex-col-reverse md:flex-row fadeInRight">
            <p className="text-gray-1000 w-full md:w-1/2 md:pr-4 text-justify justify-start">
              El panel de aluminio compuesto (ACP) o érroneamente mencionado como alucobond, 
              es una excelente solución para acabados exteriores o interiores, ya que por su 
              versatilidad y ligereza puede aplicarse de diferentes maneras contando con una 
              gran variedad e intensidad de colores y texturas. El panel de aluminio está 
              integrado de dos laminas de aluminio de 0.50mm de espesor una exterior con 
              pintura de alta calidad Kynar 500 al 70% con protección UV y el interior cubierto 
              de poliéster que évita la corrosión con un núcleo de polietileno como producto 
              estándar o también, con núcleo de productos retardantes al fuego con partículas 
              minerales cubierto por una película adhesiva DUPONT. Panel de Aluminio VICOBOND es 
              producido por un equipo técnico muy especializado con tecnología Alemana que nos 
              ofrece una garantía de mas de 15 años. Támbien ofrecemos panel de aluminio marca 
              REYNOBOND el cual es un Panel de Aluminio Americano con la mejor cálidad del mercado. 
              Ambas marcan representan las características óptimas para cumplir con los diseños 
              arquitectónicos más exigentes.
            </p>
            <ImageBoxText  
              image={hplImage}
              title="ALUCOBOND"
              isPrimary
            />
          </div>
          <br/><hr/><br/>

          <div className="flex flex-col md:flex-row fadeInLeft">
            <ImageBoxText  
              image={fibrocementoImage} 
              title="MEG LAMINATI"
            />
            <p className="text-gray-1000 w-full md:w-1/2 md:pl-4 text-justify">
              Amkel soluciones arquitectónicas obtiene la representación en México del innovador 
              MEG panel fenólico (HPL) de la prestigiosa marca italiana Abet Laminati, ofreciendo 
              con ello una excelente alternativa en fachadas ventiladas en un panel ligero, alta 
              durabilidad, cero mantenimiento y con mas de 100 colores entre maderas, metálicos, 
              concreto y colores standard. Además de ser un producto con certificaciones de cuidado 
              ambiental y las mas altas normas de calidad mundial.
            </p>
          </div>
          <br/><hr/><br/>
          <div className="flex flex-col-reverse md:flex-row fadeInRight">
            <p className="text-gray-1000 w-full md:w-1/2 md:pr-4 text-justify justify-start">
              Aplicación de diferentes productos de alta calidad como HPL Abet Laminati en sistema 
              de fachada ventilada, celosías de aluminio y Alucobond en la remodelación de Hotel 
              Portobelo localizado en el centro historico de la ciudad de Guadalajara, Jal.
            </p>
            <ImageBoxText  
              image={porcelanicoImage}
              title="FACHADA HOTEL PORTOBELO"
              isPrimary
            />
          </div>
          <br/><hr/><br/>

          <div className="flex flex-col md:flex-row fadeInLeft">
            <ImageBoxText  
              image={decksImage} 
              title="PUERTO INTERIOR MANZANILLO"
            />
            <p className="text-gray-1000 w-full md:w-1/2 md:pl-4 text-justify">
              Recubrimiento de panel de aluminio metalico en el puerto interior de la Cd. de Manzanillo.
            </p>
          </div>
          <br/><hr/><br/>
          <div className="flex flex-col-reverse md:flex-row fadeInRight">
            <p className="text-gray-1000 w-full md:w-1/2 md:pr-4 text-justify justify-start">
              Proyecto de hotel de 3 estrellas, forrado con panel de aluminio comunmente llamada alucobond en Guadalajara, Jal.
            </p>
            <ImageBoxText  
              image={ecohotelImage}
              title="PROYECTO ECOHOTEL"
              isPrimary
            />
          </div>
          <br/><hr/><br/>

          <div className="flex flex-col md:flex-row fadeInLeft">
            <ImageBoxText  
              image={awardsImage} 
              title="A AWARDS"
            />
            <p className="text-gray-1000 w-full md:w-1/2 md:pl-4 text-justify">
              Nos complace anunciar que dos de nuestras líneas que distribuimos en México de la empresa 
              Stone Source han sido nombradas finalistas de los premios Architizer Awards 2015, la 
              línea Raw en la categoría: concreto y piedra, y U-Color en la categoría: acabados en pisos 
              y fachadas. U-Color es una serie de chorro de tinta y azulejo esmaltado de porcelana en 
              frío que ofrece un sinfín de colores para mejorar las visiones creativas de los diseñadores; 
              invita a la invención de nuevos conceptos de diseño. Los cuatro azulejos de chorro de tinta 
              neutros (Neutro, Grigio, Biondo y Bruno) están diseñados para ser el telón de fondo para una 
              combinación de cualquiera de los 60 cuadros de color frío cristal. El proceso de producción 
              de frío acristalamiento permite excepcional flexibilidad de la producción, lo que significa 
              que pequeños lotes se pueden producir en una variedad de colores; algo que no se logra mediante 
              sistemas de combustión convencionales que son típicos de la industria cerámica. Cada pieza es 
              única, con ligeras diferencias de color, sombras o incluso pequeñas imperfecciones creadas 
              intencionalmente para mejorar aún más el producto. U-Color ganó el Chicago Athenaeum Good 
              Design Award 2014. Raw es una colección de piedras naturales dado una textura cruda, primitiva 
              que se enfatiza dramáticamente cuando la iluminación adecuada se echó sobre ella. La colección 
              fue diseñada por Piero Lissoni. Con una extraordinaria atención al detalle y un enfoque lúdico 
              a la vida y el diseño, Lissoni es capaz de transformar la piedra natural, un material que se 
              ha utilizado en la arquitectura y el diseño durante siglos, en un lienzo extraordinario para 
              la textura y la sombra. Al examinar el detalle y experimentar con su superficie y los 
              tratamientos que se le aplican, Lissoni crea matices que son a primera vista pequeña, entonces 
              de una mayor interacción convertirse en gran escala. En el caso de Raw, Lissoni evolucionó el 
              recurso tradicional de mármol y piedra caliza más popular del mundo, entonces proporcionó un 
              primer corte, el efecto sobre la superficie grabada. Esta evolución de la naturaleza se toma 
              un paso más como materiales se cortan en tablones modernas como normalmente se ven en la madera. 
              El resultado es un artesanal, todavía crudo, aspecto que puede ser mejor resumen de la descripción 
              "precisamente robusto". Raw fue seleccionado como finalista en el Interior Design Magazine 
              Mejor del Año Premios 2014.
            </p>
          </div>
        </div>
      </section>

    </>
  );
};
