import React from 'react'
import styled,{keyframes} from 'styled-components'
import { Innerlayout } from '../../styles/layout';
import {IoDocumentsOutline} from 'react-icons/io5'
import {FaRocket} from 'react-icons/fa'
import Monitor from '../../assets/Monitor.png'
import Message1 from '../../assets/message_blue.svg'
import Message2 from '../../assets/message_pink.svg'
import Ring from '../../assets/ring_orange.svg'
const Newintro = () => {
  return (
    <Innerlayout>
      <Newintrostyle>
        <div className="rightContent">
          <div className="paragraph1">
            <span className="title">Ready for Use</span>
            <span className="description">
              Startup Framework contains components and compex blocks which can
              wasily be integrated into almost any design.
            </span>
          </div>
          <div className="paragraph2">
            <IoDocumentsOutline />
            <span className="title2">Many Useful Components</span>
            <span className="description2">
              Startup Framework contains components and complex blocks which can
              easily be inte-grated into almost any design.{' '}
            </span>
          </div>
          <div className="paragraph3">
            <FaRocket />
            <span className="title3">Feel Our Design</span>
            <span className="description3">
              Samples will show you the feeling on how to play around using the
              components in the website building process.
            </span>
          </div>
        </div>
        <div className="leftContent">
          <img src={Monitor} alt="monitor" className="monitor" />
          <img src={Message1} alt="message1" className="message1" />
          <img src={Message2} alt="message2" className="message2" />
          <img src={Ring} alt="ring" className="ring" />
        </div>
      </Newintrostyle>
    </Innerlayout>
  );
}

const Move = keyframes`
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
`;
const Move2 = keyframes`
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
`;
const Move3 = keyframes`
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(5deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
`;

const Newintrostyle = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem;
  .rightContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .paragraph1 {
      display: flex;
      flex-direction: column;
      margin-bottom: 62.7px;
      .title {
        font-style: normal;
        font-weight: bold;
        font-size: 42px;
        line-height: 52px;
        letter-spacing: -0.4px;
        color: #ea5385;
        margin-bottom: 23px;
      }
      .description {
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 32px;
        color: #4e4952;
      }
    }
    .paragraph2 {
      display: flex;
      flex-direction: column;
      margin-bottom: 62.7px;
      svg {
        font-family: FontAwesome;
        font-size: 40px;
        line-height: 46px;
        color: #ea5385;
        margin-bottom: 23.9px;
      }
      .title2 {
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 32px;
        color: #4e4952;
        margin-bottom: 17px;
      }
      .description2 {
        font-family: DM Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: #4e4952;
      }
    }
    .paragraph3 {
      display: flex;
      flex-direction: column;
      margin-bottom: 62.7px;
      svg {
        font-family: FontAwesome;
        font-size: 40px;
        line-height: 46px;
        color: #ea5385;
        margin-bottom: 23.9px;
      }
      .title3 {
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 32px;
        color: #4e4952;
        margin-bottom: 17px;
      }
      .description3 {
        font-family: DM Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: #4e4952;
      }
    }
  }
  .leftContent {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .monitor {
      transition: all 0.4s ease-in-out;
      animation: ${Move3} 8s infinite;
      animation-delay: 0.5s;
    }
    .message1 {
      position: absolute;
      top: 100px;
      right: 0;
      transition: all 0.4s ease-in-out;
      animation: ${Move} 8s infinite;
      animation-delay: 0.5s;
    }
    .message2 {
      position: absolute;
      bottom: 20%;
      left: 10%;
      transition: all 0.4s ease-in-out;
      animation: ${Move} 8s infinite;
      animation-delay: 0.5s;
    }
    .ring {
      position: absolute;
      right: 10%;
      bottom: 20%;
      transition: all 0.4s ease-in-out;
      animation: ${Move2} 8s infinite;
      animation-delay: 0.5s;
    }
  }
`;




export default Newintro
