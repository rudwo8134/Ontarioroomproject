import React from 'react'
import styled from 'styled-components'
import { Innerlayout } from '../../styles/layout'
import Card from '../util/Card';
import image1 from '../../assets/feature2.png'
import image2 from '../../assets/feature3.png'
import image3 from '../../assets/feature4.png'
import image4 from '../../assets/feature5.png'

const Carddata = [
  {
    image: image1,
    title: 'Startup Framework',
    description:
      'Startup Framework works fine on devices supporting Retina Desplay. Feel the clarity!',
    subname: 'Ui kit, Framework, Landing page, generator',
  },
  {
    image: image2,
    title: 'Slides',
    description:
      'We have created a new product that will help designers create websites for their startups.',
    subname: 'Ui kit, Framework, Landing page, generator',
  },
  {
    image: image3,
    title: 'Flat UI Pro',
    description:
      'Components and blocks are fixed to the common and popular 12 Grid system.',
    subname: 'Ui kit, Framework, Landing page, generator',
  },
  {
    image: image4,
    title: 'Sides',
    description:
      'We have created a new product that will help designers create websites for their startups.',
    subname: 'Ui kit, Framework, Landing page, generator',
  },
];

export const Feature = () => {
  return (
    <Innerlayout>
      <Featurestyle>
        <span className="headercontainer">
          <span className="title">Our Works</span>
          <span className="paragraph">
            The most important part of the Startup Framework is the samples. The
            samples form a set of 20 usable pages you can use as is or you can
            add new blocks from UI Kit.
          </span>
        </span>
        <div className="cardcontainer">
          {Carddata.map((card,index)=>{
            return (
              <Card
                image={card.image}
                title={card.title}
                description={card.description}
                subname={card.subname}
                key={index}
              />
            );
          })}
        </div>
      </Featurestyle>
    </Innerlayout>
  );
}

const Featurestyle = styled.section`
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  .headercontainer {
    width: 778px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    .title {
      font-style: normal;
      font-weight: bold;
      font-size: 42px;
      line-height: 52px;
      /* identical to box height, or 124% */

      text-align: center;
      letter-spacing: -0.4px;

      /* Main */

      color: #ea5385;
      margin-bottom: 20px;
    }
    .paragraph {
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      line-height: 32px;
      /* or 145% */

      text-align: center;

      /* Colors / Text */

      color: rgba(21, 20, 57, 0.4);

      mix-blend-mode: normal;
      margin-bottom: 62px;
    }
  }
  .cardcontainer{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
    column-gap: 2rem;
  }
`;
