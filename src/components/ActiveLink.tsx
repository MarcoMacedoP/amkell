import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

type ActiveLinkType = React.FC<{
  to: any;
  onClick?: () => void;
  className?: string;
}>;
/**
 *  Component that shows an style when user is in current page
 */
export const ActiveLink: ActiveLinkType = ({
  to,
  children,
  onClick = () => {},
  className,
}) => {
  const isMatching = useRouteMatch({
    path: to,
    exact: true,
  });
  return (
    <Link
      onClick={onClick}
      className={`rounded-md p-1 ${
        isMatching
          ? "bg-primary text-white lg:text-primary lg:bg-transparent"
          : "bg-transparent"
      } lg:mx-2 ${className}`}
      to={to}
    >
      {children}
    </Link>
  );
};
