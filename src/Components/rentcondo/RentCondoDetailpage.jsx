import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import style from '../../static/staticcss';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import { FaLocationArrow } from 'react-icons/fa';
import { StaticGoogleMap, Marker } from 'react-static-google-map';
import { AiFillCar, AiOutlineCalendar } from 'react-icons/ai';
import {
  BsPeopleFill,

} from 'react-icons/bs';
import {RiTempColdFill} from 'react-icons/ri'
import { FaDog, FaSmokingBan, FaDoorClosed } from 'react-icons/fa';
import {GiWaterDrop} from 'react-icons/gi'

const Background = styled.section`
  width: 100vw;
  margin-top: 80px;
`;
const Wrapper = styled.div`
  width: 1300px;
  height: 100%;
  margin: 0 auto;
  padding: 2rem;
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
  display: grid;
  grid-template-columns: 400px 400px 400px;
  height: 500px;
  overflow-x: hidden;
`;
const Customimagetag = styled.img`
  width: 380px;
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
    .left {
      display: flex;
      flex-direction: column;
      .roomtype {
        display: flex;
        flex-direction: row;
        align-items: center;
        .roomtypename {
          color: ${CommonStyles.color.Dark};
          font-size: ${CommonStyles.fontSize.Large};
          margin-right: 42px;
        }
        .price {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.1rem;
          b {
            color: ${CommonStyles.color.Primary};
          }
        }
      }
      .address {
        font-size: 18px;
        font-weight: 400;
        color: ${CommonStyles.color.Darkbold3};
        margin-top: 0;
      }
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        border: 1px solid ${CommonStyles.color.Primary};
        font-size: 24px;
        padding: 20px;
        border-radius: 16px;
        color: ${CommonStyles.color.Primary};
        background-color: none;
      }
    }
  }
  .divider {
    width: 1230px;
    margin: 20px auto;
    height: 2px;
    background-color: ${CommonStyles.color.Darkbold1};
  }
  .description {
    width: 1230px;
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
  }
  .details {
    display: flex;
    flex-direction: column;
    .header {
      font-size: 24px;
      color: ${CommonStyles.color.Darkbold3};
      font-weight: 700;
    }
    .contentsbox {
      display: flex;
      justify-content: center;
      align-items: center;
      .dividerline {
        width: 2px;
        height: 300px;
        background-color: ${CommonStyles.color.Darkbold2};
        margin: 0 80px;
      }
      .container {
        display: flex;
        justify-content: space-between;
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

const RentCondoDetailpage = (props) => {
  const [price, setprice] = useState(null);

  useEffect(() => {
    if (props.monthlyfee)
      setprice(
        props?.monthlyfee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      );
  }, [props]);
  console.log(props);
  console.log(`${props?.address?.lat},${props?.location?.lng}`);
  if (props === 'null') {
    return <div>loading....</div>;
  }
  return (
    <Background>
      <Wrapper>
        <PostNav>
          <h1>{props.posttitle}</h1>
          <div className="userinfo">
            <h3>
              <FaLocationArrow />
              {props && props?.address?.Formattedaddress}
            </h3>
          </div>
        </PostNav>

        <ImageWrapper>
          {props?.image?.map((image, index) => {
            return (
              <Customimagetag src={image} alt={`viewer${index}`} key={index} />
            );
          })}
        </ImageWrapper>
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
              <button>Contact</button>
            </div>
          </div>
          <div className="divider" />
          <div className="description">
            <h3 className="header">Description</h3>
            <span className="textcontainer">{props?.description}</span>
          </div>
          <div className="divider" />
          <div className="details">
            <div className="header">Details</div>
            <div className="contentsbox">
              <div className="left">
                <div className="container">
                  <h3 className="name">
                    <FaDoorClosed />
                    Property Type
                  </h3>
                  <h3 className="value">{props?.roomtype}</h3>
                </div>
                <div className="container">
                  <h3 className="name">
                    <AiOutlineCalendar />
                    Available Date
                  </h3>
                  <h3 className="value">{props?.availabledate}</h3>
                </div>
                <div className="container">
                  <h3 className="name">
                    <FaDog />
                    Pet
                  </h3>
                  <h3 className="value">{props?.petavailable}</h3>
                </div>
                <div className="container">
                  <h3 className="name">
                    <FaSmokingBan />
                    Smoking
                  </h3>
                  <h3 className="value">{props?.smoking}</h3>
                </div>
                <div className="container">
                  <h3 className="name">
                    <GiWaterDrop />
                    utility
                  </h3>
                  <h3 className="value">{props?.parking}</h3>
                </div>
              </div>
              <div className="dividerline"></div>
              <div className="right">
                <div className="container">
                  <h3 className="name">
                    <AiFillCar />
                    Parking
                  </h3>
                  <h3 className="value">{props?.parking}</h3>
                </div>
                <div className="container">
                  <h3 className="name">
                
                    Private Enterance
                  </h3>
                  <h3 className="value">{props?.privateenterance}</h3>
                </div>
                <div className="container">
                  <h3 className="name">
                    <RiTempColdFill />
                    Aircondition
                  </h3>
                  <h3 className="value">{props?.aircondition}</h3>
                </div>
                <div className="container">
                  <h3 className="name">
                    <BsPeopleFill />
                    howmanypeople
                  </h3>
                  <h3 className="value">{props?.howmanypeople}</h3>
                </div>
                <div className="container">
                  <h3 className="name">
              
                    Internet
                  </h3>
                  <h3 className="value">{props?.internet}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="divider" />
          <div className="location">
            <StaticGoogleMap
              apiKey={process.env.REACT_APP_GOOGLEAPI}
              size="800x400"
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
