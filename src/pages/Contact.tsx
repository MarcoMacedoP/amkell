import React from "react";

import { Header } from "../components/Header";



type Props = {};
type ContactType = React.FC<Props>;

export const ContactPage: ContactType = (props) => {
  return (
    <>
      <Header contact />

      <section className="flex flex-col">
        <div className="w-full">
          <div className="line mb-2 uppercase" />
          <h2 className="text-primary text-2xl mb-2 md:mb-8">
            CONTACTO
          </h2>
        </div>
      </section>

    </>
  );
};
