import React from 'react';
import styled from 'styled-components';
import style from '../../static/staticcss';

const HomeCardWrapper = styled.div`
  .houseImages {
    width: 100%;
    height: 324px;
    border-radius: 5px;
  }
  .titleWrapper {
    display: flex;
    align-items: center;
    margin-bottom: 31px;
    h1 {
      color: ${style.fontColor.Primary};
      font-size: ${style.fontSize.large};
      margin-right: 1rem;
    }
    .roomtype {
      font-size: ${style.fontSize.large};
      font-weight: 500;
      text-transform: capitalize;
      margin-right: 0.5rem;
      color: ${style.fontColor.detailpagesubheader};
    }
    .divider {
      font-size: ${style.fontSize.large};
      font-weight: 500;
      text-transform: capitalize;
      margin-right: 0.5rem;
      color: ${style.fontColor.detailpagesubheader};
    }
    .address {
      font-size: ${style.fontSize.large};
      font-weight: 300;
      text-transform: capitalize;
      margin-right: 0.5rem;
      color: ${style.fontColor.detailpagesubheader};
    }
  }
  .descriptionWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .descriptionText {
      width: 70%;
      height: 80px;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 400;
      color: ${style.fontColor.detailpagesubheader};
    }
    .divider {
      font-size: ${style.fontSize.large};
      font-weight: 500;
      text-transform: capitalize;
      margin-right: 0.5rem;
      color: ${style.fontColor.detailpagesubheader};
    }
    button {
      width: 137px;
      height: 60px;
      border: none;
      font-size: ${style.fontSize.ButtonFont};
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      border-radius: 3px;
      box-shadow: ${style.boxshaow.normal};
    }
  }
`;

const HomeScreenShowingItemCard = (props) => {
  const {
    image,
    monthlyfee,
    roomtype,
    address: { Formattedaddress },
    description,
  } = props.data;
  return (
    <HomeCardWrapper>
      {/* {image.map((data, index) => {
        return (
          <img className="houseImages" alt={index} src={data} key={index} />
        );
      })} */}
      <img
        className="houseImages"
        alt={Formattedaddress}
        src={image[0]}
      />
      <div className="titleWrapper">
        <h1>${monthlyfee}</h1>
        <span className="roomtype">{roomtype}</span>
        <span className="divider">|</span>
        <span className="address">{Formattedaddress}</span>
      </div>
      <div className="descriptionWrapper">
        <span className="descriptionText">{description}</span>
        <button>Contact</button>
      </div>
    </HomeCardWrapper>
  );
};

export default HomeScreenShowingItemCard;
