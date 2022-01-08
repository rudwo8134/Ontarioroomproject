import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LoginHeader from '../../assets/loginheader.jpg';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import { Link, useHistory } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser, Selecterror } from '../../Redux/Users/user.selector';
import {
  emailSigninStart,
  googleSigninStart,
  signUpStart,
} from '../../Redux/Users/user.action';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 80px;

  @media screen and (max-width: 476px) {
    margin-top: 0px;
    height: 170vh;
  }
  @media screen and (max-width: 380px) {
    margin-top: 0px;
    height: 200vh;
  }
  @media screen and (max-width: 320px) {
    margin-top: 0px;
    height: 240vh;
  }

  .loginheaderimg {
    height: 25%;
    width: 100vw;
    margin-bottom: 22px;
    background-image: url(${LoginHeader});
    background-position: center center;
    background-repeat: no-repeat;
    @media screen and (max-width: 375px) {
      display: none;
    }
    @media screen and (max-width: 476px) {
      display: none;
    }
  }
  .Container {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media screen and (max-width: 375px) {
      width: 100vw;
      max-width: 100vw;
      flex-direction: column;
    }
    @media screen and (max-width: 476px) {
      width: 100vw;
      max-width: 100vw;
      flex-direction: column;
    }
    .left {
      flex: 1;
      display: flex;
      padding: 0 120px;
      flex-direction: column;
      /* background-color: ${CommonStyles.color.PrimaryLight1}; */
      border: 16px;
      @media screen and (max-width: 375px) {
        width: 100vw;
        justify-content: center;
        align-items: center;
      }
      @media screen and (max-width: 476px) {
        width: 100vw;
        justify-content: center;
        align-items: center;
      }
      .Header {
        color: ${CommonStyles.color.Primary};
        font-size: ${CommonStyles.fontSize.MediumLarge};
        font-weight: ${CommonStyles.bold.LittleBold};
        margin-bottom: 14px;

        @media screen and (max-width: 375px) {
          font-size: 20px;
        }
        @media screen and (max-width: 476px) {
          font-size: 2rem;
        }
        @media screen and (max-width: 320px) {
          font-size: 1.5rem;
          width: 100vw;
          text-align: center;
        }
      }
      .divider {
        margin-bottom: 14px;
        width: 100px;
        height: 2px;
        background-color: ${CommonStyles.color.Darkbold1};
        @media screen and (max-width: 375px) {
          font-size: 20px;
          width: 15vw;
          margin-top: -0.5rem;
        }
        @media screen and (max-width: 476px) {
          font-size: 20px;
          width: 15vw;
          margin-top: -0.5rem;
        }
      }
      .description {
        font-size: ${CommonStyles.fontSize.Small};
        color: ${CommonStyles.color.Darkbold4};
        margin-bottom: 45px;
        @media screen and (max-width: 375px) {
          font-size: 0.6rem;
          width: 90vw;
          text-align: center;
        }
        @media screen and (max-width: 476px) {
          font-size: 0.8rem;
          width: 90vw;
          text-align: center;
        }
      }
      .description2 {
        font-size: ${CommonStyles.fontSize.Small};
        color: ${CommonStyles.color.Darkbold4};
        margin-bottom: 20px;
        @media screen and (max-width: 375px) {
          font-size: 0.6rem;
          width: 90vw;
          text-align: center;
        }
        @media screen and (max-width: 476px) {
          font-size: 0.8rem;
          width: 90vw;
          text-align: center;
        }
      }
      .googlelogin {
        padding: 4px;
        background-color: ${CommonStyles.color.Darkbold1};
        display: flex;
        align-items: center;
        border: none;
        cursor: pointer;
        border-radius: 10px;
        transition: 0.5s ease-in-out all;
        :hover {
          background-color: ${CommonStyles.color.Darkbold3};
        }
        @media screen and (max-width: 375px) {
          font-size: 0.8rem;
          width: 90vw;
          text-align: center;
        }
        @media screen and (max-width: 476px) {
          font-size: 1rem;
          width: 90vw;
          text-align: center;
        }
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
          @media screen and (max-width: 375px) {
            display: none;
          }
          @media screen and (max-width: 476px) {
            display: none;
          }
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
        .passwordwrong {
          margin-bottom: 1rem;
          font-size: 1rem;
          color: ${CommonStyles.color.Primary};
        }
        .description {
          font-size: ${CommonStyles.fontSize.ExtraSmall1};
          margin-bottom: 33px;
          @media screen and (max-width: 320px) {
            font-size: 0.5rem;
            width: 90vw;
            text-align: center;
            margin-bottom: 1rem;
          }
          @media screen and (max-width: 375px) {
            font-size: 0.7rem;
            width: 90vw;
            text-align: center;
          }
          @media screen and (max-width: 476px) {
            font-size: 0.8rem;
            width: 90vw;
            text-align: center;
          }
        }
        .submitbutton {
          width: 100px;
          height: 33px;
          background-color: ${CommonStyles.color.Primary};
          color: ${CommonStyles.color.White};
          border: none;
          border-radius: 3px;
          align-self: flex-end;
          transition: 0.5s ease-in-out all;
          cursor: pointer;
          :hover {
            background-color: ${CommonStyles.color.PrimaryLight4};
          }

          @media screen and (max-width: 476px) {
            width: 10rem;
            height: 3rem;
            font-size: 1.2rem;
          }
          @media screen and (max-width: 375px) {
            width: 100px;
            height: 33px;
            font-size: 1rem;
          }
        }
      }
      .forgetthepassword {
        color: ${CommonStyles.color.Darkbold4};
        text-decoration-line: underline;
        font-size: ${CommonStyles.fontSize.Small};

        @media screen and (max-width: 375px) {
          font-size: 0.8rem;
          width: 80vw;
          margin-top: -1.5rem;
        }
        @media screen and (max-width: 476px) {
          font-size: 1rem;
          width: 80vw;
          margin-top: -1.8rem;
        }
      }
    }
    .Linedivider {
      height: 60vh;
      width: 2px;
      background-color: ${CommonStyles.color.Darkbold1};
      margin: 0 40px;
      @media screen and (max-width: 375px) {
        width: 30vh;
        height: 2px;
        margin: 30px auto;
        margin-top: 50px;
      }
      @media screen and (max-width: 476px) {
        width: 30vh;
        height: 2px;
        margin: 30px auto;
        margin-top: 50px;
      }
    }
    .right {
      flex: 1;
    }
  }
