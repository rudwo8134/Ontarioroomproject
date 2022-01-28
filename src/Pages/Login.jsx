import React from 'react';
import { Helmet } from 'react-helmet';
import NewRegisterandLoginpage from '../Components/newRegiseterAndLogin/NewRegisterandLoginpage';
import SEO from '../staticFiles/SeoTag';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>
          {SEO.title} | Login/Register
        </title>
        <meta name="description" content={`${SEO.description}`} />
        <meta name="keywords" content={SEO.keyword} />
      </Helmet>
      <NewRegisterandLoginpage />
    </>
  );
};

export default Login;
