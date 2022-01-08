import React from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import {BiTimer} from 'react-icons/bi';
import {RiUserHeartLine} from 'react-icons/ri';
import { FaRegHandshake } from 'react-icons/fa';
import {AiOutlineComment} from 'react-icons/ai';
const Why = styled.div`
  max-width: 1100px;
  margin: 120px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    color: ${CommonStyles.color.Primary};
    font-weight: ${CommonStyles.bold.ExtraBold};
    font-family: DM Sans;
    font-size: 64px;
    text-align: 'center';
    @media screen and (max-width: 476px) {
      font-size: 2.5rem;
    }
    @media screen and (max-width: 375px) {
      font-size: 2.0rem;
    }
  }
  .line {
    width: ${({ lineWidth }) => `${lineWidth * 0.4}px`};
    height: 1px;
    background-color: ${CommonStyles.color.Primary};
  }
  .firstCards {
    margin-top: 4rem;
    display: flex;
    flex-direction: row;
    width: 70%;
    justify-content: space-between;
    align-items: space-between;
    @media screen and (max-width: 375px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    @media screen and (max-width: 476px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  .card {
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      svg {
        font-size: 2rem;
        color: ${CommonStyles.color.Primary};
        margin-bottom: -1.5rem;
      }
    }
    h4 {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      font-size: 1.3rem;
      color: ${CommonStyles.color.Primary};
      font-weight: ${CommonStyles.bold.ExtraBold};
    }

    p {
      width: 400px;
      text-align: center;
      font-weight: ${CommonStyles.bold.Medium};
      line-height: 1.7rem;
      @media screen and (max-width: 375px) {
        width: 240px;
      }
      @media screen and (max-width: 476px) {
        width: 290px;
      }
    }
  }
`;

const WhyonRoom = () => {
  const TitleRef = useRef();

  return (
    <Why lineWidth={TitleRef?.current?.clientWidth}>
      <div ref={TitleRef} className="title">
        WHY ONROOM?
      </div>
      <div className="line" />
      <section className="firstCards">
        <div className="card">
          <div className="container">
            <BiTimer />
            <h4>간편</h4>
          </div>

          <p>
            세입자와 임대인 모두가 이용하기 쉬운
            <br /> 효율적이고 간편한 플랫폼
          </p>
        </div>
        <div className="card">
          <div className="container">
            <RiUserHeartLine />
            <h4>자세</h4>
          </div>
          <p>
            회원분들의 편의와 행복을
            <br /> 최우선으로 생각하는 플랫폼
          </p>
        </div>
      </section>

      <section className="firstCards">
        <div className="card">
          <div className="container">
            <FaRegHandshake />
            <h4>공감</h4>
          </div>
          <p>
            캐나다 이민자인 개발자들의 <br />
            렌트 경험과 노하우를 담은 플랫폼
          </p>
        </div>
        <div className="card">
          <div className="container">
            <AiOutlineComment />
            <h4>소통</h4>
          </div>
          <p>
            회원분들의 의견를 세심하게
            <br /> 듣고 신속히 반영하는 플랫폼
          </p>
        </div>
      </section>
    </Why>
  );
};

export default WhyonRoom;
