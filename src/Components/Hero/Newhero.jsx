import React from 'react'
import styled,{keyframes} from 'styled-components'
import Background from '../../assets/newbg.png'
import Secondarybutton from '../util/Secondarybutton'
const Newhero = () => {
  return (
    <Newherostyle>
      <form action="" className="search">
        <h1 className="slogan">
          캐나다에서 빠르고 쉽게 집을 찾자!
        </h1>
        <div className="searchcontainer">
          <input type="text" placeholder="주소를 입력해 주세요" />
          <Secondarybutton name="검색"/>
        </div>
      </form>

      <span className="scrollBtn">
        <a href="/">
          <span className="mouse">
            <h3>
              scroll down
            </h3>
          </span>
        </a>
      </span>
    </Newherostyle>
  )
}

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
  height: 100vh;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .slogan {
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 70px;
    text-align: start;
    letter-spacing: -1px;
    color: var(--text-primary-black);
    -webkit-text-fill-color: var(--text-primary-black);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }
  .searchcontainer {
    input {
      width: 516px;
      height: 60px;
      border-radius: 100px;
      background: transparent;
      border: 2px solid var(--text-border);
      margin-right: 30px;
      padding: 1.5rem;
      ::placeholder {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 26px;
        color: rgba(21, 20, 57, 0.4);
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
        content: "";
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
      h3{
        position: absolute;
        top:55px;
        left: -45px;
        width: 200px;
        text-transform: uppercase;
        font-size: 0.8rem;
      }
    }
  }
`;

export default Newhero
