import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Innerlayout } from '../../styles/layout';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from 'react-icons/fa';
import Logo from '../../assets/nav/LOGO.png';

const linkdata = [
  {
    link: '/rentcondo',
    name: '방구하기',
  },
  {
    link: '/rentcondopost',
    name: '방올리기',
  },
  {
    link: '/ContactUs',
    name: '고객센터',
  },
];

const Footer = () => {
  return (
    <Innerlayout>
      <Footerstyle>
        <div className="container">
          <div className="top">
            <div className="left">
              <img src={Logo} alt="logo" />
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
              <a href="https://twitter.com/Onroom2" target="blank">
                <FaTwitterSquare />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100076598774528"
                target="blank"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://www.instagram.com/onroom2022/?hl=en"
                target="blank"
              >
                <FaInstagramSquare />
              </a>
            </div>
          </div>
        </div>
      </Footerstyle>
    </Innerlayout>
  );
};

const Footerstyle = styled.footer`
  height: 20vh;
  @media screen and (max-width: 476px) {
    height: 50vh;
  }
  @media screen and (max-width: 375px) {
    height: 50vh;
  }
  .container {
    display: flex;
    flex-direction: column;
    margin: 2rem;

    .bottom {
      display: flex;
      justify-content: space-between;
      margin-top: 41px;
      @media screen and (max-width: 476px) {
        flex-direction: column;
      }
      @media screen and (max-width: 375px) {
        flex-direction: column;
      }
      .text {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        /* identical to box height, or 162% */

        /* Colors / Text */

        color: rgba(21, 20, 57, 0.4);

        mix-blend-mode: normal;
        @media screen and (max-width: 476px) {
          font-size: 0.8rem;
          margin-bottom: 1rem;
          text-align: center;
        }
        @media screen and (max-width: 375px) {
          font-size: 0.8rem;
          margin-bottom: 1rem;
          text-align: center;
        }
      }
      .icon {
        display: flex;
        @media screen and (max-width: 476px) {
          align-items: center;
          justify-content: center;
          width: 300px;
          margin: 0 auto;
        }
        @media screen and (max-width: 375px) {
          align-items: center;
          justify-content: center;
          width: 300px;
        }
        a {
          @media screen and (max-width: 476px) {
            text-align: 'center';
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }

        svg {
          font-size: 18px;
          line-height: 18px;
          margin-right: 37px;
          color: #000;
          @media screen and (max-width: 476px) {
           margin: 0 auto;
           margin-right: 16px;
          }
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
      @media screen and (max-width: 476px) {
        flex-direction: column;
      }
      @media screen and (max-width: 375px) {
        flex-direction: column;
      }
      .right {
        display: flex;
        align-items: center;
        @media screen and (max-width: 476px) {
          display: none;
        }
        @media screen and (max-width: 375px) {
          display: none;
        }
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
        @media screen and (max-width: 476px) {
          flex-direction: column;
          width: 100%;
        }
        @media screen and (max-width: 375px) {
          flex-direction: column;
          width: 100%;
        }
        img {
          width: 180px;
          height: 40px;
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 31px;
          margin-right: 92px;
          /* identical to box height */
          object-fit: contain;

          text-align: center;
          letter-spacing: -0.292683px;

          /* Colors / Heading */

          color: #000;
          @media screen and (max-width: 476px) {
            width: 150px;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 1rem;
          }
          @media screen and (max-width: 375px) {
            width: 150px;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 1rem;
          }
        }
        .copyright {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 26px;
          /* identical to box height, or 162% */

          /* Colors / Heading */

          color: #000;
          @media screen and (max-width: 476px) {
            font-size: 0.7rem;
            margin-bottom: 1rem;
          }
          @media screen and (max-width: 375px) {
            font-size: 0.7rem;
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
`;

export default Footer;
