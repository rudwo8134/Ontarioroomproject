import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Contents } from '../../staticFiles/Contents';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import LogoImage from '../../assets/nav/LOGO.png';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../Redux/Users/user.selector';
import { signOutStart } from '../../Redux/Users/user.action';
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Jua', 'sans-serif', 'Do Hyeon', 'Sunflower'],
  },
});

const NavLink = styled(Link)`
  font-size: ${CommonStyles.fontSize.Medium};
  font-weight: ${CommonStyles.bold.bold};
  font-family: 'Sunflower', sans-serif;
  color: #241a19;
  margin-right: 1.6rem;
  transition: all 0.5s ease-in-out;
  display: inline-block;
  :hover {
    transform: scale(1.05) translateY(-5px);
    color: ${CommonStyles.color.Primary};
    font-weight: ${CommonStyles.bold.Bold};
  }
  @media screen and (max-width: 375px) {
  }
`;
const NavWrapper = styled.nav`
  position: fixed;
  z-index: 30;
  top: 0;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${({ scroll }) => (scroll ? 'white' : 'transparent')};
  transition: all 0.5s ease-in-out;
  @media screen and (max-width: 375px) {
    position: sticky;
    width: 100vw;
    height: 40px;
    padding: 30px 10px;
    display: flex;
    justify-content: space-between;
    align-self: space-between;
  }
  @media screen and (max-width: 476px) {
    position: sticky;
    width: 100vw;
    height: 40px;
    padding: 30px 10px;
    display: flex;
    justify-content: space-between;
    align-self: space-between;
  }
  .logoConatiner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    @media screen and (max-width: 375px) {
      flex: none;
      display: inline-block;
    }
    @media screen and (max-width: 476px) {
      flex: none;
      display: inline-block;
    }

    img {
      @media screen and (max-width: 375px) {
        display: inline-block;
        width: 110px;
        height: 25px;
      }
      @media screen and (max-width: 476px) {
        display: inline-block;
        width: 149px;
        height: 30px;
      }
    }
  }
  .hambergurcontainer {
    display: none;
    @media screen and (max-width: 375px) {
      display: inline-block;
      button {
        background-color: transparent;
        border: none;
      }
      svg {
        font-size: 2.5rem;
      }
    }
    @media screen and (max-width: 476px) {
      display: inline-block;
      button {
        background-color: transparent;
        border: none;
      }
      svg {
        font-size: 2.5rem;
        color: ${CommonStyles.color.Darkbold4};
      }
    }
  }
  .HamburgerLinkcontainer {
    display: none;
    @media screen and (max-width: 476px) {
      display: inline-block;
      position: absolute;
      top: -10px;
      left: 0;
      width: 100vw;
      height: 102vh;
      background-color: ${CommonStyles.color.White};
      .mypage {
        display: flex;
        flex-direction: column;
        align-items: center;
        button {
          background-color: transparent;
          border: none;
          font-size: 1.5rem;
          margin-top: 30px;
          color: ${CommonStyles.color.Dark};
        }
        a {
          background-color: transparent;
          border: none;
          font-size: 1.5rem;
          margin-top: 30px;
          color: ${CommonStyles.color.Dark};
        }
        .Username {
          position: absolute;
          bottom: 20px;
          color: ${CommonStyles.color.Primary};
        }
      }
      .linkcontainer {
        margin-top: 100px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        a {
          font-size: 1.5rem;
          margin-top: 30px;
          color: ${CommonStyles.color.Dark};
        }
      }
      .logoConatiner {
        position: absolute;
        top: 25px;
        left: 10px;
      }
      .xButton {
        position: absolute;
        top: 20px;
        right: 10px;
        background-color: transparent;
        border: none;

        svg {
          font-size: 2.5rem;
          color: ${CommonStyles.color.Darkbold4};
        }
      }
    }
    @media screen and (max-width: 375px) {
      display: inline-block;
      position: absolute;
      top: -10px;
      left: 0;
      width: 100vw;
      height: 102vh;
      background-color: ${CommonStyles.color.White};
      .mypage {
        display: flex;
        flex-direction: column;
        align-items: center;
        button {
          background-color: transparent;
          border: none;
          font-size: 1.5rem;
          margin-top: 30px;
          color: ${CommonStyles.color.Dark};
        }
        a {
          background-color: transparent;
          border: none;
          font-size: 1.5rem;
          margin-top: 30px;
          color: ${CommonStyles.color.Dark};
        }
        .Username {
          position: absolute;
          bottom: 20px;
          color: ${CommonStyles.color.Primary};
        }
      }
      .linkcontainer {
        margin-top: 100px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        a {
          font-size: 1.5rem;
          margin-top: 30px;
          color: ${CommonStyles.color.Dark};
        }
      }
      .logoConatiner {
        position: absolute;
        top: 25px;
        left: 10px;
      }
      .xButton {
        position: absolute;
        top: 20px;
        right: 10px;
        background-color: transparent;
        border: none;

        svg {
          font-size: 2.5rem;
        }
      }
    }
  }
  .navLinkContainer {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 375px) {
      display: none;
    }
    a {
      font-size: 20px;
      font-weight: bold;
    }
    @media screen and (max-width: 476px) {
      display: none;
    }
  }

  .loginContainer {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 375px) {
      display: none;
    }
    @media screen and (max-width: 476px) {
      display: none;
    }
    .DetailButton {
      width: 100px;
      height: 10px;
      background-color: none;
    }
    .Username {
      text-transform: capitalize;
      font-size: ${CommonStyles.fontSize.Medium};
      color: ${CommonStyles.color.Dark};
      font-weight: ${CommonStyles.bold.Bold};
      margin-right: 10px;
      position: relative;
      .detailspan {
        position: absolute;
        top: 30px;
        left: 0;
        width: 300px;
      }
    }
    .logoutbutton {
      text-transform: uppercase;
      font-size: ${CommonStyles.fontSize.Small};
      color: ${CommonStyles.color.Primary};
      font-weight: ${CommonStyles.bold.Bold};
      border: none;
      cursor: pointer;
      background-color: transparent;
      :hover {
        transform: scale(1.05) translateY(-3px);
        color: ${CommonStyles.color.PrimaryLight2};
        font-weight: ${CommonStyles.bold.Bold};
      }
    }
    a {
      display: inline-block;
      transition: all 0.4s ease-in-out;
      font-weight: 900;
      color: #000;
      text-shadow: 0.5px 0.5px 0.5px #999;
      :hover {
        transform: scale(1.05) translateY(-5px);
        color: ${CommonStyles.color.Primary};
        font-weight: ${CommonStyles.bold.Bold};
      }
    }
  }
`;

