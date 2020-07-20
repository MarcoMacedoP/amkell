import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./routes";
import FancyRoute from "./components/tools/FancyRoute";

import { Layout } from "./components/Layout";
import ScrollToTop from "./components/tools/ScrollToTop";
import ReactGA from "react-ga";

function App() {
  useEffect(() => ReactGA.initialize("UA-171812640-1"), []);
  return (
    <Router>
      <ScrollToTop>
        <Layout>
          <Switch>
            {routes.map((route, i) => (
              <FancyRoute key={i} {...route} />
            ))}
          </Switch>
        </Layout>
      </ScrollToTop>
    </Router>
  );
}

export default App;
