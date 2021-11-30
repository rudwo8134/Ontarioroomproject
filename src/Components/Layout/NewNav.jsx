import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Contents } from '../../staticFiles/Contents';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import LogoImage from '../../assets/nav/LOGO.png';
const NavLink = styled(Link)`
  font-size: ${CommonStyles.fontSize.Medium};
  color: ${CommonStyles.color.Darkbold4};
  margin-right: ${CommonStyles.margin.Reuglar};
  transition: all 0.5s ease-in-out;
  display: inline-block;
  :hover {
    transform: scale(1.05) translateY(-5px);
    color: ${CommonStyles.color.Primary};
    font-weight: ${CommonStyles.bold.Bold};
  }
`;
const NavWrapper = styled.nav`
  position: fixed;
  z-index: 30;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${({ scroll }) => (scroll ? 'white' : 'transparent')};
  transition: all 0.5s ease-in-out;
  .logoConatiner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
  .navLinkContainer {
    flex: 1;
  }
  .loginContainer {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      display: inline-block;
      transition: all 0.4s ease-in-out;
      :hover {
        transform: scale(1.05) translateY(-5px);
        color: ${CommonStyles.color.Primary};
        font-weight: ${CommonStyles.bold.Bold};
      }
    }
  }
`;

const NewNav = () => {
  const [scroll, setscroll] = useState(false);
  const handlescroll = () => {
    const scroll = window.scrollY;
    if (scroll > 10) {
      setscroll(true);
    } else {
      setscroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handlescroll);
    return () => {
      window.removeEventListener('scroll', handlescroll);
    };
  }, []);
  return (
    <NavWrapper scroll={scroll}>
      <div className="logoConatiner">
        <Link to="/">
          <img src={LogoImage} alt="MainLogo" />
        </Link>
      </div>
      <div className="navLinkContainer">
        {Contents.nav.Link.map((data, index) => {
          return (
            <NavLink to={data.linkAddress} key={index} className="Hoverworking">
              {data.linkName}
            </NavLink>
          );
        })}
      </div>
      <div className="loginContainer">
        <Link style={{ marginRight: `${CommonStyles.margin.Reuglar}` }}>
          {Contents.nav.login.linkName}
        </Link>
        <Link>{Contents.nav.register.linkName}</Link>
      </div>
    </NavWrapper>
  );
};

export default NewNav;
