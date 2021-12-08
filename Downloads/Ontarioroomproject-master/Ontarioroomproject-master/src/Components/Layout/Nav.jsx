import React,{useCallback,useEffect,useState} from 'react'
import { Navdata } from '../../static/staticdata'
import styled from 'styled-components'
import { Link,useHistory } from 'react-router-dom';

import style from '../../static/staticcss';
import ButtonComponents from '../util/button';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser } from '../../Redux/Users/user.selector';
import { signOutStart } from '../../Redux/Users/user.action';
import { Innerlayout } from '../../styles/layout';
import Primarybutton from '../util/Primarybutton';
import Logo from '../../assets/nav/LOGO.png'


const Nav = (props) => {
  const [scroll,setscroll] = useState(false)
  const handlescroll = ()=>{
   const scroll = window.scrollY
   if(scroll > 10){
     setscroll(true)
      
   }
   else{
     setscroll(false)
   }
  }
  useEffect(()=>{
    window.addEventListener('scroll',handlescroll)
    return () => {
      window.removeEventListener('scroll',handlescroll)
    } 
  },[])



  const { User, signout } = props
  const history = useHistory();
  const handleclicklogin = useCallback(() => {
    history.push('/login');
  }, [history]);
  const handleclickregister = useCallback(() => {
    history.push('/register');
  }, [history]);
  return (
    <Wrapper scroll={scroll}>
      <Navstyle scroll={scroll}>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="mainlogo" className="logocomponent" />
          </Link>
        </div>
        <ul className="navlink">
          {Navdata.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link.Link}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
        <div className="logincontainer">
          <Link>Login</Link>
          <span>|</span>
          <Link>Sign Up</Link>
        </div>
      </Navstyle>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  width: 100vw;
  height: 100px;
  position: fixed;
  z-index: 100;
  top: 0;
  background: ${({ scroll }) => (scroll ? 'white' : 'transparent')};
  transition: all 0.5s ease-in-out;
`;

const Navstyle = styled.nav`
  margin: 0 auto;
  height: 100px;
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    .Onroommainlogo {
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 70px;
      text-align: center;
      letter-spacing: -1px;
      color: var(--text-Primary);
    }
  }
  .logincontainer {
    position: absolute;
    top:5px;
    right:0px;
    a {
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 26px;
      /* or 217% */

      text-align: center;
      letter-spacing: 2px;
      text-transform: uppercase;

      color: #df1b52;
    }
    span {
      margin:0 5px;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 26px;
      /* or 217% */

      text-align: center;
      letter-spacing: 2px;
      text-transform: uppercase;

      color: #df1b52;
    }
  }
  .navlink {
    display: flex;
    justify-content: space-between;
    width: 40%;
    margin-right: 100px;
    li {
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 26px;
      /* or 186% */

      text-align: center;
      letter-spacing: 2px;
      text-transform: uppercase;

      color: #000000;
      list-style: none;
      text-transform: uppercase;
      transition: all 0.3s ease-in-out;
      :hover {
        transform: translateY(-3px) scale(1.2);
        color: var(--text-Primary);
      }
    }
  }
  .sign {
    .linkstyle {
      font-family: DM Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: black;
      margin-right: 33px;
    }
  }
`;

const maptoprops = createStructuredSelector({
  User:selectCurrentUser
})

const dispatchtoprops = (dispatch) => ({
  signout: () => dispatch(signOutStart()),
});

export default connect(maptoprops, dispatchtoprops)(Nav);
