import React from 'react'
import styled from 'styled-components'
import style from '../../static/staticcss';
import { Filterdata } from '../../static/staticdata';

const Filterbox = styled.div`
  position: absolute;
  top: 3rem;
  left: 0;
  width: 440px;
  height: 70vh;
  overflow-x: scroll;
  background: white;
  display: ${({ filter }) => (filter ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  .title {
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    font-size: 1.6rem;
    font-weight: 500;
    svg {
      font-weight: 700;
      font-size: 1.8rem;
      margin-right: 0.5rem;
      color: ${style.backgroundColor.blackLight};
    }
  }
  .categoryContainer {
    padding: 12px;
    width: 100%;
    display: flex;
    .Selector{
      width: 150px;
      border:none;
      font-size: 1.1rem;
      text-transform: capitalize;
      background: ${style.backgroundColor.primaryLight};
      border-radius: 30px;
      padding: 0.3rem;
    } 
    span {
      display: flex;

      align-items: center;
      width: 100%;
      text-align: start;
      font-size: 1.2rem;
      svg {
        margin-right: 0.5rem;
        color: ${style.backgroundColor.primaryDark};
      }
    }
  }
`;

const Filter = ({filter}) => {
  return (
    <Filterbox filter={filter}>
      <h1 className="title">{Filterdata.filtericon}{Filterdata.title}</h1>
      {Filterdata.Category.map((category,index)=>{
        return (
          <div className="categoryContainer" key={index}>
            <span>
              {category.icon}
              {category.name}
            </span>
            <select className="Selector">
              <option value="NA">Not choose</option>
              <option value="YES">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        );
      })}
    </Filterbox>
  );
}

export default Filter
