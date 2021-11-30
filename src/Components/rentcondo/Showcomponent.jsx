import React,{useState} from 'react'
import styled from 'styled-components'
import defaultimage from '../../assets/main.png'
import { connect } from 'react-redux'
import { selectitems } from '../../Redux/Rentcondo/rentcondo.selector'
import { selectCurrentUser } from '../../Redux/Users/user.selector'
import {createStructuredSelector} from 'reselect'

import style from '../../static/staticcss.js'

import { IoMdArrowRoundBack } from 'react-icons/io';
import {FiMapPin} from 'react-icons/fi'
import { GiTakeMyMoney, GiReceiveMoney } from 'react-icons/gi';
import {FiInfo} from 'react-icons/fi'
import { BsPeopleFill, BsHouseDoor, BsHeartFill } from 'react-icons/bs';
import {FaParking} from 'react-icons/fa'
import { MdPets, MdSmokingRooms,MdLocalLaundryService } from 'react-icons/md';
import {IoIosBed} from 'react-icons/io'
import { AiOutlineWifi, AiFillPhone, AiOutlineMail, AiOutlineArrowRight } from 'react-icons/ai';
import {CgSmartHomeCooker} from 'react-icons/cg'
import { BiFridge, BiDoorOpen } from 'react-icons/bi';
import { RiTempColdLine, RiMovieLine,RiFridgeFill } from 'react-icons/ri';
import {IoMdContact} from 'react-icons/io'
import {HiOutlineIdentification} from 'react-icons/hi'
import { BsFilter } from 'react-icons/bs';

import Showitem from './Showitem'



const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  background: white;
  padding: 2rem;
  .descriptioncontainer {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    .description {
      width: 80%;
      height: 90px;
      white-space: wrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-right: 27px;
      font-size: 18px;
      line-height: 30px;
      /* or 167% */
      display: flex;
      color: rgba(29, 24, 13, 0.9);
    }
    a {
      background: #fff;
      border: 1px solid #df1b52;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      width: 137px;
      height: 60px;
      font-weight: normal;
      font-size: 20px;
      line-height: 26px;
      /* identical to box height, or 130% */

      display: flex;
      align-items: center;

      color: #df1b52;
      justify-content: center;

      border-radius: 100px;
    }
  }
  .pricecontainer {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 16px;
    justify-content: flex-start;
    .price {
      font-weight: bold;
      font-size: 24px;
      line-height: 26px;
      /* identical to box height, or 108% */

      display: flex;
      align-items: center;

      color: #df1b52;

      border-radius: 100px;
      margin-right: 10px;
    }
    .roomtype {
      font-weight: normal;
      font-size: 24px;
      line-height: 26px;
      /* identical to box height, or 108% */

      display: flex;
      align-items: center;

      color: #1d180d;

      border-radius: 100px;
    }
    span {
      font-weight: normal;
      font-size: 24px;
      line-height: 26px;
      /* identical to box height, or 108% */

      display: flex;
      align-items: center;

      color: #1d180d;

      border-radius: 100px;
      margin: 0 1rem;
    }
    .rocation {
      font-weight: normal;
      font-size: 24px;
      line-height: 26px;
      /* identical to box height, or 108% */

      display: flex;
      align-items: center;

      color: #1d180d;

      border-radius: 100px;
    }
  }
  .imagecontainer {
    width: 800px;
    height: 400px;
    display: flex;
    margin: 0 auto;
    position: relative;
    justify-content: center;
    img {
      width: 900px;
      height: 400px;
    }
  }
  .liner {
    width: 100%;
    height: 2px;
    border: 1px solid #c4c4c4;
    margin: 1.5rem 0;
  }
  .searchresult {
    .quearydata {
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 26px;
      /* identical to box height, or 108% */

      display: flex;
      align-items: center;

      color: #1d180d;

      border-radius: 100px;
      margin-bottom: 7px;
    }
    .dataresult {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 26px;
      /* identical to box height, or 144% */

      display: flex;
      align-items: center;

      color: rgba(35, 31, 32, 0.61);

      border-radius: 100px;
    }
  }
  .filtercontainer {
    width: 100%;
    .set {
      display: flex;
      justify-content: space-between;
      align-items: center;
      svg {
        font-size: 2rem;
        font-weight: bold;
        color: #000;
      }
      select {
        width: 150px;
        height: 34px;
        background: rgba(255, 255, 255, 0.6);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        padding: 1.2rem;
        border: none;
        option {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          letter-spacing: 0.5rem;
          line-height: 26px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: rgba(29, 24, 13, 0.8);
        }
      }
      input {
        width: 150px;
        height: 34px;
        background: rgba(255, 255, 255, 0.6);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        padding: 1.2rem;
        border: none;
        ::placeholder {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          letter-spacing: 0.5rem;
          line-height: 26px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: rgba(29, 24, 13, 0.8);
        }
      }
    }
  }
`;


const Showcomponent = (props) => {
  const { id, rooms, user } = props;
  const {minPrice, setminprice} = useState(null);

  let data = rooms 

  const handlemin = (e) =>{
    console.log(e)
  }
  console.log(rooms)
  if(minPrice){
    data = rooms.filter((data)=>{
      return data.monthlyfee > minPrice
    })
  }
  return (
    <Wrapper>
      <div className="filtercontainer">
        <form action="" className="set">
          <input
            onChange={handlemin()}
            type="number"
            placeholder="최소금액"
            className="minprice"
          />
          <input type="number" placeholder="최대금액" className="maxprice" />
          <select name="distance" id="distance">
            <option value="3">3km</option>
            <option value="5">5km</option>
            <option value="10">10km</option>
            <option value="15">15km</option>
            <option value="25">25km</option>
            <option value="50">50km</option>
            <option value="100">100km</option>
          </select>
          <select name="date" id="date">
            <option value="3">날짜순</option>
            <option value="5">가격순(비싼)</option>
            <option value="5">가격순(저렴한)</option>
            <option value="5">거리순(가까운)</option>
          </select>
          <BsFilter />
        </form>
      </div>
      <div className="liner"></div>
      <div className="searchresult">
        <div className="quearydata">Toronto, ON Rooms For Rent</div>
        <div className="dataresult">Showing 1 - 28 of 28 results</div>
      </div>
      <div className="liner"></div>
      {data && data.map((data, index) => {
        return <Showitem data={data} key={index} />;
      })}
    </Wrapper>
  );
}

const maptoprops = createStructuredSelector({
  rooms: selectitems,
  user: selectCurrentUser
})

export default connect(maptoprops)(Showcomponent)
