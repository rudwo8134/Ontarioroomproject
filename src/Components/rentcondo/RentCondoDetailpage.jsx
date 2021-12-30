import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import style from '../../static/staticcss';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import { FaLocationArrow } from 'react-icons/fa';
import { StaticGoogleMap, Marker } from 'react-static-google-map';
import { AiFillCar } from 'react-icons/ai';
import { BsHouseDoor, BsFillCaretRightFill, BsHouseFill } from 'react-icons/bs';
import { BiBed } from 'react-icons/bi';
import { GoPrimitiveDot } from 'react-icons/go';
import { RiKakaoTalkFill, RiFridgeLine } from 'react-icons/ri';
import { AiTwotoneMail, AiFillPhone } from 'react-icons/ai';
import { MdLocalLaundryService } from 'react-icons/md';
import { FaDog, FaSmokingBan, FaToilet } from 'react-icons/fa';
import { ImManWoman } from 'react-icons/im';
import { CgSmartHomeCooker } from 'react-icons/cg';
import { GiWaterDrop, GiDoor, GiCancel } from 'react-icons/gi';
import { IoWifiOutline } from 'react-icons/io5';
import Loader from 'react-loader-spinner';
import { useMediaQuery } from 'react-responsive';

const Background = styled.section`
  width: 100vw;
  margin-top: 80px;
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
    height: 50vh;
    background-color: white;
    border-radius: 16px;
    border: 2px solid ${CommonStyles.color.Primary};
    z-index: 50;
    .container {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .contactcontainerWrapper {
        .contactcontainerka {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 300px;
          svg {
            margin-top: 10px;
            font-size: 2rem;
            width: 3rem;
            height: 3rem;
            background-color: #ffe812;
          }
        }
        .contactcontainer {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 300px;
          svg {
            margin-top: 10px;
            font-size: 2rem;
            width: 3rem;
            height: 3rem;
            color: ${CommonStyles.color.Primary};
          }
        }
      }
    }
  }
  @media screen and (max-width: 476px) {
    margin-top: 0;
  }
`;
const Dotfolder = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  width: 1300px;
  height: 100%;
  margin: 0 auto;
  padding: 2rem;
  @media screen and (max-width: 476px) {
    max-width: 90vw;
    padding: 0;
  }
