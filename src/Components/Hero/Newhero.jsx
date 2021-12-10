import React, { useState, useEffect } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete'
import styled,{keyframes} from 'styled-components'
import Background from '../../assets/Background1.jpg'
import Autocompletesearch from '../../Pages/findroom/Autocompletesearch'
import { CommonStyles } from '../../staticFiles/CommonStyles'
import Secondarybutton from '../util/Secondarybutton'
import { connect } from 'react-redux';
import { selectdetailaddress } from '../../Redux/Rentcondo/rentcondo.selector'
import { createStructuredSelector } from 'reselect'
const Newhero = ({ address }) => {
  const [Address, setAddress] = useState(false);
 useEffect(() => {
   if(address){
     setAddress(true);
   }
 }, [address]);
  return (
    <Newherostyle>
      <form action="" className="search">
        <h2 className="englishslogan">
          캐나다에서 빠르고 편하게 <br /> 집을 찾는 <b>ONROOM</b>
        </h2>
        <h1 className="slogan">
          방을 쉽고 빠르고 정확하게 찾을수 있는 믿음 가는 사이트!
        </h1>
        <div className="searchcontainer">
          <Autocompletesearch />
          <Secondarybutton name={'검색하기'} disable={'검색입력'} />
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
    font-style: normal;
    font-weight: bold;
    font-size: 54px;
    line-height: 80px;
    /* or 175% */

    text-align: center;
    letter-spacing: -1px;
    margin-bottom: -20px;
    color: ${CommonStyles.color.Dark};
    b {
      color: ${CommonStyles.color.Primary};
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
    width: 70%;
  }
  .searchcontainer {
    display: flex;
    flex-direction: row;
    input {
      width: 434px;
      height: 62px;
      border-radius: 30px;
      background: rgba(255, 255, 255, 0.6);
      border: 1px solid ${CommonStyles.color.PrimaryLight3};
      margin-right: 30px;
      padding: 1.5rem;
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

const maptoprops = createStructuredSelector({
  address: selectdetailaddress
})

export default connect(maptoprops)(Newhero);
