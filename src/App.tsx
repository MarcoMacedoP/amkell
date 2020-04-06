import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
import { HomePage } from "./pages/Home";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route to="/">
            <HomePage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
