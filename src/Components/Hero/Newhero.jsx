import React from 'react';
import styled, { keyframes } from 'styled-components';
import Background from '../../assets/bg1.jpg';
import Autocompletesearch from '../../Pages/findroom/Autocompletesearch';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import Mainlogo from '../../assets/nav/LOGO.png'
import WebFont from 'webfontloader';
import { useMediaQuery } from 'react-responsive';
import Autoinput from '../Autocomplete/Autoinput';

WebFont.load({
  google: {
    families: ['Jua', 'sans-serif', 'Do Hyeon', 'dosis', 'raleway'],
  },
});

const Newhero = () => {
  const isbigMobile = useMediaQuery({ query: '(max-width: 476px)' });
  return (
    <Newherostyle>
      <form action="" className="search">
        <h2 className="englishslogan">캐나다에서 방이 필요할 땐?</h2>
        <h1 className="begin">
          {isbigMobile ? (
            <img className="logoimage" src={Mainlogo} alt="logo" />
          ) : (
            <span className="onroom">
              ON<span className="onroom-black">ROO</span>M
            </span>
          )}
        </h1>
        <h1 className="slogan">
          {isbigMobile
            ? '쉽고 빠르고 정확하게 방을 찾아보세요!'
            : '  ONROOM에서 쉽고 빠르고 정확하게 방을 찾아보세요!'}
        </h1>
        <div className="inputcontainer">
          <Autoinput/>
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

  @media screen and (max-width: 476px) {
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
    align-items: center;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 476px) {
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
    @media screen and (max-width: 476px) {
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
    font-family: unset;

    text-align: center;
    letter-spacing: -1px;
    margin-bottom: -20px;
    color: ${CommonStyles.color.Darkbold1};
    @media screen and (max-width: 476px) {
     .logoimage{
       margin-top: -1.0rem;
       margin-bottom: -1.0rem;
     }
    }

    .onroom {
      font-family: unset;
      font-weight: ${CommonStyles.bold.LittleBold};
      font-size: 76px;
      line-height: 40px;
      text-align: center;
      color: ${CommonStyles.color.Primary};
      letter-spacing: 0.02rem;
    }
    .onroom-black {
      font-weight: bolder;
      font-size: 74px;
      line-height: 40px;
      text-align: center;
      color: black;
      letter-spacing: 0.02rem;
      text-shadow: 1px 1px 1px black;
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
    @media screen and (max-width: 476px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 375px) {
      font-size: 0.8rem;
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
    z-index: 5;
    bottom: 40px;
    @media screen and (max-width: 375px) {
      font-size: 0.7rem;
    }
    @media screen and (max-width: 476px) {
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
      @media screen and (max-width: 476px) {
        width: 35px;
        height: 35px;
        margin: 0 auto 80px;
      }
      ::before {
        content: '';
        position: absolute;
        display: block;
        z-index: 5;
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
        @media screen and (max-width: 476px) {
          font-size: 0.7rem;
          top: 25px;
        }
      }
    }
  }
`;

export default Newhero;
