import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from './routes'
import FancyRoute from './components/tools/FancyRoute'

import { Layout } from "./components/Layout";


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          {routes.map((route, i) =>
            <FancyRoute key={i} {...route} />
          )}
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
