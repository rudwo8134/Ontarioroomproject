import React from 'react'
import styled from 'styled-components'
import { Innerlayout } from '../../styles/layout'
import Primarybutton from '../util/Primarybutton';
import Image from '../../assets/calltocation.png'


const Calltoaction = () => {
  return (
    <Innerlayout>
      <Calltoactionstyle>
        <div className="left">
          <h1 className="title">
            They made signs for me to come down from the rock
          </h1>
          <span className="paragraph">
            Now the races of these two have been for some ages utterly extinct,
            and besides.
          </span>
          <Primarybutton name="Let's Try" />
        </div>
        <div className="right">
          <img src={Image} alt="rightscreen" />
        </div>
      </Calltoactionstyle>
    </Innerlayout>
  );
}

const Calltoactionstyle = styled.section`
  height: 50vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      font-style: normal;
      font-weight: bold;
      font-size: 42px;
      line-height: 52px;
      letter-spacing: -0.4px;
      color: #1e0e62;
    }
    .paragraph {
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      line-height: 32px;
      color: rgba(21, 20, 57, 0.4);
      mix-blend-mode: normal;
      margin-bottom: 50.2px;
    }
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5rem;
    img {
      width: 450px;
    }
  }
`;

export default Calltoaction
