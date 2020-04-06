import React from 'react';

import {Layout} from "./components/Layout";

function App() {
  return (
    <Layout>
        <p className="text-xl text-red-400 hover:-rotate-90">
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
    </Layout>
  );
}

export default App;
