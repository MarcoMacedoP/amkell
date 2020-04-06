import React from "react";

type Props = {};
type HomeType = React.FC<Props>;

export const HomePage: HomeType = (props) => {
  console.log(props);
  return (
    <div>
      <p>Pagina de inicio</p>
    </div>
  );
};
