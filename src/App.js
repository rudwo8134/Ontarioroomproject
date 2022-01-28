import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Components/Layout/Layout';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Errorpage from './Pages/Errorpage';
import RentcondoHome from './Pages/findroom/Home';

import { connect } from 'react-redux';
import { checkUserSession } from './Redux/Users/user.action';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './Redux/Users/user.selector';
import Rentcondodetail from './Pages/Rentcondo/Rentcondodetail';
import Intropages from './Pages/Intropages';
import Newhome from './Pages/Newhome';
import Mainhomepage from './Pages/Mainhomepage';
import Contactuspage from './Pages/ContactUs/Contactuspage';
import Postrentroom from './Pages/findroom/Postrentroom';
import ScrooltoTop from './staticFiles/ScrooltoTop';
import Mypage from './Pages/Mypage/Mypage';
import Postedit from './Pages/Mypage/Postupdate';
import { Helmet } from 'react-helmet';
import SEO from './staticFiles/SeoTag';
import LOGO from './assets/nav/LOGO.png';
function App(props) {
  const { checkUserSession, current } = props;
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <>
      <Layout>
        <Helmet>
          <title>
            {SEO.title} | {SEO.secondtitle}
          </title>
          <meta name="description" content={`${SEO.description}`} />
          <meta name="keywords" content={SEO.keyword} />
          <meta name="description" content={SEO.description} />
          <meta
            property="og:title"
            content={`${SEO.title} | ${SEO.secondtitle}`}
          />
          <meta property="og:description" content={SEO.description} />
          <meta property="og:image" itemProp="image" content={LOGO} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={'onroom.ca'} />
          <meta property="og:site_name" content={SEO.title} />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="400" />
          <meta
            property="twitter:title"
            content={`${SEO.title} | ${SEO.secondtitle}`}
          />
          <meta property="twitter:description" content={SEO.description} />
          <meta property="twitter:image" itemProp="image" content={LOGO} />
          <meta property="twitter:card" content="summary_large_image" />
        </Helmet>
        <ScrooltoTop />
        <Switch>
          <Route exact path="/" render={() => <Mainhomepage />} />
          <Route exact path="/oldverson" render={() => <Home />} />
          <Route exact path="/home" render={() => <Newhome />} />
          <Route exact path="/intro" render={() => <Intropages />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/register" render={() => <Register />} />
          <Route
            exact
            path="/Mypage"
            render={(props) =>
              !current ? <Redirect to="/login" /> : <Mypage {...props} />
            }
          />
          <Route
            exact
            path="/rentcondo"
            render={() =>
              !current ? <Redirect to="/login" /> : <RentcondoHome />
            }
          />
          <Route exact path="/ContactUs" render={() => <Contactuspage />} />
          <Route
            exact
            path="/rentcondo/:id"
            render={(props) =>
              !current ? (
                <Redirect to="/login" />
              ) : (
                <Rentcondodetail {...props} />
              )
            }
          />
          <Route
            exact
            path="/rentcondopost"
            render={() =>
              !current ? <Redirect to="/login" /> : <Postrentroom />
            }
          />
          <Route
            exact
            path="/postedit/"
            render={(props) =>
              !current ? <Redirect to="/login" /> : <Postedit {...props} />
            }
          />
          <Route render={() => <Errorpage />} />
        </Switch>
      </Layout>
    </>
  );
}
const maptcprops = createStructuredSelector({
  current: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(maptcprops, mapDispatchToProps)(App);
