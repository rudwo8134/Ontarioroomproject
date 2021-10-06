import React from 'react'
import styled from 'styled-components';
import style from '../../static/staticcss';
import { Link } from 'react-router-dom';
import { Footerdata,Navdata } from '../../static/staticdata';
import { Innerlayout } from '../../styles/layout';
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaTwitterSquare,
} from 'react-icons/fa';

const linkdata = [
  {
    link: '/',
    name: '방구하기',
  },
  {
    link: '/',
    name: '방올리기',
  },
  {
    link: '/',
    name: '고객센터',
  },
  {
    link: '/',
    name: '로그인',
  },
  {
    link: '/',
    name: '회원가입',
  },
];

const Footer = () => {
  return (
    <Innerlayout>
      <Footerstyle>
        <div className="container">
          <div className="top">
            <div className="left">
              <h3 className="logo">ONROOM</h3>
              <span className="copyright">
                © {new Date().getFullYear()} Onroom. All rights reserved.
              </span>
            </div>
            <ul className="right">
              {linkdata.map((data, index) => (
                <li key={index}>
                  <Link to={data.link}>
                    <span className="link">{data.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="divider"></div>
          <div className="bottom">
            <span className="text">
              Startup Framework contains components and complex blocks which can
              easily be integrated into almost any design.
            </span>
            <div className="icon">
              <FaTwitterSquare />
              <FaFacebookSquare />
              <FaGooglePlusSquare />
            </div>
          </div>
        </div>
      </Footerstyle>
    </Innerlayout>
  );
}

const Footerstyle = styled.footer`
  height: 260px;
  .container {
    display: flex;
    flex-direction: column;
    margin: 2rem;
    .bottom {
      display: flex;
      justify-content: space-between;
      margin-top: 41px;
      .text {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        /* identical to box height, or 162% */

        /* Colors / Text */

        color: rgba(21, 20, 57, 0.4);

        mix-blend-mode: normal;
      }
      .icon {
        display: flex;

        svg {
          font-size: 18px;
          line-height: 18px;
          margin-right: 37px;
          color: #000;
        }
      }
    }
    .divider {
      mix-blend-mode: normal;
      opacity: 0.6;

      border: 2px solid #ebeaed;
    }
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .right {
        display: flex;
        align-items: center;
        li {
          margin-right: 40px;
          list-style: none;
          .link {
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 26px;
            /* identical to box height, or 162% */

            /* Colors / Heading */

            color: #000;
          }
        }
      }
      .left {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo {
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 31px;
          margin-right: 92px;
          /* identical to box height */

          text-align: center;
          letter-spacing: -0.292683px;

          /* Colors / Heading */

          color: #000;
        }
        .copyright {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 26px;
          /* identical to box height, or 162% */

          /* Colors / Heading */

          color: #000;
        }
      }
    }
  }
`;

export default Footer
