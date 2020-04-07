import React from "react";
import { HomeSlider } from "../components/HomeSlider";
import { Button } from "../components/Button";
type Props = {};
type HomeType = React.FC<Props>;

export const HomePage: HomeType = (props) => {
  console.log(props);
  return (
    <>
      <HomeSlider />
      <section className="flex flex-wrap w-full flex-col mb-8">
        <div className="line mb-2" />
        <h2 className="text-primary text-2xl">Nosotros</h2>
        <p className="mt-2 text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper
          tempus quam lobortis tempus. Curabitur a dictum eros, non volutpat
          neque. Ut imperdiet placerat felis, et scelerisque felis consectetur
          eget. Suspendisse potenti. In consequat cursus turpis, nec iaculis
          augue facilisis eu. Nam eget fringilla ante. Sed tortor turpis, congue
          nec bibendum ut, pellentesque eget orci. Morbi quam justo, ullamcorper
          vitae metus sit amet, commodo molestie augue.
        </p>
        <Button text="Ver más" className="mt-4" />
      </section>
    </>
  );
};
