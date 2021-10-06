import React from 'react'
import styled from 'styled-components'


const Card = ({image,title,description,subname}) => {
  return (
    <Cardstyle>
      <img src={image} alt={title} className="picture" />
      <div className="description">
        <div className="textcontainer">
          <h2 className="title">{title}</h2>
          <span className="description">{description}</span>
          <span className="subname">{subname}</span>
        </div>
      </div>
    </Cardstyle>
  )
}
const Cardstyle = styled.div`
  width: 586px;
  height: 520px;
  border: 1px solid #ebeaed;
  border-radius: 10px;
  img {
    width: 100%;
    height: 330px;
  }
  .description {
    padding: 1rem;
    .textcontainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .title {
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 32px;
        margin: 0;
        color: #ea5385;
        margin-bottom: 11.8px;
      }
      .description {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        padding: 0;
        margin-bottom: 16.8px ;
        /* or 162% */

        /* Colors / Text */

        color: rgba(21, 20, 57, 0.4);

        mix-blend-mode: normal;
      }
      .subname {
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 26px;
        /* identical to box height, or 186% */

        letter-spacing: 2px;
        text-transform: uppercase;

        /* Mainsecond */

        color: #e9a7bd;

        mix-blend-mode: normal;
      }
    }
  }
`;

export default Card
