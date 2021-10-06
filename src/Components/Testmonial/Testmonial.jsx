import React from 'react'
import styled from 'styled-components'
import { Innerlayout } from '../../styles/layout'
import image from '../../assets/Ellipse.png'
import image2 from '../../assets/Ellipse2.png'


const Testmonial = () => {
  return (
    <Wrapper>
      <Innerlayout>
        <Testmonialstyle>
          <div className="left">
            <img src={image} alt="person" />
            <div className="text">
              <p className="paragraph">
                Extremely easy to use, helped us develop our Vote for George
                Washington micro-site extre- mely quickly! We will definitely
                use it again for other projects
              </p>
              <span className="name">Timothy Nathan</span>
            </div>
          </div>
          <div className="right">
            <img src={image2} alt="person2" />
            <div className="text">
              <p className="paragraph">
                As a business targeting high net worth individuals, we were
                looking for a slick, cool and mini-malistic design for our
                website
              </p>
              <span className="name">Austin Campbell</span>
            </div>
          </div>
        </Testmonialstyle>
      </Innerlayout>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 50vh;
  background:#EA5385; ;
`;

const Testmonialstyle = styled.div`
  height: 50vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem;
  align-items: center;
  .left {
    display: flex;
    align-items: flex-start;
    width: 490px;
    height: 120px;
    justify-content: center;
    img {
      margin-right: 53px;
    }
    .text {
      p {
        margin: 0;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 32px;
        /* or 145% */

        /* Colors / White */

        color: #ffffff;

        opacity: 0.7;
        margin-bottom: 17px;
      }
      .name {
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 26px;
        /* identical to box height, or 186% */

        letter-spacing: 2px;
        text-transform: uppercase;

        color: #000000;
      }
    }
  }
  .right {
    display: flex;
    align-items: flex-start;
    height: 120px;
    justify-content: center;

    img {
      margin-right: 53px;
    }
    .text {
      width: 380px;
      p {
        margin: 0;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 32px;
        /* or 145% */

        /* Colors / White */

        color: #ffffff;

        opacity: 0.7;
        margin-bottom: 17px;
      }
      .name {
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 26px;
        /* identical to box height, or 186% */

        letter-spacing: 2px;
        text-transform: uppercase;

        color: #000000;
      }
    }
  }
`;

export default Testmonial
