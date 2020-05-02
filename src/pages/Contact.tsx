import React, { useEffect } from "react";

import { Header } from "../components/Header";
import { Title } from "../components/Title";
import contactImage from "../assets/img/contacto.png";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import nProgress from "nprogress";
import { useForm } from "../hooks/Forms";
import { PHONE_NUMBER } from "../components/Layout";

type Props = {};
type ContactType = React.FC<Props>;
const EMAIL = "info@amkell.com.mx";

export const ContactPage: ContactType = (props) => {
  const [form, handleChange] = useForm({
    nombre: "",
    number: "",
    mensaje: "",
  });

  useEffect(() => {
    nProgress.done();
  }, []);
  function handleSubmit() {
    if (!form.mensaje || !form.nombre || !form.number) {
      alert("Favor de rellenar todos los campos.");
      return;
    }
    const message = `Hola soy ${form.nombre} me contacte a traves de su pagina y web y les dejo el mensaje: ${form.mensaje}
    Mi número de contacto es: ${form.number}
    `;
    const mail = `mailto:${EMAIL}?body=${encodeURIComponent(
      message
    )}&subject=Contacto%20desde%20pagina`;
    window.open(mail, "_blank");
  }
  return (
    <>
      <Header contact />

      <section className="flex flex-col">
        <Title>Contacto</Title>
        <div className="relative h-screen flex justify-end w-full">
          <div className="w-full lg:w-1/2 relative z-10">
            <Input
              label="Nombre"
              value={form.nombre}
              onChange={handleChange}
              name="nombre"
            />
            <Input
              label="Mensaje"
              isTextArea
              value={form.mensaje}
              onChange={handleChange}
              name="mensaje"
            />
            <Input
              label="Número de telefono"
              name="number"
              onChange={handleChange}
              value={form.number}
            />
            <div className="flex">
              <Button
                text="Enviar"
                className="w-1/2 mr-2"
                color="primary"
                onClick={handleSubmit}
              />
              <a href={`tel:${PHONE_NUMBER}`} className="block w-1/2">
                <Button text="Llamar" className="w-full" color="secondary" />
              </a>
            </div>
          </div>
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
