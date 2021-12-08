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
            <span className="title">Why ONROOM?</span>
            <span className="description">
              신속, 간편 원하는 것들만 한눈에 효율적이고 짧은 시간에 볼 수 있는
              시스템을 만들도록 노력하였습니다.
            </span>
          </div>
          <div className="paragraph2">
            <IoDocumentsOutline />
            <span className="title2">마인드,소통</span>
            <span className="description2">
              우리는 이익보다는 이용자들의 편의를 중심적으로 나아갈
              것입니다.이용자의 소리를 최우선적으로 생각하며 융통적으로 니즈에
              맞게 시스템을 구축해 나갈 것입니다.
            </span>
          </div>
          <div className="paragraph3">
            <FaRocket />
            <span className="title3">신용</span>
            <span className="description3">
              이용자의 소리를 최우선적으로 생각하며 융통적으로 니즈에 맞게
              시스템을 구축해 나갈 것입니다.
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
