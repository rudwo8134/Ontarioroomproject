import React from 'react'
import Footer from './Footer'
import NewNav from './NewNav'

const Layout = ({children}) => {
  return (
    <>
      <NewNav />
      {children}
      <Footer />;
    </>
  );

}

export default Layout
