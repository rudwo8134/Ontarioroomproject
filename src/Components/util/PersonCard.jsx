import React from 'react';
import styled from 'styled-components';
import { FaGooglePlusSquare } from 'react-icons/fa';
import { CommonStyles } from '../../staticFiles/CommonStyles';

const PersonCard = ({ image, name, job, job2 }) => {
  return (
    <Personcardstyle>
      <img src={image} alt="img" />
      <div className="text">
        <div className="name">
          <b>{name}</b>
          <span className="social">
            <FaGooglePlusSquare />
          </span>
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
  border: 1px solid #ebeaed;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

  img {
    margin-top: 25px;
    margin-bottom: 22.8px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 170px;
    .name {
      font-weight: ${CommonStyles.bold.Medium};
      font-size: 16px;
      line-height: 32px;
      /* identical to box height, or 145% */
      text-align: left;
      /* Colors / Heading */
      color: ${CommonStyles.color.Primary};
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
    svg {
      display: flex;
      justify-self: flex-end;
      flex-direction: row;
      align-items: center;
      font-size: 18px;
      color: rgba(21, 20, 57, 0.4);
      /* identical to box height, or 173% */
      /* Colors / Text */
    }
  }
`;

export default PersonCard;
