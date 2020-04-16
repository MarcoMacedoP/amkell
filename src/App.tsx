import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
import { HomePage } from "./pages/Home";
import { MaterialsPage } from "./pages/Materials";
import { ProyectsPage } from "./pages/Proyects";
import { CompanyPage } from "./pages/Company";
import { SolutionsPage } from "./pages/Solutions";
import { GalleryPage } from "./pages/Gallery";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/contacto">
            <ProyectsPage />
          </Route>
          <Route path="/proyectos">
            <ProyectsPage />
          </Route>
          <Route path="/materiales">
            <MaterialsPage />
          </Route>
          <Route path="/empresa">
            <CompanyPage />
          </Route>
          <Route path="/galeria">
            <GalleryPage />
          </Route>
          <Route path="/soluciones">
            <SolutionsPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
