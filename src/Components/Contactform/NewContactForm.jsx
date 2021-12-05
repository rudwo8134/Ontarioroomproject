import React from 'react'
import styled from 'styled-components'
import { CommonStyles } from '../../staticFiles/CommonStyles';

const Wrapper = styled.div`
  height: 80vh;
  width: 40vw;
  margin: 0 auto;
  margin-top: 80px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 78px;
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
      }
      .textarea {
        width: 430px;
        height: 240px;
      }
      select {
        width: 430px;
        height: 30px;
      }
      label {
        font-size: 16px;
        width: 100px;
        margin-right: 141px;
        color: ${CommonStyles.color.Darkbold4};
      }
    }
  }
`;

const NewContactForm = () => {
  return (
    <Wrapper>
      <h3 className="header">Contact Us</h3>
      <div className="divder" />
      <div className="description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
        distinctio, perferendis sapiente maiores, quaerat id laboru
      </div>

      <form action="">
        <div className="formcontainer">
          <label htmlFor="">Name*</label>
          <input type="text" />
        </div>
        <div className="formcontainer">
          {' '}
          <label htmlFor="">Email*</label>
          <input type="text"  />
        </div>
        <div className="formcontainer">
          {' '}
          <label htmlFor="">Inquiry Type*</label>
          <select>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select>
        </div>
        <div className="formcontainer">
          {' '}
          <label htmlFor="">Comments</label>
          <textarea name="" id="" className="textarea" cols="60" rows="20"></textarea>
        </div>

        <button className="Submitbutton">Submit</button>
      </form>
    </Wrapper>
  );
}

export default NewContactForm
