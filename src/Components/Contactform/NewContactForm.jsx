import React from 'react';
import styled from 'styled-components';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import LoginHeader from '../../assets/contactusheader.png';
const HeaderWrap = styled.div`
  margin-top: 80px;
  height: 30vh;
  width: 100vw;
  background-image: url(${LoginHeader});
  background-repeat: no-repeat;
  background-clip: border-box;
  background-position-y: 53%;
  background-position-x: 0%;
  background-size: 100vw;
  @media screen and (max-width: 476px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  width: 40vw;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 476px) {
    width: 100vw;
    padding: 1rem;
  }

  .header {
    font-size: ${CommonStyles.fontSize.Large};
    color: ${CommonStyles.color.Primary};
    text-transform: uppercase;
    font-weight: ${CommonStyles.bold.LittleBold};
    margin-bottom: 14px;
  }
  .divder {
    width: 190px;
    height: 2px;
    background-color: ${CommonStyles.color.Darkbold2};
    margin-bottom: 14px;
  }
  .description {
    width: 600px;
    font-size: 14px;
    color: ${CommonStyles.color.Darkbold3};
    @media screen and (max-width: 476px) {
      width: 80vw;
    }
    @media screen and (max-width: 375px) {
      width: 90vw;
    }
    @media screen and (max-width: 320px) {
      width: 90vw;
      font-size: 12px;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 78px;
    @media screen and (max-width: 476px) {
      margin-top: 3rem;
    }
    .Submitbutton {
      width: 100px;
      height: 40px;
      background-color: ${CommonStyles.color.Primary};
      color: ${CommonStyles.color.White};
      border: none;
      border-radius: 3px;
      align-self: flex-end;
    }
    .formcontainer {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      margin-bottom: 31px;
      input {
        width: 430px;
        height: 30px;
        padding: 3px 15px;
        @media screen and (max-width: 476px) {
          width: 50vw;
        }
      }
      .textarea {
        width: 430px;
        height: 240px;
        resize: none;
        @media screen and (max-width: 476px) {
          width: 65vw;
        }
      }
      select {
        width: 430px;
        height: 30px;
        @media screen and (max-width: 476px) {
          width: 65vw;
        }
      }
      label {
        font-size: 16px;
        width: 100px;
        margin-right: 141px;
        color: ${CommonStyles.color.Darkbold4};
        @media screen and (max-width: 476px) {
          width: 20vw;
          margin-right: 1rem;
        }
      }
    }
  }
`;

const NewContactForm = () => {
  return (
    <>
      <HeaderWrap />

      <Wrapper>
        <div className="loginheaderimg" />
        <h3 className="header">Contact Us</h3>
        <div className="divder" />
        <div className="description">
          ????????? ???????????????, Feedback??? ???????????? ?????? ???????????????!
          <br />
          ?????? ???????????? ???????????? ?????????????????????.
        </div>

        <form action="https://formspree.io/f/xwkypqzq" method="POST">
          <div className="formcontainer">
            <label htmlFor="name">??????</label>
            <input required id="name" name="name" type="text" />
          </div>
          <div className="formcontainer">
            {' '}
            <label htmlFor="email">?????????</label>
            <input required id="email" type="email" name="email" />
          </div>
          <div className="formcontainer">
            {' '}
            <label htmlFor="????????????">????????????</label>
            <select required name="????????????">
              <option value="2">?????? ??????</option>
              <option value="1">??????????????????</option>
              <option value="3">????????? ??????</option>
              <option value="4">??????</option>
            </select>
          </div>
          <div className="formcontainer">
            {' '}
            <label htmlFor="??????">??????</label>
            <textarea
              required
              name="??????"
              id="??????"
              className="textarea"
              cols="60"
              rows="20"
            ></textarea>
          </div>
          <button type="submit" className="Submitbutton">
            ?????????
          </button>
        </form>
      </Wrapper>
    </>
  );
};

export default NewContactForm;
