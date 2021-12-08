import React from 'react'
import styled from 'styled-components'

const Secondarybutton = ({name}) => {
  return (
    <Secondarybuttonstyle>
      <span>{name}</span>
    </Secondarybuttonstyle>
  )
}
const Secondarybuttonstyle = styled.button`
  width: 100.43px;
  height: 62px;
  background: #df1b52;
  border-radius: 100px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s ease-in-out all;
  :hover {
    background-color: black;
  }
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
`;

export default Secondarybutton
