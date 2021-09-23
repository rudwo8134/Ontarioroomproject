import React,{useCallback} from 'react'
import { Navdata } from '../../static/staticdata'
import styled from 'styled-components'
import { Link,useHistory } from 'react-router-dom';
import Logo from '../../assets/Logo.png'
import style from '../../static/staticcss';
import ButtonComponents from '../util/button';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser } from '../../Redux/Users/user.selector';
import { signOutStart } from '../../Redux/Users/user.action';


const Wrapper = styled.div`
  width: 100vw;
  background-color: white;
  z-index: 99;
  position: sticky;
  top: 0;
`;
const NavWrapper = styled.nav`
  max-width: 1300px;
  padding: 3rem 0rem;
  height: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Linkwrapper = styled(Link)`
  text-decoration: none;
  color: ${style.fontColor.blackDark};
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${style.fontColor.black};
  }
`;

const NavLinkWrapper = styled.div`
  ul {
    display: flex;
    align-items: center;
    li {
      list-style: none;
      margin-left: 2rem;
      font-size: ${style.fontSize.NavMain};
      font-weight: bold;
      transition: all 0.3s ease-in-out;
      :hover {
        transform: translateY(-0.5rem);
        span {
          color: ${style.fontColor.primaryLight};
        }
      }
      span {
        font-size: ${style.fontSize.NavSub};
        font-weight: 400;
      }
    }
  }
`;

const Nav = (props) => {
  const { User, signout } = props
  const history = useHistory();
  const handleclicklogin = useCallback(() => {
    history.push('/login');
  }, [history]);
  const handleclickregister = useCallback(() => {
    history.push('/register');
  }, [history]);
  return (
    <Wrapper>
      <NavWrapper>
        <Link to="/">
          <img src={Logo} alt="MainLogo for Onroom" />
        </Link>
        <NavLinkWrapper>
          <ul>
            {Navdata.map((data, index) => {
              const { name, subtitle } = data;
              return (
                <li key={index}>
                  <Linkwrapper to={data.Link}>
                    {name} <br /> <span>{subtitle}</span>
                  </Linkwrapper>
                </li>
              );
            })}
          </ul>
        </NavLinkWrapper>
        {User ? (
          <ButtonComponents text="Logout" onClick={signout} />
        ) : (
          <>
            <ButtonComponents text="Login" onClick={handleclicklogin} />
            <ButtonComponents
              text="Register"
              black
              onClick={handleclickregister}
            />
          </>
        )}
      </NavWrapper>
    </Wrapper>
  );
};

const maptoprops = createStructuredSelector({
  User:selectCurrentUser
})

const dispatchtoprops = (dispatch) => ({
  signout: () => dispatch(signOutStart()),
});

export default connect(maptoprops, dispatchtoprops)(Nav);
