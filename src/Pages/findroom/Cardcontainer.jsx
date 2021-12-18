import React from 'react';
import styled from 'styled-components';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import Background from '../../assets/BackgroundImage.jpg';
import { Link } from 'react-router-dom';
import { GoPrimitiveDot } from 'react-icons/go';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
const CardWrapper = styled.div`
  background-color: #ffffffaa;
  width: 100%;
  position: relative;
  margin-bottom: 40px;
  box-shadow: ${CommonStyles.shadow.BoxShadow};
  border-radius: 8px;
  border: ${CommonStyles.border.regular};
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
    top: 270px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
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
      @media screen and (max-width: 425px) {
        font-size: 1rem;
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
      @media screen and (max-width: 425px) {
        font-size: 0.7rem;
      }
    }
    .separtator {
      margin: 0px 8px;
    }
    .address {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 26px;
      color: rgba(35, 31, 32, 0.72);
      @media screen and (max-width: 425px) {
        font-size: 0.8rem;
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
  const postalcode = data?.address?.Formattedaddress.split(',')[2];

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
        <div className="length">
          {data &&
            data?.image?.map((data, index) => {
              return (
                <>
                  <GoPrimitiveDot key={index} />
                </>
              );
            })}
        </div>
        <div className="detailcontainer">
          <div className="priceline">
            <span className="price">$ {data?.monthlyfee}</span>
            <span className="type">
              {`${data.properytype && data.properytype}`}
            </span>
            {data.properytype && <span className="separtator"> | </span>}

            <span className="address">{`${address && address}, ${
              city && city
            }`}</span>
          </div>
        </div>
        <div className="bedtype">
          <span>{data?.description}</span>
        </div>
      </Link>
    </CardWrapper>
  );
};

export default Cardcontainer;
