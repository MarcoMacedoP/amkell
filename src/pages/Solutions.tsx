import React from "react";
import { Header } from "../components/Header";

type SolutionsType = React.FC<{}>;

export const SolutionsPage: SolutionsType = () => {
  return (
    <>
      <Header />

      <div>
        <p>Página de soluciones :)</p>
      </div>
    </>
  );
};
