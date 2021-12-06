import React from 'react';
import styled from 'styled-components';
import LoginHeader from '../../assets/loginheader.jpg';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import { Link } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 80px;
  .loginheaderimg {
    height: 25%;
    width: 100vw;
    margin-bottom: 22px;
    background-image: url(${LoginHeader});
    background-position: center center;
    background-repeat: no-repeat;
  }
  .Container {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .left {
      flex: 1;
      display: flex;
      padding: 0 120px;
      flex-direction: column;
      /* background-color: ${CommonStyles.color.PrimaryLight1}; */
      border: 16px;
      .Header {
        color: ${CommonStyles.color.Primary};
        font-size: ${CommonStyles.fontSize.MediumLarge};
        font-weight: ${CommonStyles.bold.LittleBold};
        margin-bottom: 14px;
      }
      .divider {
        margin-bottom: 14px;
        width: 100px;
        height: 2px;
        background-color: ${CommonStyles.color.Darkbold1};
      }
      .description {
        font-size: ${CommonStyles.fontSize.Small};
        color: ${CommonStyles.color.Darkbold4};
        margin-bottom: 45px;
      }
      .description2 {
        font-size: ${CommonStyles.fontSize.Small};
        color: ${CommonStyles.color.Darkbold4};
        margin-bottom: 20px;
      }
      .googlelogin {
        padding: 4px;
        background-color: ${CommonStyles.color.Darkbold1};
        display: flex;
        align-items: center;
      }
      .buttondivider {
        display: flex;
        align-items: center;
        margin: 20px 0;
        .name {
          margin: 0 10px;
          font-size: ${CommonStyles.fontSize.Small};
          color: ${CommonStyles.color.Darkbold3};
        }
        .divederline {
          width: 100%;
          height: 2px;
          background-color: ${CommonStyles.color.Darkbold1};
        }
      }
      .Signin {
        display: flex;
        flex-direction: column;
        input {
          height: 35px;
          padding: 15px;
        }
        .email {
          margin-bottom: 32px;
        }
        .password {
          margin-bottom: 23px;
        }
        .description {
          font-size: ${CommonStyles.fontSize.ExtraSmall1};
          margin-bottom: 33px;
        }
        .submitbutton {
          width: 100px;
          height: 33px;
          background-color: ${CommonStyles.color.Primary};
          color: ${CommonStyles.color.White};
          border: none;
          border-radius: 3px;
          align-self: flex-end;
        }
      }
      .forgetthepassword {
        color: ${CommonStyles.color.Darkbold4};
        text-decoration-line: underline;
        font-size: ${CommonStyles.fontSize.Small};
      }
    }
    .Linedivider {
      height: 60vh;
      width: 2px;
      background-color: ${CommonStyles.color.Darkbold1};
      margin: 0 40px;
    }
    .right {
      flex: 1;
    }
  }
`;

const GoogleLogo = styled(FcGoogle)`
  width: 20px;
  height: 20px;
  margin:0 16px;
`

const NewRegisterandLoginpage = () => {
  return (
    <Wrapper>
      <div
        className="loginheaderimg"
      />
      <div className="Container">
        <div className="left">
          <h4 className="Header">SIGN IN</h4>
          <div className="divider" />
          <span className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing eli
          </span>
          <buttonv className="googlelogin">
            <GoogleLogo />
            Continue With Google Sign in
          </buttonv>
          <div className="buttondivider">
            <div className="divederline" />
            <span className="name">OR</span>
            <div className="divederline" />
          </div>
          <form action="" className="Signin">
            <input type="text" placeholder="Email" className="email" />
            <input type="text" placeholder="Password" className="password" />
            <span className="description">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </span>
            <button className="submitbutton" type="submit">
              SIGN IN
            </button>
          </form>
          <Link className="forgetthepassword">Forget the password</Link>
        </div>
        <div className="Linedivider" />
        <div className="left">
          <h4 className="Header">REGISTER</h4>
          <div className="divider" />
          <span className="description2">
            Lorem ipsum dolor sit amet consectetur, adipisicing eli
          </span>
          <form action="" className="Signin">
            <input type="text" placeholder="FirstName" className="email" />
            <input type="text" placeholder="LastName" className="password" />
            <input type="text" placeholder="Email" className="password" />
            <input type="text" placeholder="Phone" className="password" />
            <input type="text" placeholder="Password" className="password" />
            <input
              type="text"
              placeholder="Confirm Password"
              className="password"
            />
            <span className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing eli
            </span>
            <button className="submitbutton" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default NewRegisterandLoginpage;
