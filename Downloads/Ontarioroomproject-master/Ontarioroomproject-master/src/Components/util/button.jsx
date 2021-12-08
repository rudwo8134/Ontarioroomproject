import React from 'react'
import style from '../../static/staticcss'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
  font-weight: bold;
  border: none;
  padding: ${({ big }) => (big ? '1rem 3rem' : '0.5rem 1.5rem')};
  text-transform: capitalize;
  border-radius: 30px;
  font-size: ${({ big }) => (big ? '1.4rem' : `${style.fontSize.ButtonFont}`)};
  background-color: ${style.backgroundColor.Primary};
  color: ${({ black }) => (black ? '#222' : '#fff')};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    border: 1px solid ${style.backgroundColor.Primary};
    color: ${({ black }) =>
      black
        ? `${style.backgroundColor.Primary}`
        : `${style.backgroundColor.blackDark}`};
  }
`;

const ButtonComponents = (props) => {
  const {big,black,text} =props
  return (
    <ButtonWrapper big={big ? big : undefined} black={black} {...props}>
      {text}
    </ButtonWrapper>
  );
};

export default ButtonComponents;
