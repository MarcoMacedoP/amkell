import React from "react";

type Props = {
  image: string;
  title: string;
  className?: string;
  isPrimary?: boolean;
};
type ImageWithBoxType = React.FC<Props>;

export const ImageWithBox: ImageWithBoxType = ({
  title,
  image = "",
  isPrimary = false,
  className = "",
}) => {
  return (
    <div className={`relative w-full mb-2 ${className}`}>
      <img
        src={image}
        className="w-full h-5/6 object-cover object-center"
        alt=""
      />
      <p
        className={`p-3 whitespace-no-wrap text-center absolute w-2/3 right-0 bottom-0 text-sm ${
          isPrimary ? "bg-primary text-white" : "bg-gray-200 text-black"
        }`}
      >
        {title}
      </p>
    </div>
  );
};
