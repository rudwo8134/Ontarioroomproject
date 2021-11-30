import React, { useState } from 'react';
import styled from 'styled-components'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Leftsign = styled(AiOutlineArrowLeft)`
  position: absolute;
  top: 50%;
  left: 0;
  font-size: 2rem;
  color: white;
`;
const Rightsign = styled(AiOutlineArrowRight)`
  position: absolute;
  top: 50%;
  right: 0;
  font-size: 2rem;
  color: white;
`;
const Heart = styled(BsHeartFill)`
  position: absolute;
  top: 10%;
  right: 0;
  font-size: 2.5rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  color: rgba(223, 27, 82, 0.8);
`;

const Showitem = ({data}) => {
    const slides = data && data.image;
    const length = data && slides.length;
    const [current, Setcurrent] = useState(0);

    const nextslide = () => {
      Setcurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevslide = () => {
      Setcurrent(current === 0 ? length - 1 : current - 1);
    };
  return (
    <>
      <div className="imagecontainer">
        <Leftsign onClick={prevslide} />
        <Rightsign onClick={nextslide} />
        <Heart />
        {data.image.map((item, index) => (
          <div
            key={index}
            className="slidecontainer"
            name={index === current ? 'slide active' : 'slide'}
          >
            {index === current && <img src={item} alt="pic"></img>}
          </div>
        ))}
      </div>
      <div className="pricecontainer">
        <h3 className="price">${data.monthlyfee}</h3>
        <div className="roomtype">{data.roomtype}</div>
        <span>|</span>
        <div className="rocation">{data.address.Formattedaddress}</div>
      </div>
      <div className="descriptioncontainer">
        <div className="description">{data.description}</div>
        <Link>자세히보기</Link>
      </div>
    </>
  );
}

export default Showitem