`;
const PostNav = styled.div`
  h1 {
    font-size: ${style.fontSize.detailroommainheader};
    color: ${style.fontColor.detailpageheader};
  }
  .userinfo {
    h3 {
      font-size: ${style.fontSize.detailroomsubheader};
      color: ${style.fontColor.detailpagesubheader};
      display: flex;
      align-items: center;
      svg {
        color: ${style.fontColor.detailpageiconcolor};
        margin-right: 1rem;
      }
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  @media screen and (max-width: 476px) {
    margin: 0 auto;
    height: 300px;
  }
  .slide {
    opacity: 0;
    transition: 0.8s all ease-in-out;
  }
  .slideactive {
    opacity: 1;
    transition: 0.8s all ease-in-out;
    transform: scale(1.08);
  }
`;
const Customimagetag = styled.img`
  max-width: 1000px;
  max-height: 400px;
  border-radius: 3px;
  @media screen and (max-width: 476px) {
    max-width: 90vw;
    height: 30vh;
  }
`;
const Xbutton = styled(GiCancel)`
  display: inline-block;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2rem;
  z-index: 30;
  color: ${CommonStyles.color.Primary};
  @media screen and (max-width: 476px) {
  }
`;
const Roominformation = styled.div`
  .roominfo {
    max-width: 1230px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-top: 20px;
    @media screen and (max-width: 476px) {
      margin-top: 0;
      width: 90vw;
    }
    .left {
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 476px) {
        margin-top: -3vh;
        margin-bottom: -3vh;/
      }
      .roomtype {
        display: flex;
        flex-direction: row;
        align-items: center;


        .roomtypename {
          color: ${CommonStyles.color.Dark};
          font-size: ${CommonStyles.fontSize.Large};
          @media screen and (max-width: 476px) {
            margin-right: 0px;
          }
        }
        .price {
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.1rem;
          @media screen and (max-width: 476px) {
            font-size: 1rem;
          }
          b {
            font-size: 1.8rem;
            color: ${CommonStyles.color.Primary};
          }
        }
      }
      .address {
        font-size: 18px;
        font-weight: 400;
        color: ${CommonStyles.color.Darkbold3};
        margin-top: 0;
        @media screen and (max-width: 476px) {
          font-size: 1rem;
        }
      }
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      .container{
           @media screen and (max-width: 476px) {
            display: none;
            position: fixed;
            top:50%;
            left: 50%;
            background-color: white;
            border: 1px solid ${CommonStyles.color.Primary};
            border-radius: 16px;
            width: 90vw;
            height: 25vh;
            z-index: 20;
            padding: 2rem;
            transform: translate(-50%,-50%);
            color:black;
          
        }
      }
      button {
        border: 2px solid ${CommonStyles.color.Primary};
        font-size: 24px;
        padding: 20px;
        border-radius: 10px;
        background-color: ${CommonStyles.color.Primary};
        color: white;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        :hover{
          transform: translateY(-8px) scale(1.05);
          color: ${CommonStyles.color.Primary};
          background-color: white;
        }
        @media screen and (max-width: 476px) {
          width: 5rem;
          padding: 0.4rem;
          font-size: 1rem;
        }
      }
    }
  }
  .divider {
    width: 1230px;
    margin: 20px auto;
    height: 2px;
    background-color: ${CommonStyles.color.Darkbold1};
    @media screen and (max-width: 476px) {
      margin: 15px auto;
      width: 90vw;
    }
  }
  .description {
    width: 1230px;
      @media screen and (max-width: 476px) {
      margin: 15px auto;
      width: 90vw;
    }
    .header {
      font-size: 24px;
      color: ${CommonStyles.color.Darkbold3};
    }
    .textcontainer {
      font-size: 18px;
      color: ${CommonStyles.color.Dark};
      line-height: 30px;
    }
  }
  .location {
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 476px) {
    width: 90vw;
    justify-content: center;
    align-items: center;
    }
  }
  .details {
    display: flex;
    flex-direction: column;
    .header {
      font-size: 24px;
      color: ${CommonStyles.color.Darkbold3};
      font-weight: 700;
      margin: 1.2rem 0;
    }
    .contentsbox {
      display: flex;
      justify-content: center;
      align-items: center;
       @media screen and (max-width: 476px) {
        flex-direction : column;
      }
      .dividerline {
        width: 2px;
        height: 400px;
        background-color: ${CommonStyles.color.Darkbold2};
        margin: 0 80px;
        @media screen and (max-width: 476px) {
       display: none;
      }
      }
      .container {
        display: flex;
        justify-content: space-between;
          @media screen and (max-width: 476px) {
          align-items: center;
          width: 80vw;
      }
        svg{
          font-size: 1.5rem;
          margin-right: 1rem;
          }
        .name {
          display: flex;
          align-items: center;
          color: ${CommonStyles.color.Primary};
          font-size: 20px;
          font-weight: 400;
          text-transform: capitalize;
          
        }
        .value {
          color: ${CommonStyles.color.Dark};
          font-size: 18px;
          font-weight: 400;
          text-transform: uppercase;
        }
      }
      .left {
        flex: 1;
      }
      .right {
        flex: 1;
      }
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

const RentCondoDetailpage = (props) => {
  const [price, setprice] = useState(null);
  const [showContact, setShowContact] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const length = props?.image?.length;
  const isbigMobile = useMediaQuery({ query: '(max-width: 476px)' });

  const nextSlide = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
  };
  const previousSlide = () => {
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
  };

  useEffect(() => {
    if (props.rentFee)
      setprice(props?.rentFee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
  }, [props]);

  if (!Array.isArray(props?.image || props?.image?.length <= 0)) {
    return null;
  }

  if (props === 'null') {
    return (
      <Loader
        type="TailSpin"
        color={CommonStyles.color.Primary}
        height={40}
        width={40}
        timeout={3000}
      />
    );
  }
  return (
    <Background showContact={showContact}>
      {showContact && (
        <div className="popup">
          <div className="container">
            <Xbutton onClick={() => setShowContact(false)} />
            <div className="contactcontainerWrapper" id="unblured">
              <h4 className="contactcontainer">
                <AiTwotoneMail />
                <br /> {props.userinfo.email}
              </h4>
              <h4 className="contactcontainer">
                <AiFillPhone />
                <br />
                {props.userinfo.phonenumber}
              </h4>
              <h4 className="contactcontainerka">
                <RiKakaoTalkFill />
                <br />
                {props.userinfo.Kakaotalk
                  ? props.userinfo.Kakaotalk
                  : ' 비공개'}
              </h4>
            </div>
          </div>
        </div>
      )}
      <Wrapper style={{ filter: showContact && 'blur(20px)' }}>
        <PostNav>
          <h1>{props?.postTitle}</h1>
          <div className="userinfo">
            <h3>
              <FaLocationArrow />
              {props && props?.address?.Formattedaddress}
            </h3>
          </div>
        </PostNav>

        <ImageWrapper>
          <Arrowleft onClick={previousSlide} />
          <Arrowright onClick={nextSlide} />
          {props?.image?.map((image, index) => {
            return (
              <div
                key={index}
                className={index === currentImg ? 'slideactive' : 'slide'}
              >
                {index === currentImg && (
                  <Customimagetag src={image} alt={`viewer${index}`} />
                )}
              </div>
            );
          })}
        </ImageWrapper>
        <Dotfolder>
          {props?.image?.map((data, index) => {
            return (
              <GoPrimitiveDot
                color={index === currentImg && `${CommonStyles.color.Primary}`}
              />
            );
          })}
        </Dotfolder>
        <Roominformation>
          <div className="divider" />
          <div className="roominfo">
            <div className="left">
              <div className="roomtype">
                <h4 className="roomtypename">{props?.roomtype}</h4>
                <h4 className="price">
                  <b>${price && price}</b>/ MONTH
                </h4>
              </div>
              <h4 className="address">
                {' '}
                {props && props?.address?.Formattedaddress}
              </h4>
            </div>
            <div className="right">
              {!showContact ? (
                <button
                  onClick={() => {
                    setShowContact(true);
                  }}
                >
                  연락하기
                </button>
              ) : (
                <>
                  <Xbutton
                    onClick={() => {
                      setShowContact(false);
                    }}
                  />
                  <div className="container" id="unblured">
                    <h4 className="contactcontainer">
                      Email: {props.userinfo.email}
                    </h4>
                    <h4 className="contactcontainer">
                      Phone: {props.userinfo.phonenumber}
                    </h4>
                    <h4 className="contactcontainer">
                      Kakaotalk:
                      {props.userinfo.Kakaotalk
                        ? props.userinfo.Kakaotalk
                        : ' 비공개'}
                    </h4>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="divider" />
          <div className="description">
            <h3 className="header">상세 설명</h3>
            <span className="textcontainer">{props?.postDescription}</span>
          </div>
          <div className="divider" />
          <div className="details">
            <div className="header">세부 사항</div>
            <div className="contentsbox">
              <div className="left">
                <div className="container">
                  <h3 className="name">
                    <BsHouseDoor /> 집 유형
                  </h3>
                  <h3 className="value">{props?.houseType}</h3>
                </div>
                <div className="container">
                  <h3 className="name">
                    <BsHouseFill /> 렌트 유형
                  </h3>
                  <h3 className="value">{props?.rentType}</h3>
                </div>
                <div className="container">
                  <h3 className="name">
                    <ImManWoman />
                    선호 성별
                  </h3>
                  <h3 className="value">
                    {props?.sex ? props?.sex : '비공개'}
                  </h3>
                </div>
                <div className="container">
                  <h3 className="name">
                    <GiWaterDrop />
                    유틸리티 비용
                  </h3>
                  <h3 className="value">
                    {props?.utility
                      ? props?.utility === '네'
                        ? '포함'
                        : '불포함'
                      : '비공개'}
                  </h3>
                </div>
                <div className="container">
                  <h3 className="name">
                    <BiBed />
                    가구
                  </h3>
                  <h3 className="value">
                    {props?.funished
                      ? props?.funished === '네'
                        ? '유'
                        : '무'
                      : '비공개'}
                  </h3>
                </div>
                <div className="container">
                  <h3 className="name">
                    <AiFillCar />
                    주차
                  </h3>
                  <h3 className="value">
                    {props?.parking
                      ? props?.parking === '네'
                        ? '유'
                        : '무'
                      : '비공개'}
                  </h3>
                </div>
                <div className="container">
                  <h3 className="name">
                    <IoWifiOutline />
                    인터넷
                  </h3>
                  <h3 className="value">
                    {props?.internet
                      ? props?.internet === '네'
                        ? '유'
                        : '무'
                      : '비공개'}
                  </h3>
                </div>
              </div>
              <div className="dividerline"></div>
              <div className="right">
                <div className="container">
                  <h3 className="name">
                    <MdLocalLaundryService />
                    세탁기
                  </h3>
                  <h3 className="value">
                    {props?.Laundry
                      ? props?.Laundry === '네'
                        ? '유'
                        : '무'
                      : '비공개'}
                  </h3>
                </div>
                <div className="container">
                  <h3 className="name">
                    <GiDoor />
                    개인 출입문
                  </h3>
                  <h3 className="value">
                    {props?.privateenterance
                      ? props?.privateenterance === '네'
                        ? '유'
                        : '무'
                      : '비공개'}
                  </h3>
                </div>
                <div className="container">
                  <h3 className="name">
                    <FaToilet />
                    개인 화징실
                  </h3>
                  <h3 className="value">
                    {props?.privateBathroom
                      ? props?.privateBathroom === '네'
                        ? '유'
                        : '무'
                      : '비공개'}
                  </h3>
                </div>
                <div className="container">
                  <h3 className="name">
                    <RiFridgeLine />
                    개인 냉장고
                  </h3>
                  <h3 className="value">
                    {props?.Fridge
                      ? props?.Fridge === '네'
                        ? '유'
                        : '무'
                      : '비공개'}
                  </h3>
                </div>
                <div className="container">
                  <h3 className="name">
                    <CgSmartHomeCooker />
                    개인 주방
                  </h3>
                  <h3 className="value">
                    {props?.kitchen
                      ? props?.kitchen === '네'
                        ? '유'
                        : '무'
                      : '비공개'}
                  </h3>
                </div>
                <div className="container">
                  <h3 className="name">
                    <FaSmokingBan />
                    흡연
                  </h3>
                  <h3 className="value">
                    {props?.smoking
                      ? props?.smoking === '네'
                        ? '허용'
                        : '비허용'
                      : '비공개'}
                  </h3>
                </div>
                <div className="container">
                  <h3 className="name">
                    <FaDog />펫
                  </h3>
                  <h3 className="value">
                    {props?.petavailable
                      ? props?.petavailable === '네'
                        ? '허용'
                        : '비허용'
                      : '비공개'}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="divider" />
          <div className="location">
            <StaticGoogleMap
              apiKey={process.env.REACT_APP_GOOGLEAPI}
              size={isbigMobile ? '400x400' : '800x400'}
              className="img-fluid"
              zoom="15"
            >
              <Marker
                location={`${props?.address?.lat},${props?.address?.lng}`}
                label="H"
                color="red"
              />
            </StaticGoogleMap>
          </div>
          <div className="divider" />
        </Roominformation>
      </Wrapper>
    </Background>
  );
};

export default RentCondoDetailpage;
