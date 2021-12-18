import React from 'react';
import styled, { keyframes } from 'styled-components';
import Background from '../../assets/bg1.jpg';
import Autocompletesearch from '../../Pages/findroom/Autocompletesearch';
import { CommonStyles } from '../../staticFiles/CommonStyles';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Jua', 'sans-serif', 'Do Hyeon'],
  },
});

const Newhero = () => {
  return (
    <Newherostyle>
      <form action="" className="search">
        <h2 className="englishslogan">캐나다에서 방이 필요할 땐?</h2>
        <h1 className="begin">
          <span className="onroom">
            ON<span className="onroom-black">ROO</span>M
          </span>
        </h1>
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
  background-position: 0% 25%;
  opacity: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: 425px) {
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
  }
  @media screen and (max-width: 375px) {
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
  }

  .search {
    position: absolute;
    top: 36%;
    left: 50%;
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    transform: translate(-40%, -50%);
    @media screen and (max-width: 425px) {
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100vw;
      align-items: center;
      background-size: cover;
      background-position: center;
    }
    @media screen and (max-width: 375px) {
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100vw;
      align-items: center;
      background-size: cover;
      background-position: center;
    }
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
    color: rgb(24, 47, 67);
    @media screen and (max-width: 425px) {
      font-size: 2rem;
      margin-bottom: -20px;
      .hidden {
        display: none;
      }
    }
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
        font-size: 3.2rem;
      }
    }
  }
  .begin {
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
      letter-spacing: 0.1rem;
    }
    .onroom-black {
      font-weight: 1200;
      font-size: 74px;
      line-height: 40px;
      text-align: center;
      color: black;
      letter-spacing: 0.1rem;
    }
  }

  .slogan {
    margin-top: 40px;
    margin-bottom: -5px;
    font-style: normal;
    font-family: 'Do Hyun', sans-serif;
    font-weight: ${CommonStyles.bold.bold};
    font-size: 17px;
    line-height: 70px;
    /* identical to box height, or 389% */
    text-align: center;
    letter-spacing: -1px;
    text-transform: uppercase;

    color: black;
    width: 80%;
    @media screen and (max-width: 425px) {
      font-size: 1rem;
    }
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
    @media screen and (max-width: 425px) {
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
      @media screen and (max-width: 425px) {
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    input {
      width: 375px;
      height: 48px;
      border-radius: 30px;
      background: white;
      //background: rgba(255, 255, 255, 0.6);
      //border: 1px solid ${CommonStyles.color.PrimaryLight3};
      border: 1px solid #616060;
      padding: 1.5rem;
      margin-left: 26%;
      @media screen and (max-width: 375px) {
        width: 15rem;
        position: relative;
      }
      @media screen and (max-width: 425px) {
        margin-left: 0;
        width: 20rem;
        position: relative;
      }
      ::placeholder {
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        line-height: 24px;
        color: #acaaaa;
        //color: ${CommonStyles.color.PrimaryLight4};
        @media screen and (max-width: 375px) {
          font-size: 0.8rem;
        }
        @media screen and (max-width: 425px) {
          font-size: 1rem;
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
    @media screen and (max-width: 425px) {
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
      @media screen and (max-width: 425px) {
        width: 35px;
        height: 35px;
        margin: 0 auto 80px;
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
        @media screen and (max-width: 425px) {
          font-size: 0.7rem;
          top: 25px;
        }
      }
    }
  }
`;

export default Newhero;
