import React from 'react'
import styled from 'styled-components'
import Loginimage from '../assets/login.jpg'
import Logo from '../assets/Logoremovebg.png'
import LoginButton from '../Components/util/Loginbutton';
import style from '../static/staticcss'
import { connect } from 'react-redux';
import { googleSigninStart } from '../Redux/Users/user.action';
import { useHistory } from 'react-router';
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser } from '../Redux/Users/user.selector';

const Wrapper = styled.div`
  
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
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
        margin-bottom: 3rem;
      }
    }
    .media{
      margin-bottom: 2rem;
      font-size: ${style.fontSize.small};
      color: ${style.fontColor.blackLight}
    }
  }
`;


const Login = (props) => {
  const {googlelogin, User} = props
  const history= useHistory()
  if(User){
    history.push('/')
  }
  return (
    <Wrapper>
      <LoginContainer>
        <div className="leftpage">
          <img src={Loginimage} alt="background" className="background"></img>
          <img src={Logo} alt="logo" className="logo" />
          <h1 className="header">
            Welecome to <span>ONROOM</span>
          </h1>
        </div>
        <div className="rightpage">
          <h3 className="mainlogin">Sign In</h3>
          <form action="submit">
            <label htmlFor="">Email Address</label>
            <input type="Email" />
            <label htmlFor="">Password</label>
            <input type="password" />
            <LoginButton big text="CONTINUE" style={{ marginBottom: '2rem' }} />
          </form>
          <span className="media"> or connect with Medias</span>
          <LoginButton
            type="true"
            big
            text="Sigin in with Google"
            onClick={googlelogin}
          />
        </div>
      </LoginContainer>
    </Wrapper>
  );
}


const maptoprops = createStructuredSelector({
  User: selectCurrentUser
})

const maptodispatch = dispatch =>({
  googlelogin: () => dispatch(googleSigninStart())
})

export default connect(maptoprops, maptodispatch)(Login); 
