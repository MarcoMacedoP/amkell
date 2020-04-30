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
    <div
      className={`relative w-full flex mb-2 ${
        isPrimary ? "md:w-full justify-end" : "md:w-1/2"
      } ${className}  `}
    >
      <img
        src={image}
        className={`w-full h-5/6 object-cover object-center md:h-full ${
          isPrimary && "md:w-1/2"
        }`}
        style={{ maxHeight: 200 }}
        alt=""
      />
      <p
        className={`p-3 whitespace-no-wrap text-center absolute w-2/3 right-0 bottom-0 text-sm md:p-4 md:text-lg ${
          isPrimary
            ? "bg-primary text-white md:w-1/3"
            : "bg-gray-200 text-black"
        }`}
      >
        {title}
      </p>
    </div>
  );
};
