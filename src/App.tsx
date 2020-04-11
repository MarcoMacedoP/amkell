import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
import { HomePage } from "./pages/Home";
import { MaterialsPage } from "./pages/Materials";
import { CompanyPage } from "./pages/Company";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/materiales">
            <MaterialsPage />
          </Route>
          <Route path="/empresa">
            <CompanyPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
