import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

type ActiveLinkType = React.FC<{
  to: any;
  onClick?: () => void;
}>;
/**
 *  Component that shows an style when user is in current page
 */
export const ActiveLink: ActiveLinkType = ({
  to,
  children,
  onClick = () => {},
}) => {
  const isMatching = useRouteMatch({
    path: to,
    exact: true,
  });
  return (
    <Link
      onClick={onClick}
      className={`rounded-md p-1 ${
        isMatching ? "bg-primary text-white" : "bg-transparent"
      }`}
      to={to}
    >
      {children}
    </Link>
  );
};
