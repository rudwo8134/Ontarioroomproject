import React from "react";
import styled, { keyframes } from "styled-components";
import Background from "../../assets/bg1.jpg";
import Autocompletesearch from "../../Pages/findroom/Autocompletesearch";
import { CommonStyles } from "../../staticFiles/CommonStyles";

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Jua', 'sans-serif', 'Do Hyeon']
  }
});

const Newhero = () => {
  return (
    <Newherostyle>
      <form action="" className="search">
        <h2 className="englishslogan">
          캐나다에서 방이 필요할 땐?
        </h2>
        <h1 className="begin"><span className="onroom">ON<span className="onroom-black">ROO</span>M!</span></h1>
        <h1 className="slogan">
          ONROOM에서 쉽고 빠르고 정확하게 방을 찾아보세요!
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
  background-position: 10% 50%;
  opacity: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
  }
  .englishslogan {
    margin-top: 150px;
    display: flex;
    width: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 40px;
    font-family: 'Jua', sans-serif;
    /* or 175% */

    text-align: center;
    letter-spacing: -1px;
    margin-bottom: -20px;
    color: #27201a;

    b {
      font-weight: bold;
      font-size: 64px;
      color: ${CommonStyles.color.Primary};
    }
  }
  .begin{ 
    margin-top: 50px;
    display: flex;
    width: 80%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-style: normal;
    //font-weight: normal;
    font-size: 34px;
    /* or 175% */
    font-family: 'Do Hyeon', sans-serif;

    text-align: center;
    letter-spacing: -1px;
    margin-bottom: -20px;
    color: ${CommonStyles.color.Darkbold1};

  .onroom {
    font-weight: ${CommonStyles.bold.LittleBold};
    font-size: 76px;
    line-height: 40px;
    text-align: center;
    color: ${CommonStyles.color.Primary};
    }
    .onroom-black {
        font-weight: 1200;
        font-size: 74px;
        line-height: 40px;
        text-align: center;
        color: black;
    }
  }

  .slogan {
    margin-top: 40px;
    font-style: normal;
    font-weight: ${CommonStyles.bold.bold};
    font-size: 18px;
    line-height: 70px;
    /* identical to box height, or 389% */

    text-align: center;
    letter-spacing: -1px;
    text-transform: uppercase;

    color: #181718;
    width: 80%;
  }
  .searchcontainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    input {
      width: 500px;
      height: 62px;
      border-radius: 30px;
      bawckground: white;
      //background: rgba(255, 255, 255, 0.6);
      border: 1px solid ${CommonStyles.color.PrimaryLight3};
      padding: 1.5rem;
      margin-left: 3%;
      ::placeholder {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 26px;
        color: ${CommonStyles.color.PrimaryLight4};
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
      }
    }
  }
`;

export default Newhero;
