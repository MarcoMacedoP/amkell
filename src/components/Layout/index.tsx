import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import footerBackground from "../../assets/img/footer.png";
type Props = {};
type LayoutType = React.FC<Props>;

const CONTACT_DATA = [
  "Whatsapp: (33)38012003",
  "Conmutador: (33)10310952",
  "info@amkel.com.mx",
  "C. Antonio de León 434-1",
  "Col. Ladrón de Guevara",
  "CP: 44600",
  "Guadalajara Jalisco,Mex",
];

export const Layout: LayoutType = (props) => {
  const [hasClickedOnMenu, setHasClickedOnMenu] = useState(false);
  const [contactData] = useState(CONTACT_DATA);
  function handleClick() {
    console.log("click");
    setHasClickedOnMenu(!hasClickedOnMenu);
  }
  return (
    <article className="w-screen  box-content w-full overflow-x-hidden ">
      <nav className="py-2 px-6 fixed top-0 bg-gray-200 top-0 w-screen left-0 flex items-center justify-between shadow-md">
        <img
          className="object-contain h-12"
          src={logo}
          alt="Amkel soluciones coorporativas "
        />
        <button className="material-icons" onClick={handleClick}>
          menu
        </button>
        <ul
          className={`Layout__menu ${
            hasClickedOnMenu ? "w-2/3 h-auto py-8 px-6" : "w-0 h-0 p-0"
          }`}
        >
          <span
            className="close-icon material-icons absolute top-0 text-gray-400 md:hidden"
            onClick={handleClick}
          >
            close
          </span>
          <li>Soluciones</li>
          <li>Materiales</li>
          <li>Galería</li>
          <li>Proyectos</li>
          <li>Contacto</li>
        </ul>
      </nav>
      <section className="min-h-screen w-full mt-16 px-5">
        {props.children}
      </section>
      <footer className="w-full h-48  justify-between ">
        <div
          className="p-5 bg-cover bg-center flex flex-col"
          style={{ backgroundImage: `url(${footerBackground})` }}
        >
          <FooterItem title="Contacto" list={contactData} />
        </div>
        <div className="bg-red-600 h-12 w-full text-white text-center text-sm flex items-center justify-between">
          <span className="w-5/6">AMKEL Soluciones Arquitectonicas 2020</span>
          <div className="bg-blue-500 w-1/6 h-full flex items-center justify-center">
            <span className="material-icons">email</span>
          </div>
        </div>
      </footer>
    </article>
  );
};

type FooterItemProps = { title: string; list: Array<string> };
const FooterItem = ({ title, list }: FooterItemProps) => (
  <>
    <p className="text-primary mb-2 font-bold">{title}</p>
    <ul className="text-sm w-4/6 text-white">
      {list.map((content, index) => (
        <li key={index}>
          {content}
          <br />
        </li>
      ))}
    </ul>
  </>
);
