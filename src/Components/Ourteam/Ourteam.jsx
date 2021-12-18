import React from 'react';
import styled from 'styled-components';
import { Innerlayout } from '../../styles/layout';
import PersonCard from '../util/PersonCard';
import Primarybutton from '../util/Primarybutton';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import p1 from '../../assets/profile/person1.jpeg';
import p2 from '../../assets/profile/person2.png';
import p3 from '../../assets/profile/person3.jpg';
import p4 from '../../assets/profile/person4.jpeg';

const Ourtemadata = [
  {
    name: '이준서',
    job: 'Creative Director',
    job2: 'CDO(Chief Design Officer)',
    image: p1,
  },
  {
    name: '홍기혁',
    job: 'Marketing Director',
    job2: 'CMO(Chief Marketing Officer)',
    image: p4,
  },
  {
    name: '신경재',
    job: 'Development Director',
    job2: 'CTO(Chief Technology Officer)',
    image: p2,
  },
  {
    name: '전지연',
    job: 'Development Manager',
    job2: 'CFO(Chief Financial Officer)',
    image: p3,
  },
];

const Ourteam = () => {
  return (
    <Innerlayout>
      <Ourteamstyle>
        <div className="title">
          <h4 className="main">개발 팀 소개</h4>
          <div className="line"></div>
          <p className="paragraph">
            <span className="onroom">ONROOM</span> 의 궁극적인 목표는 이민율이
            현저히 높은 캐나다에서 사는 '이민자' 입장으로 불편한 점을 개선하고자
            하는 목적이며, 유학, 이민생활의 가치를 극대화할 수 있는 가장 중요한
            거주공간을 위해 ONROOM으로 시작하게 되었습니다. <br />
            이뿐만 아니라 직접 겪은 유학생, 이민자로써 캐나다로 처음 오시는
            분들을 위해 다양한 시스템을 구축할 예정입니다
          </p>
        </div>
        <div className="cardcontainer">
          {Ourtemadata.map((data, index) => {
            return (
              <PersonCard
                key={index}
                name={data.name}
                job={data.job}
                image={data.image}
              />
            );
          })}
        </div>
      </Ourteamstyle>
    </Innerlayout>
  );
};

const Ourteamstyle = styled.section`
  margin-bottom: 100px;
  .cardcontainer {
    margin-top: 76.8px;
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1px;
    row-gap: 30px;
    @media screen and (max-width: 425px) {
      row-gap: 30px;
      grid-template-columns: repeat(1, 1fr);
      padding: 0;
      width: 100vw;
      column-gap: none;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    @media screen and (max-width: 375px) {
      row-gap: 30px;
      grid-template-columns: repeat(1, 1fr);
      padding: 0;
      width: 100vw;
      column-gap: none;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .line {
      background-color: ${CommonStyles.color.PrimaryLight2};
      width: 130px;
      height: 1px;
      border-radius: 30px;
      margin-top: 3px;
      margin-bottom: 16px;
      @media screen and (max-width: 425px) {
        margin-top: -13px;
      }
      @media screen and (max-width: 375px) {
        margin-top: -13px;
      }
    }
    .main {
      font-weight: bold;
      font-size: 36px;
      line-height: 52px;
      text-align: center;
      letter-spacing: -0.4px;
      color: ${CommonStyles.color.Primary};
      margin-bottom: 20px;
      @media screen and (max-width: 425px) {
        font-size: 2.5rem;
      }
      @media screen and (max-width: 375px) {
        font-size: 2rem;
      }
    }
    .paragraph {
      .onroom {
        color: ${CommonStyles.color.Primary};
        font-weight: bold;
      }
      font-family: DM Sans;
      font-weight: normal;
      font-size: 16x;
      line-height: 30px;
      /* or 145% */

      text-align: center;

      /* Colors / Text */
      width: 915px;
      color: #231f20;

      mix-blend-mode: normal;
      @media screen and (max-width: 425px) {
        width: 60vw;
        margin-bottom: 3rem;
      }
      @media screen and (max-width: 375px) {
        width: 70vw;
      }
    }
  }
`;

export default Ourteam;
