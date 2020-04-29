import React from "react";

import { Header } from "../components/Header";
import { Title } from "../components/Title";
import contactImage from "../assets/img/contacto.png";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

type Props = {};
type ContactType = React.FC<Props>;

export const ContactPage: ContactType = (props) => {
  return (
    <>
      <Header contact />

      <section className="flex flex-col">
        <Title>Contacto</Title>
        <div className="relative h-screen flex justify-end w-full">
          <form action="" className="w-1/2 relative z-10">
            <Input label="Nombre" />
            <Input label="E-Mail" />
            <Input label="Telefono" />
            <Input label="Mensaje" isTextArea />
            <div className="flex">
              <Button text="Enviar" className="w-1/2 mr-2" color="primary" />
              <Button text="Llamar" className="w-1/2" color="secondary" />
            </div>
          </form>
          <img
            src={contactImage}
            alt=""
            className=" absolute w-screen h-screen z-0"
            style={{ left: "-6rem" }}
          />
        </div>
      </section>
    </>
  );
};
