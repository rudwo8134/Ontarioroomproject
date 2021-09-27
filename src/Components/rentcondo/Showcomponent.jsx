import React from 'react'
import styled from 'styled-components'
import defaultimage from '../../assets/main.png'
import { connect } from 'react-redux'
import { selectitems } from '../../Redux/Rentcondo/rentcondo.selector'
import { selectCurrentUser } from '../../Redux/Users/user.selector'
import {createStructuredSelector} from 'reselect'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from 'react-icons/io';
import style from '../../static/staticcss.js'

const Wrapper = styled.div`
  width: 100%;
  background: white;

  .imgwrapper {
    position: relative;
    button {
      position: absolute;
      top: 5px;
      left: 5px;
      width: 50px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      border: none;
      color: ${style.fontColor.White};
      transition: 0.3 ease-in-out all;
      :hover {
        svg {
          color: ${style.fontColor.blackDark};
        }
      }
    }
    img {
      width: 100%;
    }
  }
  .buttonwrapper {
    width: 100%;
    height: 3rem;
    background: ${style.backgroundColor.primaryLight};
    margin-top: -0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    :hover {
      background: ${style.backgroundColor.secondary};
      color: black;
    }
  }
  .titlecontainer {
    width: 100%;
    padding: 12px;
    .title {
      margin: 0;
      font-size: ${style.fontSize.detail_title};
      font-weight: bold;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 1rem;
      white-space: nowrap;
      resize: horizontal;
    }
  }
`;
const Goback = styled(IoMdArrowRoundBack)`
  transition: 0.3 ease-in-out all;
  font-size: 2rem;
`;
const DetailLink = styled(Link)`
  width: 100%;
  text-align:center;
  font-size: ${style.fontSize.detail_detailbutton};
  letter-spacing: 0.2rem;
  font-weight: 500;
  color: ${style.fontColor.WhiteLight};
`;

const Showcomponent = (props) => {
  const { id, rooms, user } = props;
  const data =
    rooms &&
    rooms.find((data) =>{
      return id === data.id
    });
  if(!data){
    return <div>Loading....</div>
  }
  return (
    <Wrapper>
      <div className="imgwrapper">
        <img src={defaultimage} alt="img" />
        <button>
          <Goback />
        </button>
      </div>
      <div className="buttonwrapper">
        <DetailLink>Detail</DetailLink>
      </div>
      <div className="titlecontainer">
        <h1 className="title">{data.posttitle}</h1>
        <span className="description">{data.posttitle}</span>
      </div>

      <div>
        <h2>location info</h2>
        <h4>location: {data.address.Formattedaddress}</h4>
        <h4>price:{data.monthlyfee}</h4>
        <h4>deposit:{data.deposit}</h4>
        <h4>parking:{data.parking}</h4>
        <h4>room type: {data.roomtype}</h4>
        <h4>sqf: {data.sqf}</h4>
      </div>
      {user ? (
        <div>
          <h2>Contact info</h2>
          <h4>username: {data.userinfo.postname}</h4>
          <h4>phone: {data.userinfo.phonenumber}</h4>
        </div>
      ) : (
        <div>please login to see Contact Info</div>
      )}
    </Wrapper>
  );
}

const maptoprops = createStructuredSelector({
  rooms: selectitems,
  user: selectCurrentUser
})

export default connect(maptoprops)(Showcomponent)
