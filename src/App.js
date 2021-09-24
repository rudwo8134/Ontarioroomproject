import React,{useEffect} from "react";
import {Switch,Route, Redirect} from 'react-router-dom'
import Home from "./Pages/Home";
import Layout from "./Components/Layout/Layout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Errorpage from './Pages/Errorpage';
import Rentcondohome from './Pages/Rentcondo/Rentcondohome';
import Rentcondopost from './Pages/Rentcondo/Rentcondopost';


import { connect } from "react-redux";
import { checkUserSession } from "./Redux/Users/user.action";
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser } from "./Redux/Users/user.selector";



function App(props) {
  const { checkUserSession, current } = props;
  useEffect(()=>{
    checkUserSession();
  },[checkUserSession])
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/register" render={() => <Register />} />
          <Route exact path="/rentcondo" render={() => <Rentcondohome />} />
          <Route exact path="/rentcondopost" render={() => !current ? <Redirect to="/login"/> : <Rentcondopost />} />
          <Route render={() => <Errorpage />} />
        </Switch>
      </Layout>
    </>
  );
}
const maptcprops = createStructuredSelector({
  current: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(maptcprops, mapDispatchToProps)(App);
