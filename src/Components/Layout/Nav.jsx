import React from 'react'
import { Navdata } from '../../static/staticdata'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png'
import style from '../../static/staticcss';

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

const Nav = () => {
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
                  <Linkwrapper href={data.Link}>
                      {name} <br /> <span>{subtitle}</span>
                  </Linkwrapper>
                </li>
              );
            })}
          </ul>
        </NavLinkWrapper>
      </NavWrapper>
    </Wrapper>
  );
}

export default Nav
