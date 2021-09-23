import React from "react";
import {Switch,Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Layout from "./Components/Layout/Layout";
import Login from "./Pages/Login";


function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/login" render={(props) => <Login {...props}/> } />
        </Switch>
      </Layout>
    </>
  );
}


export default App;
