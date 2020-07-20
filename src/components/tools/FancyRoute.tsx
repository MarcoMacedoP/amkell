import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import "./FancyRoute.css";
import ReactGa from "react-ga";
import { Route as RouteItem } from "../../routes";

function FancyRoute(props: RouteItem) {
  useEffect(() => {
    nprogress.start();
    ReactGa.pageview(props.path);
    window.scrollTo(0, 0);
  }, [props.path]);

  return <Route {...props} />;
}

export default FancyRoute;
