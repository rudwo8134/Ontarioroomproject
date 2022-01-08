import React from 'react';
import styled from 'styled-components';
import { AiFillLinkedin } from 'react-icons/ai';
import { CommonStyles } from '../../staticFiles/CommonStyles';

const PersonCard = ({ image, name, job, job2, url }) => {
  return (
    <Personcardstyle>
      <img src={image} alt="img" />
      <div className="text">
        <div className="name">
          <b>{name}</b>
          <a
            href={`${url}`}
            target="blank"
            className="social"
          
          >
            <AiFillLinkedin />
          </a>
        </div>

        <span className="job">
          {job}
          <br></br> <b className={'text'}>{job2}</b>
        </span>
      </div>
    </Personcardstyle>
  );
};

const Personcardstyle = styled.div`
  width: 246px;
  height: 272px;
  border: 1px solid ${CommonStyles.color.PrimaryLight1};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 15px 15px 1px #b5b5b5;
  transition: all 0.5s ease-in-out;
  @media screen and (max-width: 476px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 375px) {
    margin-top: 50px;
  }
  :hover {
    box-shadow: 15px 15px 1px ${CommonStyles.color.Primary};
    transform: scale(1.05) translateY(-1rem);
    .text {
      .name {
        color: ${CommonStyles.color.Primary};
      }
    }
  }

  img {
    margin-top: 25px;
    margin-bottom: 22.8px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 170px;
    .name {
      font-weight: ${CommonStyles.bold.Medium};
      transition: all 0.5s ease-in-out;
      font-size: 16px;
      line-height: 32px;
      /* identical to box height, or 145% */
      text-align: left;
      /* Colors / Heading */
      color: #000;
      margin-bottom: 6px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      b {
        border-bottom: 1px solid ${CommonStyles.color.Primary};
        line-height: 20px;
      }
    }

    .job {
      text-align: left;
      font-weight: normal;
      font-size: 12px;

      /* or 186% */

      /* Colors / Text */

      color: ${CommonStyles.color.Darkbold3};
      .text {
        color: ${CommonStyles.color.PrimaryLight3};
      }
    }
  }
  .social {
    display: flex;

    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      display: flex;
      justify-self: flex-end;
      flex-direction: row;
      align-items: center;
      font-size: 20px;
      color: rgba(21, 20, 57, 0.4);
      /* identical to box height, or 173% */
      /* Colors / Text */
    }
  }
`;

export default PersonCard;
