import React from "react";
import styled, { keyframes } from "styled-components";
import Background from "../../assets/Background1.jpg";
import Autocompletesearch from "../../Pages/findroom/Autocompletesearch";
import { CommonStyles } from "../../staticFiles/CommonStyles";
const Newhero = () => {
  return (
    <Newherostyle>
      <form action="" className="search">
        <h2 className="englishslogan">
          캐나다에서 빠르고 편하게 <br className="hidden"/> 집을 찾는 <b>ONROOM</b>
        </h2>
        <h1 className="slogan">
          방을 쉽고 빠르고 정확하게 찾을수 있는 믿음 가는 사이트!
        </h1>
        <div className="searchcontainer">
          <Autocompletesearch />
        </div>
      </form>

      <span className="scrollBtn">
        <a href="/">
          <span className="mouse">
            <h3>scroll down</h3>
          </span>
        </a>
      </span>
    </Newherostyle>
  );
};

const animouse = keyframes`
0% {
	opacity: 1;
	top: 29%;
	}
	15% {
	opacity: 1;
	top: 50%;
	}
	50% {
	opacity: 0;
	top: 50%;
	}
	100% {
	opacity: 0;
	top: 29%;
	}`;

const Newherostyle = styled.div`
  width: 100vw;
  height: 80vh;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 60%;
  opacity: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (max-width: 375px) {
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
  }
  .search {
    position: absolute;
    top: 40%;
    left: 50%;
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    transform: translate(-40%, -50%);
    @media screen and (max-width: 375px) {
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100vw;
      align-items: center;
      background-size: cover;
      background-position: center;
    }
  }
  .englishslogan {
    margin-top: 120px;
    display: flex;
    width: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: normal;
    font-size: 44px;
    line-height: 80px;
    /* or 175% */

    text-align: center;
    letter-spacing: -1px;
    margin-bottom: -20px;
    color: ${CommonStyles.color.Dark};
    @media screen and (max-width: 375px) {
      font-size: 1.2rem;
      margin-bottom: -20px;
      .hidden {
        display: none;
      }
    }
    b {
      font-weight: bold;
      font-size: 64px;
      color: ${CommonStyles.color.Primary};
      @media screen and (max-width: 375px) {
        font-size: 3.4rem;
      }
    }
  }
  .slogan {
    font-style: normal;
    font-weight: ${CommonStyles.bold.Medium};
    font-size: 18px;
    line-height: 70px;
    /* identical to box height, or 389% */

    text-align: center;
    letter-spacing: -1px;
    text-transform: uppercase;

    color: #181718;
    width: 80%;
    @media screen and (max-width: 375px) {
      font-size: 0.8rem;
    }
  }
  .searchcontainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    @media screen and (max-width: 375px) {
      width: 100vw;
      align-self: center;
    }
    .responsivediv {
      @media screen and (max-width: 375px) {
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    input {
      width: 500px;
      height: 62px;
      border-radius: 30px;
      background: rgba(255, 255, 255, 0.6);
      border: 1px solid ${CommonStyles.color.PrimaryLight3};
      padding: 1.5rem;
      margin-left: 3%;
      @media screen and (max-width: 375px) {
        width: 15rem;
      }
      ::placeholder {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 26px;
        color: ${CommonStyles.color.PrimaryLight4};
        @media screen and (max-width: 375px) {
          font-size: 0.8rem;
        }
      }
    }
  }
  .scrollBtn {
    display: inline-block;
    line-height: 18px;
    font-size: 13px;
    font-weight: normal;
    color: #7f8c8d;
    color: #ffffff;
    letter-spacing: 2px;
    position: absolute;
    bottom: 40px;
    @media screen and (max-width: 375px) {
      font-size: 0.7rem;
    }
    .mouse {
      position: relative;
      display: block;
      width: 35px;
      height: 55px;
      margin: 0 auto 20px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      border: 3px solid white;
      border-radius: 23px;
      @media screen and (max-width: 375px) {
        width: 25px;
        height: 25px;
        margin: 0 auto 10px;
      }
      ::before {
        content: '';
        position: absolute;
        display: block;
        top: 29%;
        left: 50%;
        width: 8px;
        height: 8px;
        margin: -4px 0 0 -4px;
        background: white;
        border-radius: 50%;
        animation: ${animouse} 2.5s linear infinite;
      
      }
      h3 {
        position: absolute;
        top: 55px;
        left: -45px;
        width: 200px;
        text-transform: uppercase;
        font-size: 0.8rem;
        @media screen and (max-width: 375px) {
          font-size: 0.7rem;
          top: 25px;
        }
      }
    }
  }
`;

export default Newhero;
