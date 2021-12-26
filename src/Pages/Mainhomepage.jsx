import React from 'react';

import Newhero from '../Components/Hero/Newhero';
import WhyonRoom from '../Components/Hero/WhyonRoom';

import NewUpdate from '../Components/newUpdate/NewUpdate';
import Ourteam from '../Components/Ourteam/Ourteam';

const Mainhomepage = () => {
  return (
    <>
      <Newhero />
      <NewUpdate />
      <WhyonRoom />
      <Ourteam />
    </>
  );
};

export default Mainhomepage;
