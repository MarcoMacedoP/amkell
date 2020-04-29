import React from "react";

type TitleType = React.FC<{}>;

export const Title: TitleType = ({ children }) => {
  return (
    <div className="my-8">
      <div className="line" />
      <h2 className="text-primary text-2xl md:mb-6 uppercase font-semibold lg:tracking-wide">
        {children}
      </h2>
    </div>
  );
};
