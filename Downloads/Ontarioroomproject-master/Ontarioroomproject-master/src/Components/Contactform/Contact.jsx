import React from 'react'
import styled from 'styled-components'
import { Innerlayout } from '../../styles/layout'
import Primarybutton from '../util/Primarybutton';

const Contact = () => {
  return (
    <Innerlayout>
      <Contactstyle>
        <div className="title">
          <span className="subtitle">Get Started</span>
          <h2>Get in Touch with Us</h2>
        </div>
        <form action="" className="contact">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="yourmessage"
            placeholder="Your Message"
          ></textarea>
          <div className="container">
            <input type="text" className="email" placeholder="Your Email" />
            <Primarybutton name="send" style={{width:"174px", height:"60px"}} />
          </div>
        </form>
        <div className="address">
          <div className="card">
            <h1 className="address">Toronto, ON</h1>
            <h2 className="add">
             19 Western Battery Road, Toronto, ON, M6K 0E8
            </h2>
          </div>
        </div>
      </Contactstyle>
    </Innerlayout>
  );
}

const Contactstyle = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    .subtitle {
      font-weight: bold;
      font-size: 14px;
      line-height: 26px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: rgba(21, 20, 57, 0.4);
      mix-blend-mode: normal;
    }
    h2 {
      font-weight: bold;
      font-size: 42px;
      line-height: 52px;
      /* identical to box height, or 124% */

      text-align: center;
      letter-spacing: -0.4px;

      /* Colors / Heading */

      color: #1e0e62;
    }
  }
  .contact {
    textarea {
      width: 570px;
      height: 170px;
      background: #ffffff;
      mix-blend-mode: normal;
      padding: 1rem;
      border: 2px solid #ebeaed;
      box-sizing: border-box;
      border-radius: 10px;
      margin-bottom: 20px;
      ::placeholder {
        font-weight: normal;
        font-size: 18px;
        line-height: 26px;
        color: rgba(21, 20, 57, 0.4);
        border-radius: 100px;
      }
    }
    .container {
      .email {
        mix-blend-mode: normal;
        width: 380px;
        height: 60px;
        border: 2px solid #ebeaed;
        box-sizing: border-box;
        border-radius: 100px;
        padding: 1rem;
        margin-right: 32px;
        ::placeholder {
          font-size: 16px;
          line-height: 26px;
          display: flex;
          align-items: center;
          color: rgba(21, 20, 57, 0.4);

          border-radius: 100px;
        }
      }
    }
  }
  .address {
    display: flex;
    justify-content: center;
    align-items: center;
    .card {
      margin-top: 88px;
      .address {
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 26px;
        /* identical to box height, or 186% */

        text-align: center;
        letter-spacing: 2px;
        text-transform: uppercase;

        /* Colors / Heading */

        color: #1e0e62;
      }
      .add {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        /* or 162% */

        text-align: center;

        /* Colors / Text */

        color: rgba(21, 20, 57, 0.4);

        mix-blend-mode: normal;
      }
    }
  }
`;

export default Contact
