import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./routes";
import FancyRoute from "./components/tools/FancyRoute";

import { Layout } from "./components/Layout";
import ScrollToTop from "./components/tools/ScrollToTop";

function App() {
  return (
    <Router>
        <Layout>
          <ScrollToTop>
            <Switch>
              {routes.map((route, i) => (
                <FancyRoute key={i} {...route} />
              ))}
            </Switch>
          </ScrollToTop>
        </Layout>
    </Router>
  );
}

export default App;
