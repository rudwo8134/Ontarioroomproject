import React from 'react'
import styled from 'styled-components'



const Primarybutton = ({name}) => {
  return <Primarybuttonstyle><span>{name}</span></Primarybuttonstyle>;
}

const Primarybuttonstyle = styled.button`
  width: 103px;
  height: 40px;
  border-radius: 100px;
  border: 2px solid #ffffff;
  background-color: var(--text-Primary);
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
  }
`;

export default Primarybutton
