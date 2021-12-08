import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import { Contents } from '../../staticFiles/Contents';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import LogoImage from '../../assets/nav/LOGO.png';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../Redux/Users/user.selector';
import { signOutStart } from '../../Redux/Users/user.action';
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
    .Username {
      text-transform: capitalize;
      font-size: ${CommonStyles.fontSize.Small};
      color: ${CommonStyles.color.Dark};
      font-weight: ${CommonStyles.bold.Bold};
    }
    .logoutbutton {
      text-transform: uppercase;
      font-size: ${CommonStyles.fontSize.Small};
      color: ${CommonStyles.color.Primary};
      font-weight: ${CommonStyles.bold.Bold};
      border: none;
      cursor: pointer;
      :hover {
        transform: scale(1.05) translateY(-3px);
        color: ${CommonStyles.color.PrimaryLight2};
        font-weight: ${CommonStyles.bold.Bold};
      }
    }
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

const NewNav = (props) => {
  
  const { User, signout } = props;
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
        {User ? (
          <>
          <span className="Username">Hi! {User?.displayName}</span>
            <button onClick={signout} className="logoutbutton">
            LogOut
            </button>
          </>
        ) : (
          <>
            <Link
              to={Contents.nav.login.linkAddress}
              style={{ marginRight: `${CommonStyles.margin.Reuglar}` }}
            >
              {Contents.nav.login.linkName}
            </Link>
            <Link>{Contents.nav.register.linkName}</Link>
          </>
        )}
      </div>
    </NavWrapper>
  );
};

const maptoprops = createStructuredSelector({
  User:selectCurrentUser
})

const dispatchtoprops = (dispatch) => ({
  signout: () => dispatch(signOutStart()),
})

export default connect(maptoprops, dispatchtoprops)(NewNav);