const NewNav = (props) => {
  const history = useHistory();
  const { User, signout } = props;
  const [scroll, setscroll] = useState(false);
  const [showPopup, setShowPopuo] = useState(false);
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
  const handlelogin = () => {
    history.push({
      pathname: '/Mypage',
      state: { params: User },
    });
    setShowPopuo(false);
  };
  return (
    <NavWrapper scroll={scroll}>
      <div className="logoConatiner">
        <Link to="/">
          <img src={LogoImage} alt="MainLogo" />
        </Link>
      </div>
      <div className="hambergurcontainer">
        <button onClick={() => setShowPopuo(true)}>
          <GiHamburgerMenu />
        </button>
      </div>

      <div className="navLinkContainer">
        {Contents.nav.Link.map((data, index) => {
          return (
            <NavLink
              onClick={() => setShowPopuo(false)}
              to={data.linkAddress}
              key={index}
              className="Hoverworking"
            >
              {data.linkName}
            </NavLink>
          );
        })}
      </div>
      <div className="loginContainer">
        {User ? (
          <>
            <span className="Username">Hi! {User?.displayName}</span>
            <button onClick={handlelogin} className="logoutbutton">
              My Page
            </button>
            <button
              onClick={() => {
                signout();
                setShowPopuo(false);
              }}
              className="logoutbutton"
            >
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
      {showPopup && (
        <div className="HamburgerLinkcontainer">
          <div className="logoConatiner">
            <Link to="/">
              <img src={LogoImage} alt="MainLogo" />
            </Link>
          </div>
          <button onClick={() => setShowPopuo(false)} className="xButton">
            <GiCancel />
          </button>
          <div className="linkcontainer">
            {Contents.nav.Link.map((data, index) => {
              return (
                <Link
                  onClick={() => setShowPopuo(false)}
                  to={data.linkAddress}
                  key={index}
                  className="Hoverworking"
                >
                  {data.linkName}
                </Link>
              );
            })}
          </div>
          {User ? (
            <div className="mypage">
              <button onClick={handlelogin} className="logoutbutton">
                My Page
              </button>
              <button onClick={signout} className="logoutbutton">
                LogOut
              </button>
              <span className="Username">Hi! {User?.displayName}</span>
            </div>
          ) : (
            <div className="mypage">
              <Link
                onClick={() => {
                  setShowPopuo(false);
                }}
                to={Contents.nav.login.linkAddress}
                style={{ marginRight: `${CommonStyles.margin.Reuglar}` }}
              >
                {Contents.nav.login.linkName}
              </Link>
              <Link
                onClick={() => {
                  setShowPopuo(false);
                }}
              >
                {Contents.nav.register.linkName}
              </Link>
            </div>
          )}
        </div>
      )}
    </NavWrapper>
  );
};

const maptoprops = createStructuredSelector({
  User: selectCurrentUser,
});

const dispatchtoprops = (dispatch) => ({
  signout: () => dispatch(signOutStart()),
});

export default connect(maptoprops, dispatchtoprops)(NewNav);
