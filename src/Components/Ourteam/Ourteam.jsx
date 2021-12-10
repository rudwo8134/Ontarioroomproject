import React from 'react';
import styled from 'styled-components';
import { Innerlayout } from '../../styles/layout';
import PersonCard from '../util/PersonCard';
import Primarybutton from '../util/Primarybutton';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import p1 from '../../assets/profile/person1.jpeg';
import p2 from '../../assets/profile/person2.png';
import p3 from '../../assets/profile/person3.jpeg';
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
            Onroom 의 궁극적인 목표는 이민율이 현저히 높은 캐나다에서 사는
            '이민자' 입장으로 불편한 점을 개선하고자 하는 목적이며, 유학,
            이민생활의 가치를 극대화할 수 있는 가장 중요한 거주공간을 위해
            ONROOM으로 시작하게 되었습니다. 이뿐만 아니라 직접 겪은 유학생,
            이민자로써 캐나다로 처음 오시는 분들을 위해 다양한 시스템을 구축할
            예정입니다
          </p>
          <Primarybutton
            name="자세히 알아보기"
            style={{ width: '200px', height: '50px' }}
          />
        </div>
        <div className="cardcontainer">
          {Ourtemadata.map((data, index) => {
            return (
              <PersonCard
                key={index}
                name={data.name}
                job={data.job}
                job2={data.job2}
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
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .line {
      background-color: ${CommonStyles.color.Primary};
      width: 130px;
      height: 4px;
      border-radius: 30px;
      margin-top: -20px;
      margin-bottom: 16px;
    }
    .main {
      font-weight: bold;
      font-size: 42px;
      line-height: 52px;
      text-align: center;
      letter-spacing: -0.4px;
      color: ${CommonStyles.color.Dark};
      margin-bottom: 20px;
    }
    .paragraph {
      font-weight: normal;
      font-size: 22px;
      line-height: 32px;
      /* or 145% */

      text-align: center;

      /* Colors / Text */
      width: 1030px;
      color: rgba(21, 20, 57, 0.4);

      mix-blend-mode: normal;
      margin-bottom: 47.2px;
    }
  }
  .cardcontainer {
    margin-top: 76.8px;
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
    row-gap: 30px;
  }
`;

export default Ourteam;
