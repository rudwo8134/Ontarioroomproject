import React from "react";
import styled from 'styled-components'
import { CommonStyles } from "../../staticFiles/CommonStyles";


const MODAL_STYLES = styled.div `
  position: fixed;
  width: 750px;
  height: 680px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #FFF;
  padding: 50px;
  z-index: 1000;

  .closebtn{
    background-color: ${CommonStyles.color.Primary};
    color: ${CommonStyles.color.White};
    height: 40px;
    width: 80px;
    border: none;
    align-items: center;
    font-size: 13.75px;
    font-weight: ${CommonStyles.bold.LittleBold};
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    border-radius: 16px;
    :hover {
      background-color: ${CommonStyles.color.PrimaryLight2};
  }
`;


const OVERLAY_STYLES = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .7);
  z-index: 1000;
`;


const TITLE = styled.span`
    font-size: 25px;
    margin-left: 190px;
    font-weight: ${CommonStyles.bold.ExtraBold}
`;



export default function Popuppage({ open, children, onClose }) {
  if (!open) return null;

  return (
    <>
      <OVERLAY_STYLES />
      <MODAL_STYLES>
        <button className="closebtn" onClick={onClose}>닫기</button>
        <TITLE>필터 추가하기</TITLE> 
        {children}
      </MODAL_STYLES>
    </>
  );
}
