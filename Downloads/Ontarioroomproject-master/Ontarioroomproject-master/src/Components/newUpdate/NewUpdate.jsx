import React from 'react';
import styled from 'styled-components';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import Background from '../../assets/feature3.png';

const NewupdateWrapper = styled.div`
  width: 100vw;
  height: 627px;
  .headerContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 48px;
    .updatename {
      font-size: ${CommonStyles.fontSize.ExtraLarge1};
      font-weight: ${CommonStyles.bold.LittleBold};
      text-align: 'center';
    }
    .line {
      background-color: ${CommonStyles.color.Primary};
      width: 75px;
      height: 4px;
      border-radius: 30px;
      margin-top: -20px;
      margin-bottom: 16px;
    }
  }
  .cardContainer {
    display: flex;
    margin: 0 30px;
    .rentCard {
      width: 350px;
      height: 350px;
      margin-right: 30px;
      position: relative;
      cursor: pointer;
    }
    .textcontainer {
      position: absolute;
      left: 10%;
      bottom: 15%;
      .address {
        font-size: 22;
        font-weight: ${CommonStyles.bold.LittleBold};
        color: ${CommonStyles.color.White};
      }
      .price {
        font-size: 22;
        font-weight: ${CommonStyles.bold.LittleBold};
        color: ${CommonStyles.color.Primary};
      }
      span {
        font-weight: 300;
        font-size: 14px;
        color: ${CommonStyles.color.White};
        text-decoration-line: underline;
        text-underline-position: under;
        text-decoration-thickness: 2px;
      }
    }
    .imgfile {
      width: 100%;
      height: 100%;
    }
  }
`;

const NewUpdate = () => {
  return (
    <NewupdateWrapper>
      <div className="headerContainer">
        <h1 className="updatename">최신 게시물</h1>
        <div className="line"></div>
        <span>최근 7일 이전 집구하기 목록 </span>
      </div>
      <div className="cardContainer">
        <div className="rentCard" img={Background}>
          <div className="textcontainer">
            <h2 className="address">c-162 77 finch ave e</h2>
            <h3 className="price"> $300 </h3>
            <span>Load more</span>
          </div>
          <img className="imgfile" src={Background} alt="img" />
        </div>
        <div className="rentCard" img={Background}>
          <div className="textcontainer">
            <h2 className="address">c-162 77 finch ave e</h2>
            <h3 className="price"> $300 </h3>
          </div>
          <img className="imgfile" src={Background} alt="img" />
        </div>
        <div className="rentCard" img={Background}>
          <div className="textcontainer">
            <h2 className="address">c-162 77 finch ave e</h2>
            <h3 className="price"> $300 </h3>
          </div>
          <img className="imgfile" src={Background} alt="img" />
        </div>
        <div className="rentCard" img={Background}>
          <div className="textcontainer">
            <h2 className="address">c-162 77 finch ave e</h2>
            <h3 className="price"> $300 </h3>
          </div>
          <img className="imgfile" src={Background} alt="img" />
        </div>
        <div className="rentCard" img={Background}>
          <div className="textcontainer">
            <h2 className="address">c-162 77 finch ave e</h2>
            <h3 className="price"> $300 </h3>
          </div>
          <img className="imgfile" src={Background} alt="img" />
        </div>
      </div>
    </NewupdateWrapper>
  );
};

export default NewUpdate;