`;

const GoogleLogo = styled(FcGoogle)`
  width: 20px;
  height: 20px;
  margin: 0 16px;
`;

const NewRegisterandLoginpage = (props) => {
  const [user, Setuser] = useState({
    email: '',
    password: '',
  });
  const [credential, setcredential] = useState({
    signemail: '',
    signpassword: '',
    confirmpassword: '',
    firstName: '',
    LastName: '',
    phonenumber: '',
    address: '',
  });

  const { email, password } = user;
  const {
    signemail,
    signpassword,
    confirmpassword,
    firstName,
    LastName,
    phonenumber,
    address,
  } = credential;
  const { googlelogin, User, emailSignin, signupstart, error } = props;
  const [Errorhandle, setError] = useState(null);
  const history = useHistory();
  console.log(history)
  const handlesubmit = (e) => {
    e.preventDefault();
    emailSignin({
      email,
      password,
    });
  };

  useEffect(() => {
    if(error?.code){
      setError(error?.code)
    }else{
      return;
    }
  }, [error]);

  const handlechange = (e) => {
    const { name, value } = e.target;
    Setuser({ ...user, [name]: value });
  };
  const handlechange2 = (e) => {
    const { name, value } = e.target;
    setcredential({ ...credential, [name]: value });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();

    if (signpassword !== confirmpassword) {
      alert('password does not matched. Try again');
      return;
    }
    signupstart({
      displayName: LastName + firstName,
      email: signemail,
      password: signpassword,
      address,
      phonenumber,
    });
  };
  useEffect(() => {
    if (User) {
      history.push('/');
    }
  }, [history, User]);
  return (
    <Wrapper>
      <div className="loginheaderimg" />
      <div className="Container">
        <div className="left">
          <h4 className="Header">SIGN IN</h4>
          <div className="divider" />
          <span className="description">
            온룸을 찾아주셔서 감사합니다. 오늘도 쉽게 방을 찾자! Onroom!

          </span>
          <button onClick={googlelogin} className="googlelogin">
            <GoogleLogo />
            Continue With Google Sign in
          </button>
          <div className="buttondivider">
            <div className="divederline" />
            <span className="name">OR</span>
            <div className="divederline" />
          </div>
          <form onSubmit={handlesubmit} className="Signin">
            <input
              type="Email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handlechange}
              className="email"
            />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="password"
              onChange={handlechange}
              className="password"
            />
            <span className="passwordwrong">
              {Errorhandle === 'auth/wrong-password' && '비밀번호가 일치하지 않습니다.'}
              {Errorhandle === 'auth/user-not-found' && '회원 정보가 없는 계정입니다.'}
            </span>
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
            OnRoom에 가입해주셔서 감사합니다. 최대 서비스를 드리기위해 항상 노력하겠습니다.
           오늘도 좋은방을 구하세요 :)
          </span>
          <form onSubmit={handleSubmit2} className="Signin">
            <input
              required
              onChange={handlechange2}
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              placeholder="FirstName"
              className="email"
            />
            <input
              required
              onChange={handlechange2}
              type="text"
              name="LastName"
              id="LastName"
              value={LastName}
              placeholder="LastName"
              className="password"
            />
            <input
              required
              type="Email"
              name="signemail"
              id="signemail"
              value={signemail}
              onChange={handlechange2}
              placeholder="Email"
              className="password"
            />
            <input
              required
              onChange={handlechange2}
              type="number"
              name="phonenumber"
              id="phonenumber"
              value={phonenumber}
              placeholder="Phone"
              className="password"
            />
            <input
              minLength={8}
              required
              onChange={handlechange2}
              type="password"
              name="signpassword"
              value={signpassword}
              placeholder="Password"
              className="password"
            />
            <input
              minLength={8}
              required
              type="password"
              value={confirmpassword}
              name="confirmpassword"
              id="confirmpassword"
              onChange={handlechange2}
              placeholder="Confirm Password"
              className="password"
            />
            <span className="description">
              자세한 정보를 입력해주세요. 잘못된 정보를 표기할 경우 회원님의 권한이 제한 될수 있습니다.
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

const maptoprops = createStructuredSelector({
  User: selectCurrentUser,
  error: Selecterror,
});
const maptodispatch = (dispatch) => ({
  googlelogin: () => dispatch(googleSigninStart()),
  emailSignin: (user) => dispatch(emailSigninStart(user)),
  signupstart: (credential) => dispatch(signUpStart(credential)),
});

export default connect(maptoprops, maptodispatch)(NewRegisterandLoginpage);
