/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import logoWhite from "../assets/img/logo-white.png";
import footerBackground from "../assets/img/footer.png";
import facebookIcon from "../assets/icons/facebook-icon.svg";
import instagramIcon from "../assets/icons/instagram-icon.svg";
import youtubeIcon from "../assets/icons/youtube-icon.png";
import phoneIcon from "../assets/icons/phone-icon.svg";
import whatsappIcon from "../assets/icons/whatsapp-icon.svg";
import { Link } from "react-router-dom";
import { ActiveLink } from "./ActiveLink";
type Props = {};
type LayoutType = React.FC<Props>;
export const PHONE_NUMBER = "3335503712";
export const WHATSAPP_NUMBER = "3338012003";
const CONTACT_DATA = [
  "Whatsapp: (33)38012003",
  "Conmutador: 3335503712",
  "info@amkel.com.mx",
  "Fray Luis de Palacio 379",
  "Col. Ladrón de Guevara",
  "CP: 44600",
  "Guadalajara Jalisco,Mex",
];

export const Layout: LayoutType = (props) => {
  const [hasClickedOnMenu, setHasClickedOnMenu] = useState(false);
  const [contactData] = useState(CONTACT_DATA);

  function handleClick() {
    setHasClickedOnMenu(!hasClickedOnMenu);
  }

  const closeMenu = () => setHasClickedOnMenu(false);

  return (
    <article className="h-screen box-content w-full overflow-x-hidden">
      <nav className="py-2 px-6 box-border sticky top-0 bg-gray-200 top-0 w-screen left-0 flex items-center justify-between shadow-md z-50">
        <Link to="/">
          <Logo />
        </Link>
        <button
          className="material-icons lg:hidden"
          onClick={handleClick}
        >
          menu
        </button>
        <ul
          className={`Layout__menu w-0 h-0 p-0 lg:relative lg:flex-end md:w-2/3 md:h-auto`}
        >
          <span
            className="close-icon material-icons absolute top-0 text-gray-400 lg:hidden"
            onClick={closeMenu}
          >
            close
          </span>
          <ActiveLink to="/compañia" onClick={closeMenu}>
            <span className="p-2 hover-animate-a"> Empresa </span>
          </ActiveLink>
          <ActiveLink to="/soluciones" onClick={closeMenu}>
            <span className="p-2 hover-animate-a"> Soluciones </span>
          </ActiveLink>
          <ActiveLink to="/materiales" onClick={closeMenu}>
            <span className="p-2 hover-animate-a"> Materiales </span>
          </ActiveLink>
          <ActiveLink to="/galeria" onClick={closeMenu}>
            <span className="p-2 hover-animate-a"> Galería </span>
          </ActiveLink>
          <ActiveLink to="/proyectos" onClick={closeMenu}>
            <span className="p-2 hover-animate-a"> Proyectos </span>
          </ActiveLink>
          <ActiveLink to="/contacto" onClick={closeMenu}>
            <span className="p-2 hover-animate-a"> Contacto </span>
          </ActiveLink>
          <li className="items-center hidden lg:flex">
            <div className="flex items-center">
              <a
                href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={whatsappIcon} alt="" className="icon" />
              </a>
              <a href={`tel:${PHONE_NUMBER}`}>
                <img src={phoneIcon} alt="" className="icon" />
              </a>
              <p className="text-sm color-black">{PHONE_NUMBER}</p>
            </div>
            <a
              href="https://www.facebook.com/amkelfachadas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebookIcon}
                alt=""
                className="social-icon"
              />
            </a>
            <a
              href="https://youtu.be/dLHzJMAp4ic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={youtubeIcon}
                alt=""
                className="social-icon object-contain"
              />
            </a>
            <a
              href="https://www.instagram.com/amkel.sa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramIcon}
                alt=""
                className="social-icon"
              />
            </a>
          </li>
        </ul>
        <ul
          className={`Layout__menu lg:hidden
            ${
              hasClickedOnMenu
                ? "w-2/3 h-auto py-8 px-6"
                : "w-0 h-0 p-0"
            }`}
        >
          <span
            className="close-icon material-icons absolute top-0 text-gray-400 lg:hidden"
            onClick={closeMenu}
          >
            close
          </span>
          <ActiveLink to="/" onClick={closeMenu}>
            Empresa
          </ActiveLink>
          <ActiveLink to="/soluciones" onClick={closeMenu}>
            Soluciones
          </ActiveLink>
          <ActiveLink to="/materiales" onClick={closeMenu}>
            Materiales
          </ActiveLink>
          <ActiveLink to="/galeria" onClick={closeMenu}>
            Galería
          </ActiveLink>
          <ActiveLink to="/proyectos" onClick={closeMenu}>
            Proyectos
          </ActiveLink>
          <ActiveLink to="/contacto" onClick={closeMenu}>
            Contacto
          </ActiveLink>
          <li className="items-center hidden lg:flex">
            <div className="flex items-center">
              <img src={whatsappIcon} alt="" className="icon" />
              <img src={phoneIcon} alt="" className="icon" />
              <p className="text-sm color-black">(33) 38012003</p>
            </div>
            <img src={facebookIcon} alt="" className="icon" />
            <img
              src={youtubeIcon}
              alt=""
              className="icon object-contain"
            />
            <img src={instagramIcon} alt="" className="icon" />
          </li>
        </ul>
      </nav>
      <section className="w-full min-h-screen px-2 box-border overflow-hidden md:px-16 lg:px-24">
        {props.children}
      </section>
      <footer className="w-full h-48 mt-16  justify-between">
        <div
          className="p-5 bg-cover bg-center flex flex-col md:items-center"
          style={{ backgroundImage: `url(${footerBackground})` }}
        >
          <div className="flex">
            <div className="hidden h-full md:block">
              <Logo />
            </div>
            <FooterItem
              title="Menu"
              list={[
                "Inicio",
                "Empresa",
                "Soluciones",
                "Materiales",
                "Proyectos",
                "Contacto",
                "Aviso de privacidad",
              ]}
            />
            <FooterItem title="Contacto" list={contactData} />
          </div>
          <div className="mt-2 md:flex">
            <p className="text-primary mb-2 font-bold opacity-50">
              Siguenos
            </p>
            <div className="flex">
              <a
                href="https://www.facebook.com/amkelfachadas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookIcon} alt="" className="icon" />
              </a>
              <a
                href="https://youtu.be/dLHzJMAp4ic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtubeIcon} alt="" className="icon" />
              </a>
              <a
                href="https://www.instagram.com/amkel.sa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramIcon} alt="" className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-red-600 h-12 w-full text-white text-center text-sm flex items-center justify-between">
          <span className="w-5/6">
            AMKEL Soluciones Arquitectonicas 2020
          </span>
          <div className="bg-blue-500 w-1/6 h-full flex items-center justify-center">
            <span className="material-icons">email</span>
          </div>
        </div>
      </footer>
    </article>
  );
};
type LogoProps = { isWhite?: boolean; className?: string };
const Logo = ({ isWhite = false, className }: LogoProps) => (
  <img
    className={`object-contain h-12 ${className}`}
    src={isWhite ? logoWhite : logo}
    alt="Amkel soluciones coorporativas "
  />
);
type FooterItemProps = { title: string; list: Array<string> };
const FooterItem = ({ title, list }: FooterItemProps) => (
  <div className="w-3/6 opacity-50">
    <p className="text-primary mb-2 font-bold">{title}</p>
    <ul className="text-sm w-full text-white">
      {list.map((content, index) => (
        <li key={index}>
          {content}
          <br />
        </li>
      ))}
    </ul>
  </div>
);
