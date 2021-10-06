import React from 'react'
import styled from 'styled-components'
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
    </Newherostyle>
  )
}

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
`;

export default Newhero
