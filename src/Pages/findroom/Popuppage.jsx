import React from "react";
import styled from 'styled-components'
import { CommonStyles } from "../../staticFiles/CommonStyles";
import {ImCancelCircle} from 'react-icons/im'

const MODAL_STYLES = styled.div `
  position: fixed;
  width: 750px;
  height: 680px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #FFF;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;

  .closebtn{
    position: absolute;
    right: 15px;
    top:15px;
    color: ${CommonStyles.color.Primary};
    background-color: transparent;
    border: none;
    align-items: center;
    font-size: 2.0rem;
    font-weight: ${CommonStyles.bold.LittleBold};
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    border-radius: 16px;
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
color: ${CommonStyles.color.Primary};
  width: 100%;
  text-align:center;
  font-size: 25px;
  font-weight: ${CommonStyles.bold.ExtraBold};
`;



export default function Popuppage({ open, children, onClose }) {
  if (!open) return null;

  return (
    <>
      <OVERLAY_STYLES />
      <MODAL_STYLES>
        <TITLE>필터</TITLE>
        <button className="closebtn" onClick={onClose}>
          <ImCancelCircle/>
        </button>
        {children}
      </MODAL_STYLES>
    </>
  );
}
