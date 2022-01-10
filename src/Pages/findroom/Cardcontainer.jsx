import React from 'react';
import styled from 'styled-components';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import Background from '../../assets/BackgroundImage.jpg';
import { Link } from 'react-router-dom';
const CardWrapper = styled.div`
  background-color: #ffffffaa;
  width: 100%;
  position: relative;
  margin-bottom: 40px;
  box-shadow: ${CommonStyles.shadow.BoxShadow};
  border-radius: 8px;
  border: ${CommonStyles.border.regular};
  @media screen and (max-width: 320px) {
    height: 250px;
  }
  .heartbutton {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 30;
    background-color: transparent;
    border: none;
    svg {
      font-size: 40px;
      color: ${CommonStyles.color.Primary};
    }
  }
  .length {
    position: absolute;
    top: 260px;
    right: 1rem;
    transform: translateX(0%);
    padding: 0.2rem 1.5rem;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    font-size: 1rem;
    color: #fff;
    border-radius: 30px;
    background-color: #000000cc;
    transition: all 0.3s ease-in-out;
    @media screen and (max-width: 490px) {
      padding: 0.1rem 1rem;
      font-size: 0.8rem;
    }
    @media screen and (max-width: 320px) {
      padding: 0.1rem 0.7rem;
      font-size: 0.6rem;
    }
    :hover {
      background-color: ${CommonStyles.color.Primary};
    }
    .slef {
      font-size: 0.8rem;
      width: 260px;
      position: absolute;
      top: -100%;
      left: 0;
      color: ${CommonStyles.color.Primary};
    }
    @media screen and (max-width: 375px) {
      top: 220px;
    }
    @media screen and (max-width: 320px) {
      top: 100px;
    }
    svg {
      color: ${CommonStyles.color.Primary};
    }
  }
  .cardimage {
    position: relative;
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    @media screen and (max-width: 375px) {
      height: 250px;
      object-fit: cover;
    }
    @media screen and (max-width: 320px) {
      height: 130px;
    }
  }
  .detailcontainer {
    padding: 6px ${CommonStyles.padding.Reuglar};
    border-bottom: ${CommonStyles.border.regular};
    .address,
    .city,
    .postalcode {
      font-size: 15px;
      font-weight: ${CommonStyles.bold.ExtraBold};
      color: ${CommonStyles.color.Darkbold4};
      text-transform: capitalize;
    }
    .postalcode {
      margin-left: ${CommonStyles.margin.ExtraSmall};
    }
  }
  .priceline {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 6px;
    .price {
      font-size: 20px;
      font-weight: ${CommonStyles.bold.LittleBold};
      color: ${CommonStyles.color.Primary};
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      align-items: center;
      @media screen and (max-width: 476px) {
        font-size: 0.9rem;
      }
      @media screen and (max-width: 390px) {
        font-size: 1rem;
        width: 4.2rem;
      }
      @media screen and (max-width: 320px) {
        font-size: 0.7rem;
        width: 2.7rem;
      }
    }
    .type {
      margin-left: 16px;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 26px;
      color: rgba(35, 31, 32, 0.72);
      text-transform: capitalize;
      display: flex;
      justify-content: center;
      align-items: center;
      @media screen and (max-width: 476px) {
        font-size: 0.7rem;
      }
      @media screen and (max-width: 390px) {
        font-size: 0.7rem;
        width: 3.3rem;
      }
      @media screen and (max-width: 320px) {
        font-size: 0.5rem;
      }
    }
    .separtator {
      margin: 0px 8px;
      color: ${CommonStyles.color.Darkbold2};
      display: flex;
      justify-content: center;
      align-items: center;
      @media screen and (max-width: 390px) {
        font-size: 1rem;
        margin: 0px 4px;
      }
      @media screen and (max-width: 320px) {
        margin-left: -4px;
      }
    }
    .address {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 26px;
      color: rgba(35, 31, 32, 0.72);
      display: flex;
      align-items: center;
      @media screen and (max-width: 476px) {
        font-size: 0.8rem;
      }
      @media screen and (max-width: 390px) {
        width: 65%;
        font-size: 0.7rem;
        align-items: center;
        display: flex;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      @media screen and (max-width: 320px) {
        width: 60%;
        font-size: 0.7rem;
      }
    }
  }
  .bedtype {
    padding: ${CommonStyles.padding.Reuglar};
    font-size: ${CommonStyles.fontSize.ExtraSmall1};
    font-weight: ${CommonStyles.bold.Medium};
    color: ${CommonStyles.color.Darkbold4};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.625;
    max-width: 540px;
  }
`;

const Cardcontainer = ({ data }) => {
  const address = data?.address?.Formattedaddress.split(',')[0];
  const city = data?.address?.Formattedaddress.split(',')[1];

  // const updateLike = () =>{

  // }

  return (
    <CardWrapper>
      <Link to={`/rentcondo/${data.id}`}>
        {/* <button className="heartbutton" onClick={updateLike}>
          <AiFillHeart />
        </button> */}
        <img
          src={data?.image[0] ? data?.image[0] : data?.image[1]}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `${Background}`;
          }}
          className="cardimage"
          alt="background"
        />
        <div className="length">자세히 보기</div>
        <div className="detailcontainer">
          <div className="priceline">
            <span className="price">$ {data?.rentFee}</span>
            <span className="type">{`${data.rentType && data.rentType}`}</span>
            {data.rentType && <span className="separtator"> | </span>}

            <span className="address">{`${address && address}, ${
              city && city
            }`}</span>
          </div>
        </div>
        <div className="bedtype">
          <span>{data?.postDescription}</span>
        </div>
      </Link>
    </CardWrapper>
  );
};

export default Cardcontainer;
