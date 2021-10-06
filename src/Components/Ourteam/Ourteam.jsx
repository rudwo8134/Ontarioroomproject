import React from 'react'
import styled from 'styled-components'
import { Innerlayout } from '../../styles/layout'
import PersonCard from '../util/PersonCard'
import Primarybutton from '../util/Primarybutton'
import image1 from '../../assets/uer1.png'
import image2 from '../../assets/usr2.png'

const Ourtemadata = [
  {
    name: '이준서',
    job: 'Design Director',
    job2: 'ONROOM CO-FOUNDER',
    image: image1,
  },
  {
    name: '홍기혁',
    job: 'Marketing Director',
    job2: 'ONROOM CO-FOUNDER',
    image: image2,
  },
  {
    name: '신경재',
    job: 'Development Director',
    job2: 'ONROOM CO-FOUNDER',
    image: image2,
  },
];


const Ourteam = () => {
  return (
    <Innerlayout>
      <Ourteamstyle>
        <div className="title">
          <h4 className="main">Our Awesome Team</h4>
          <p className="paragraph">
            We have created a new product that will help designers, developers
            and companies create websites for their startups quickly and easily.
          </p>
          <Primarybutton
            name="Enjoy Our Team"
            style={{ width: '200px', height: '50px' }}
          />
        </div>
        <div className="cardcontainer">
          {Ourtemadata.map((data,index)=>{
            return(
                  <PersonCard key={index}
                  name={data.name}
                  job={data.job}
                  job2={data.job2}
                  image={data.image}
                  />
            )
          })}
         
        </div>
      </Ourteamstyle>
    </Innerlayout>
  );
}

const Ourteamstyle = styled.section`
  height: 100vh;
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .main {
      font-weight: bold;
      font-size: 42px;
      line-height: 52px;
      text-align: center;
      letter-spacing: -0.4px;
      color: #1e0e62;
      margin-bottom: 20px;
    }
    .paragraph {
      font-weight: normal;
      font-size: 22px;
      line-height: 32px;
      /* or 145% */

      text-align: center;

      /* Colors / Text */
      width: 816px;
      color: rgba(21, 20, 57, 0.4);

      mix-blend-mode: normal;
      margin-bottom:47.2px;
    }
  }
  .cardcontainer{
    margin-top:76.8px;
    padding:2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default Ourteam
