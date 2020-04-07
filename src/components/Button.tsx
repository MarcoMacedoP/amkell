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
      className={`p-2 w-full rounded-lg ${
        color === "primary"
          ? "bg-primary text-white"
          : color === "secondary"
          ? "bg-black text-white"
          : "bg-transparent text-blue-500"
      } ${className}`}
      onClick={onClick}
    >
      <p>{text}</p>
    </button>
  );
};
