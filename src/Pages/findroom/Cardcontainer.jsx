import React from 'react';
import styled from 'styled-components';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import Background from '../../assets/BackgroundImage.jpg';
import { Link } from 'react-router-dom';
const CardWrapper = styled.div`
  background-color: #ffffffaa;
  width: 100%;

  margin-bottom: ${CommonStyles.margin.Reuglar};
  box-shadow: ${CommonStyles.shadow.BoxShadow};
  border-radius: 3px;
  border: ${CommonStyles.border.regular};
  .cardimage {
    width: 100%;
    height: 200px;
    border-radius: 3px;
  }
  .detailcontainer {
    padding: ${CommonStyles.padding.Reuglar};
    border-bottom: ${CommonStyles.border.regular};
    .address,
    .city,
    .postalcode {
      font-size: 15px;
      font-weight: ${CommonStyles.bold.Medium};
      text-transform: capitalize;
    }
    .postalcode {
      margin-left: ${CommonStyles.margin.ExtraSmall};
    }
  }
  .priceline {
    display: flex;
    justify-content: space-between;
    margin-bottom: ${CommonStyles.margin.Small};
    .price {
      font-size: ${CommonStyles.fontSize.regular};
      font-weight: ${CommonStyles.bold.LittleBold};
      text-transform: uppercase;
    }
    .type {
      font-size: ${CommonStyles.fontSize.regular};
      font-weight: ${CommonStyles.bold.Light};
      text-transform: uppercase;
    }
  }
  .bedtype {
    padding: ${CommonStyles.padding.Reuglar};
    font-size: ${CommonStyles.fontSize.ExtraSmall1};
    font-weight: ${CommonStyles.bold.Medium};
  }
`;

const Cardcontainer = ({ data }) => {
  console.log(data);
  const address = data?.address?.Formattedaddress.split(',')[0];
  const city = data?.address?.Formattedaddress.split(',')[1];
  const postalcode = data?.address?.Formattedaddress.split(',')[2];
  console.log(data);
  return (
    <CardWrapper>
      <Link to={`/rentcondo/${data.id}`}>
        <img
          src={data?.image[0] ? data?.image[0] : data?.image[1]}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `${Background}`;
          }}
          className="cardimage"
          alt="background"
        />
        <div className="detailcontainer">
          <div className="priceline">
            <span className="price">$ {data?.monthlyfee}</span>
            <span className="type">{data?.roomtype}</span>
          </div>
          <span className="address">
            {address && address}
            <br />
          </span>
          <span className="city">{city && city}</span>
          <span className="postalcode">{postalcode && postalcode}</span>
        </div>
        <div className="bedtype">
          <span>2 bed / 2 bath available</span>
        </div>
      </Link>
    </CardWrapper>
  );
};

export default Cardcontainer;
