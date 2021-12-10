import React from 'react'
import styled from 'styled-components'
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaTwitterSquare,
} from 'react-icons/fa';
import { CommonStyles } from '../../staticFiles/CommonStyles';

const PersonCard = ({image,name,job,job2}) => {
  return (
    <Personcardstyle>
      <img src={image} alt="img" />
      <div className="text">
        <span className="name">{name}</span>
        <span className="job">
          {job}
          <br></br> <b className={'text'}>{job2}</b>
        </span>
      </div>
      <div className="social">
        <FaGooglePlusSquare />
        <FaFacebookSquare />
        <FaTwitterSquare />
      </div>
    </Personcardstyle>
  );
}

const Personcardstyle = styled.div`
  width: 370px;
  height: 370px;
  border: 1px solid #ebeaed;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 10px 0.6rem 1.2rem rgba(0,0,0,0.6);
  img {
    margin-top: 50px;
    margin-bottom: 22.8px;
    width: 130px;
    height: 130px;
    border-radius: 50%;
  }
  .text {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    justify-content: center;
    .name {
      font-weight: normal;
      font-size: 22px;
      line-height: 32px;
      letter-spacing: 0.15rem;
      /* identical to box height, or 145% */

      text-align: center;

      /* Colors / Heading */

      color: ${CommonStyles.color.Dark};
      margin-bottom: 16px;
    }
    .job {
      text-align: center;
      font-weight: bold;
      font-size: 14px;
      line-height: 26px;
      /* or 186% */

      text-align: center;
      letter-spacing: 2px;
      text-transform: uppercase;

      /* Colors / Text */

      color: ${CommonStyles.color.Darkbold3};
      .text{
        color:${CommonStyles.color.PrimaryLight3};
      }
    }
  }
  .social {
    margin-top: 23.8px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 5rem;
    svg {
      font-size: 22px;
      line-height: 38px;
      /* identical to box height, or 173% */

      text-align: center;

      /* Colors / Text */

      color: rgba(21, 20, 57, 0.4);
    }
  }
`;

export default PersonCard