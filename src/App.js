import React from "react";
import {Switch,Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
