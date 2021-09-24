import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Loginimage from '../../assets/register.jpg'
import Logo from '../../assets/Logoremovebg.png';
import LoginButton from '../util/Loginbutton';
import style from '../../static/staticcss';
import { connect } from 'react-redux';
import { signUpStart } from '../../Redux/Users/user.action';
import { useHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../Redux/Users/user.selector';

const Wrapper = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginContainer = styled.div`
  width: 1300px;
  height: 70vh;
  background-color: white;
  display: flex;
  border-radius: 13px;
  box-shadow: ${style.boxshaow.normal};
  .leftpage {
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    .background {
      width: 100%;
      height: 100%;
      filter: blur(4px);
      opacity: 0.8;
    }
    .logo {
      position: absolute;
      left: 3px;
      top: 3px;
      width: 150px;
    }
    .header {
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -30%);
      font-size: 3rem;
      color: ${style.fontColor.black};
      span {
        letter-spacing: 0.8rem;
        color: ${style.fontColor.primaryDark};
      }
    }
  }
  .rightpage {
    width: 100%;
    background-color: white;
    border-radius: 13px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    .mainlogin {
      font-size: 3rem;
      text-transform: capitalize;
      letter-spacing: 0.5rem;
      margin-top: 0;
    }
    form {
      display: flex;
      flex-direction: column;
      label {
        font-size: ${style.fontSize.small};
      }
      input {
        border: none;
        border-bottom: 2px solid black;
        width: 400px;
        font-size: 1.4rem;
        margin-bottom: 1.2rem;
        :focus{
          border-bottom: 3px solid blue;
        }
      }
    }
    .media {
      margin-bottom: 2rem;
      font-size: ${style.fontSize.small};
      color: ${style.fontColor.blackLight};
    }
  }
`;

const Registercomponent = (props) => {
  const [credential, setcredential] = useState({
    email: '',
    password: '',
    confirmpassword: '',
    displayName: '',
    phonenumber: '',
    address: '',
  });

  const { User, signupstart } = props;
  const history = useHistory();
   const {
     email,
     password,
     confirmpassword,
     displayName,
     phonenumber,
     address,
   } = credential;
  const handlechange = (e) =>{
    const {name,value} = e.target
    setcredential({...credential,[name]:value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
   
    if(password !== confirmpassword){
     alert("password does not matched. Try again")
      return
    }
    signupstart({
      displayName,
      email,
      password,
      address,
      phonenumber,
    });

  }

   useEffect(() => {
     if (User) {
       history.push('/');
     }
   }, [history, User]);
  return (
    <Wrapper>
      <LoginContainer>
        <div className="rightpage">
          <h3 className="mainlogin">Register</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
              required
              type="Email"
              name="email"
              id="email"
              value={email}
              onChange={handlechange}
            />
            <label htmlFor="password">Password</label>
            <input
              minLength={8}
              required
              onChange={handlechange}
              type="password"
              name="password"
              value={password}
              id="password"
            />
            <label htmlFor="confirmpassword">Confirmed Password</label>
            <input
              minLength={8}
              required
              type="password"
              value={confirmpassword}
              name="confirmpassword"
              id="confirmpassword"
              onChange={handlechange}
            />
            <label htmlFor="displayName">Name</label>
            <input
              required
              onChange={handlechange}
              type="text"
              name="displayName"
              id="displayName"
              value={displayName}
            />
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              required
              onChange={handlechange}
              type="number"
              name="phonenumber"
              id="phonenumber"
              value={phonenumber}
            />
            <label htmlFor="address">Address</label>
            <input
              required
              onChange={handlechange}
              type="text"
              name="address"
              id="address"
              value={address}
            />
            <LoginButton
              big
              text="Register"
              type="submit"
              style={{ marginTop: '2rem' }}
            />
          </form>
        </div>
        <div className="leftpage">
          <img src={Loginimage} alt="background" className="background"></img>
          <img src={Logo} alt="logo" className="logo" />
          <h1 className="header">
            Welecome to <span>ONROOM</span>
          </h1>
        </div>
      </LoginContainer>
    </Wrapper>
  );
};

const maptoprops = createStructuredSelector({
  User: selectCurrentUser,
});

const maptodispatch = (dispatch) => ({
  signupstart: (credential) => dispatch(signUpStart(credential)),
});

export default connect(maptoprops, maptodispatch)(Registercomponent);
