import React from 'react'
import { Feature } from '../Components/Features/Feature';
import Newhero from '../Components/Hero/Newhero'
import Newintro from '../Components/Intro/Newintro'

const Mainhomepage = () => {
  return (
    <>
      <Newhero />
      <Newintro />
      <Feature/>
    </>
  );
}

export default Mainhomepage
