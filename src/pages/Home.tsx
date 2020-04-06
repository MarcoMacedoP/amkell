import React from "react";
import { HomeSlider } from "../components/HomeSlider";
type Props = {};
type HomeType = React.FC<Props>;

export const HomePage: HomeType = (props) => {
  console.log(props);
  return (
    <>
      <HomeSlider />
    </>
  );
};
