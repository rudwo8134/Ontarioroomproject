import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGooglePlus } from 'react-icons/fa';


const mix = keyframes`
0%{
  background-position: 0%;
}
100%{
   background-position: 400%;
}

`;

const Buttonlink = styled.button`
  width: ${({ big }) => (big ? '400px' : '200px')};
  height: ${({ big }) => (big ? '50px' : '60px')};
  position: relative;
  margin: 0 auto;
  text-align: center;
  line-height: 60px;
  color: #fff;
  font-size: ${({ big }) => (big ? '1.7rem' : '1.3rem')};
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 30px;
  animation: ${mix} 8s linear infinite;
  transition: all 1s ease-in-out;
  z-index: 3;
  display: ${({ big }) => (big ? 'flex' : '')};
  align-items: ${({ big }) => (big ? 'center' : '')};
  justify-content: ${({ big }) => (big ? 'center' : '')};
  border: none;
  cursor: pointer;

  @media screen and (max-width: 468px) {
    width: 100px;
    height: 30px;
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }

  :hover {
    transition: all 0.5s ease-in-out;
    animation: none;
    :before {
      filter: blur(20px);
      opacity: 1;
    }
  }
  :before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
    border-radius: 30px;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
`;

const NormalButton = styled.button`
  width: ${({ big }) => (big ? '400px' : '200px')};
  height: ${({ big }) => (big ? '50px' : '60px')};
  position: relative;
  text-align: center;
  line-height: 60px;
  margin: 0 auto;
  color: #fff;
  font-size: ${({ big }) => (big ? '1.3rem' : '1.3rem')};
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  background: linear-gradient(90deg, #03a9f4, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 30px;
  animation: ${mix} 8s linear infinite;
  transition: all 1s ease-in-out;
  z-index: 3;
  display: ${({ big }) => (big ? 'flex' : '')};
  align-items: ${({ big }) => (big ? 'center' : '')};
  justify-content: ${({ big }) => (big ? 'center' : '')};
  border: none;
  cursor: pointer;

  :hover {
    transition: all 0.5s ease-in-out;
    animation: none;
    :before {
      filter: blur(20px);
      opacity: 1;
    }
  }
  :before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
    border-radius: 30px;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
`;
const Googlelog = styled(FaGooglePlus)`
  font-size: 2rem;
  margin-right: 3rem;
`;

const LoginButton = (props) => {
  const { text, big, Link = '/pricing', google } = props
  if (google) {
    return (
      <NormalButton big={big} {...props}>
        <Googlelog />
        {text}
      </NormalButton>
    );
  }
  return (
    <Buttonlink to={Link} big={big} {...props}>
      {text}
    </Buttonlink>
  );
};

export default LoginButton;
