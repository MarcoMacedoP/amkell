import React from "react";

type Props = {
  text: string;
  color?: "primary" | "secondary" | "none";
  onClick?: () => void;
  className?: string;
};
type ButtonType = React.FC<Props>;

export const Button: ButtonType = ({
  className = "",
  text,
  color = "primary",
  onClick = () => {},
}) => {
  return (
    <button
      className={`p-2 w-full rounded-lg transition-color duration-300 ease-in ${
        color === "primary"
          ? "bg-primary text-white hover:bg-red-700 active:bg-red-700 focus:bg-red-700"
          : color === "secondary"
          ? "bg-black text-white hover:bg-gray-800"
          : "bg-transparent text-blue-500 hover:bg-gray-200"
      } ${className}`}
      onClick={onClick}
    >
      <p>{text}</p>
    </button>
  );
};
