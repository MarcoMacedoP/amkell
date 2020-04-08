import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
import { HomePage } from "./pages/Home";
import { MaterialsPage } from "./pages/Materials";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route to="/materiales">
            <MaterialsPage />
          </Route>
          <Route to="/">
            <HomePage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
