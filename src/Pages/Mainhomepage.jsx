import React from 'react'
import Calltoaction from '../Components/calltoaction/Calltoaction';
import Contact from '../Components/Contactform/Contact';
import { Feature } from '../Components/Features/Feature';
import Newhero from '../Components/Hero/Newhero'
import Newintro from '../Components/Intro/Newintro'
import Ourteam from '../Components/Ourteam/Ourteam';
import Testmonial from '../Components/Testmonial/Testmonial';

const Mainhomepage = () => {
  return (
    <>
      <Newhero />
      <Newintro />
      <Feature/>
      <Ourteam/>
      <Calltoaction/>
      <Testmonial/>
      <Contact/>
    </>
  );
}

export default Mainhomepage
