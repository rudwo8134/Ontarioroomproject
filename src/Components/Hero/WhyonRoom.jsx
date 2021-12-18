import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { CommonStyles } from "../../staticFiles/CommonStyles";

const Why = styled.div`
  max-width: 1300px;
  margin: 120px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    color: ${CommonStyles.color.Primary};
    font-weight: ${CommonStyles.bold.ExtraBold};
    font-family: DM Sans;
    font-size: 64px;
    text-align: "center";
  }
  .line {
    width: ${({ lineWidth }) => `${lineWidth * 0.4}px`};
    height: 1px;
    background-color: ${CommonStyles.color.PrimaryLight2};
  }
  .firstCards {
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    width: 70%;
    justify-content: space-between;
    align-items: space-between;
  }
  .card{
      width: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h4{
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70px;
        color:${CommonStyles.color.Primary};
        font-weight: ${CommonStyles.bold.ExtraBold};
      }
      p{
          width: 400px;
          text-align: center;
          font-weight: ${CommonStyles.bold.Medium};
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
          <h4>
            01.<br></br>간편
          </h4>
          
          <p>
            원하는 것들만 한눈에 효율적이고 짧은 시간에 볼 수 있는 시스템을
            만들도록 노력하였습니다.
          </p>
        </div>
        <div className="card">
          <h4>
            02.<br></br>마인드 셋
          </h4>
          <p>
            우리는 이익보다는 이용자들의 편의를 중심적으로 생각하며 나아갈
            것입니다.
          </p>
        </div>
      </section>

      <section className="firstCards">
        <div className="card">
          <h4>
            03.<br></br>신용
          </h4>
          <p>
            우리 개발자 모두가 유학으로부터 이민까지 겪은 경험자로서 캐나다
            생활의 효율을 극대화할 수 있는 방향으로 연구했습니다.
          </p>
        </div>
        <div className="card">
          <h4>
            04.<br></br>소통
          </h4>
          <p>
            이용자의 소리를 최우선적으로 생각하며 융통적으로 니즈에 맞게
            시스템을 구축해 나갈 것입니다.
          </p>
        </div>
      </section>
    </Why>
  );
};

export default WhyonRoom;
