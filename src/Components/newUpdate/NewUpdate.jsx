import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import Background from '../../assets/feature3.png';
import { createStructuredSelector } from 'reselect';
import { selectitems } from '../../Redux/Rentcondo/rentcondo.selector';
import { connect } from 'react-redux';
import { rentcondoreadstart } from '../../Redux/Rentcondo/rentcondo.action';
<<<<<<< HEAD
import Loader from 'react-loader-spinner';
=======
import {
  BsFillCaretRightFill,
} from 'react-icons/bs';
import {GoPrimitiveDot} from 'react-icons/go'
>>>>>>> jiyoen/12

const NewupdateWrapper = styled.div`
  width: 100vw;
  height: 420px;

  .headerContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px auto;

    .updatename {
      color: ${CommonStyles.color.Primary};
      font-size: ${CommonStyles.fontSize.ExtraLarge1};
      font-weight: ${CommonStyles.bold.LittleBold};
      text-align: 'center';
    }
    .line {
      background-color: ${CommonStyles.color.Primary};
      width: 75px;
      height: 1px;
      border-radius: 30px;
      margin-top: -20px;
      margin-bottom: 16px;
    }
  }
  .cardContainer {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0 30px;

    .rentCard {
      width: 300px;
      height: 290px;
      margin-right: 30px;
      position: relative;
      cursor: pointer;
      :last-child{
        margin-right: 0px;
      }
    }
    .textcontainer {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 150px;
      background-color: rgba(35, 31, 32, 0.4);
      padding-left: 25px;
      margin-bottom:1px;

      .address {
        font-size: 22;
        font-weight: ${CommonStyles.bold.Medium};
        color: ${CommonStyles.color.White};
      }
      .price {
        font-size: 22;
        font-weight: ${CommonStyles.bold.Medium};
        color: ${CommonStyles.color.Primary};
        padding: 0px auto;
      }
      span {
        font-weight: 200;
        font-size: 14px;
        color: ${CommonStyles.color.White};
        text-decoration-line: underline;
        text-underline-position: under;
        text-decoration-thickness: 1.5px;
        position: absolute;
        right: 35px;
        bottom: 20px;
      }
    }
    .imgfile {
      width: 100%;
      height: 100%;
    }
  }
`;

const Arrowleft = styled(BsFillCaretRightFill)`
  transform: rotate(-180deg);
  position: absolute;
  top: 50%;
  left: 32px;
  font-size: 3rem;
  color: ${CommonStyles.color.Dark};
  cursor: pointer;
  user-select: none;
  z-index: 10;
  transition: 0.5s all ease-in-out;
  :hover {
    color: ${CommonStyles.color.Primary};
  }
`;
const Arrowright = styled(BsFillCaretRightFill)`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: ${CommonStyles.color.Dark};
  cursor: pointer;
  user-select: none;
  z-index: 10;
  transition: 0.5s all ease-in-out;
  :hover {
    color: ${CommonStyles.color.Primary};
  }
`;



const Dotfolder = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  margin: 20px auto;
`;

const NewUpdate = ({ rooms, readStart }) => {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    readStart();
    setLoading(false);
  }, [readStart]);
  
  const [currentImg, setCurrentImg] = useState(0);
  const length = rooms?.image?.length;

  const nextSlide = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
  };
  const previousSlide = () => {
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
  };

  
  if (loading) {
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }

  return (

    <NewupdateWrapper>
      <div className="headerContainer">
        <h1 className="updatename">최신 게시물</h1>
        <div className="line"></div>
        <span>최근 7일 이전 집구하기 목록 </span>
      </div>
      
      <div className="cardContainer">

          <Arrowleft onClick={previousSlide} />
          <Arrowright onClick={nextSlide} />
          {rooms &&
            rooms?.slice(0, 4)?.map((data) => {
              return (
                <div key={data.id} className="rentCard">
                  <div className="textcontainer">
                    <h2 className="address">{data?.address?.Formattedaddress?.split(',')[0]}</h2>
                    <h3 className="price"> ${data.monthlyfee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                    <span>Learn more</span>
                  </div>
                  <img
                    className="imgfile"
                    src={data?.image[0] ? data?.image[0] : data?.image[1]}
                    alt="img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `${Background}`;
                    }}/>
         
              </div>
            );
          })} 

      </div>
    </NewupdateWrapper>

    
  
  );
};

const maptoprops = createStructuredSelector({
  rooms: selectitems,
});
const dispatchtomaps = (dispatch) => ({
  readStart: () => dispatch(rentcondoreadstart()),
});

export default connect(maptoprops, dispatchtomaps)(NewUpdate);
