import React from 'react';
import styled from 'styled-components';
import BannerBackground from '../../assets/Introbanner.jpg';
import Image1 from '../../assets/introbanner1.jpg'
import Image2 from '../../assets/introbanner2.jpg';
import Image3 from '../../assets/introbanner3.jpg';
import person from '../../assets/person1.png'

const Wrapper = styled.section`
  width: 100vw;
 
`;
const Introbannercontainer = styled.div`
  width: 100vw;
  height: 40vh;
  background-image: url(${BannerBackground});
  background-size: cover;
  background-position: center;
`;
const Backdropcontainer = styled.div`
  backdrop-filter: blur(14px);
  width: 100%;
  height: 100%;
  position: relative;
`;
const Textcontainer = styled.div`
  position: absolute;
  top: 10%;
  left: 12%;
  background-color: transparent;
  width: 400px;
  height: 30%;
  font-size: 25px;
  color: black;
  font-weight: 500;
  text-transform: capitalize;
  color: #000;
  margin: 0;
  .promise {
    font-weight: 700;
    font-size: 47px;
  }
  h3 {
    font-size: 24px;
    width: 1000px;
    font-weight: 400;
  }
`;

const SecondContainer = styled.div`
  max-width: 1300px;
  margin: 3rem auto;
  .description {
    width: 1000px;
    margin: 0 auto;
    font-size: 17px;
    line-height: 2rem;
  }
`
const DescriptionContainer = styled.div`
  max-width: 1300px;
  height: 60vh;
  background-image: ${({ image }) => `url(${image})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 3rem auto;
  border-radius: 30px;
  padding: 77px;
  .textbox {
    h3 {
      font-size: 2.1rem;
      font-weight: 700;
      color: #fff;
    }
    span {
      font-size: 1.4rem;
      font-weight: 700;
      color: #fff;
    }
  }
`;

const Intropeoplecontainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  .card{
    width: 200px;
    .imagecontainer{
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      overflow:hidden;
      img{
        width: 200px;
        height: 200px;
      }
    }
  }
  .name{
    text-align:center;
    font-size:27px;
    letter-spacing:0.14rem ;
    font-weight: 800;
  }
  .jobcontainer{
    h4{
      font-size:12px;
      font-weight: 600;
    }
  }
`;

const IntroComponent = () => {
  return (
    <Wrapper>
      {/* intro box */}
      <Introbannercontainer>
        <Backdropcontainer>
          <Textcontainer>
            <h4>기업 정보</h4>
            <span className="promise">
              Onroom이<br></br> 지켜나갈 약속
            </span>
            <h3>
              저희는 항상 고객들을 위하여 최선을 다합니다. 고객들의 편안함을
              최우선으로 생각합니다.
            </h3>
          </Textcontainer>
        </Backdropcontainer>
      </Introbannercontainer>

      {/* second paragraph */}
      <SecondContainer>
        <p className="description">
          삼성전자는 사람과 사회를 생각하는 글로벌 일류기업을 추구합니다.
          ‘경영이념, 핵심가치, 경영원칙’의 가치체계를 경영의 나침반으로 삼고,
          인재와 기술을 바탕으로 최고의 제품과 서비스를 창출하여 인류사회에
          공헌하는 것을 궁극적인 목표로 삼고 있습니다. 이를 위해 삼성전자가
          지켜나갈 약속인 5가지 경영원칙을 세부원칙과 행동지침으로 구체화하여
          삼성전자 임직원이 지켜야 할 행동규범(Global Code of Conduct)으로
          제정하였으며, 모든 임직원의 사고와 행동에 5가지 핵심가치를 내재화하여
          삼성전자의 지속적인 성장을 견인하고 미래 방향성을 제시하고자 합니다.
        </p>
      </SecondContainer>
      <DescriptionContainer image={Image1}>
        <div className="textbox">
          <h3>경영철학과 목표</h3>
          <span>
            인재와 기술을 바탕으로 최고의 제품과 서비스를 창출하여 인류사회에
            공헌하는 것,
            <br /> 삼성전자가 추구하는 궁극적인 목표입니다.
          </span>
        </div>
      </DescriptionContainer>
      <DescriptionContainer image={Image2}>
        <div className="textbox">
          <h3>핵심 가치</h3>
          <span>
            삼성전자의 기업정신 중에서도 가장 핵심이며 모든 삼성전자인의 사고와
            행동에 깊이 체화된
            <br /> 신조로, 삼성이 가장 소중하게 지켜온 가치이자 신념입니다.
          </span>
        </div>
      </DescriptionContainer>
      <DescriptionContainer image={Image3}>
        <div className="textbox">
          <h3>Onroom이 지켜야 할 경영 원칙</h3>
          <span>
            사회적 책임을 다하려는 경영원칙은 글로벌 일류기업으로서 삼성전자가
            지켜나갈 약속입니다..
          </span>
        </div>
      </DescriptionContainer>

      <Intropeoplecontainer>
        <div className="card">
          <div className="imagecontainer">
            <img src={person} alt="person" />
          </div>
          <h3 className="name">홍기혁(Terry)</h3>
          <div className="jobcontainer">
            <h4>ONROOM CO-Founder (CEO)</h4>
            <h4>Marketing Director</h4>
          </div>
        </div>
        <div className="card">
          <div className="imagecontainer">
            <img src={person} alt="person" />
          </div>
          <h3 className="name">신경재(Eric)</h3>
          <div className="jobcontainer">
            <h4>ONROOM CO-Founder (CEO)</h4>
            <h4>Developemnt Director</h4>
          </div>
        </div>
        <div className="card">
          <div className="imagecontainer">
            <img src={person} alt="person" />
          </div>
          <h3 className="name">이준서</h3>
          <div className="jobcontainer">
            <h4>ONROOM CO-Founder (CEO)</h4>
            <h4>Design Director</h4>
          </div>
        </div>
        <div className="card">
          <div className="imagecontainer">
            <img src={person} alt="person" />
          </div>
          <h3 className="name"> 지혜</h3>
          <div className="jobcontainer">
            <h4>ONROOM CO-Founder (CEO)</h4>
            <h4>UI/UX animation Director</h4>
          </div>
        </div>
      </Intropeoplecontainer>
    </Wrapper>
  );
};

export default IntroComponent;
