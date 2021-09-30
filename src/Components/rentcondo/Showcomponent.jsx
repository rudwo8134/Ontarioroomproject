import React from 'react'
import styled from 'styled-components'
import defaultimage from '../../assets/main.png'
import { connect } from 'react-redux'
import { selectitems } from '../../Redux/Rentcondo/rentcondo.selector'
import { selectCurrentUser } from '../../Redux/Users/user.selector'
import {createStructuredSelector} from 'reselect'
import { Link } from 'react-router-dom'
import style from '../../static/staticcss.js'

import { IoMdArrowRoundBack } from 'react-icons/io';
import {FiMapPin} from 'react-icons/fi'
import { GiTakeMyMoney, GiReceiveMoney } from 'react-icons/gi';
import {FiInfo} from 'react-icons/fi'
import { BsPeopleFill, BsHouseDoor } from 'react-icons/bs';
import {FaParking} from 'react-icons/fa'
import { MdPets, MdSmokingRooms,MdLocalLaundryService } from 'react-icons/md';
import {IoIosBed} from 'react-icons/io'
import { AiOutlineWifi, AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import {CgSmartHomeCooker} from 'react-icons/cg'
import { BiFridge, BiDoorOpen } from 'react-icons/bi';
import { RiTempColdLine, RiMovieLine,RiFridgeFill } from 'react-icons/ri';
import {IoMdContact} from 'react-icons/io'
import {HiOutlineIdentification} from 'react-icons/hi'


const Wrapper = styled.div`
  width: 100%;
  background: white;

  .imgwrapper {
    position: relative;
    button {
      z-index: 2;
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
      cursor: pointer;
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
  .locationinfomation {
    width: 100%;
    padding: 12px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 1rem;
    span {
      color: black;
      font-weight: 500;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.5rem;
        color: ${style.fontColor.blackLight};
      }
    }
    h4 {
      font-weight: 300;
    }
  }
  .priceinfomation {
    width: 100%;
    padding: 12px;
    display: flex;
    align-items: center;
    span {
      color: black;
      font-weight: 500;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.5rem;
        color: ${style.fontColor.blackLight};
      }
    }
    h4 {
      margin: 0;
      font-size: 1.5rem;
      margin-left: 1rem;
      font-weight: 300;
      padding: 0;
      b {
        letter-spacing: 0.25rem;
        font-size: 1.6rem;
        font-weight: 600;
        color: ${style.fontColor.secondaryDark};
      }
    }
  }
  .depositinfomation {
    width: 100%;
    padding: 12px;
    display: flex;
    align-items: center;
    span {
      color: black;
      font-weight: 500;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.5rem;
        color: ${style.fontColor.blackLight};
      }
    }
    h4 {
      margin: 0;
      font-size: 1.5rem;
      margin-left: 1rem;
      font-weight: 300;
      padding: 0;
      b {
        letter-spacing: 0.25rem;
        font-size: 1.6rem;
        font-weight: 600;
        color: ${style.fontColor.blackLight};
      }
    }
  }
  .spaceline {
    width: 100%;
    height: 1px;
    margin-top: 1.5rem;
    background: rgba(0, 0, 0, 0.1);
  }
  .infornmationcontainer {
    width: 100%;
    padding: 12px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .informationtitle {
      color: black;
      font-weight: 500;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.5rem;
        color: ${style.fontColor.blackLight};
      }
    }
    .detailed {
      width: 100%;
      margin: 0;
      padding: 12px;
      display: flex;
      align-items: center;
      flex-direction: row;
      span {
        color: black;
        font-weight: 500;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        width: 150px;
        svg {
          margin-right: 0.5rem;
          font-size: 1.2rem;
          color: ${style.fontColor.blackLight};
        }
      }
      h4 {
        font-size: 1.2rem;
        color: ${style.fontColor.blackLight};
        margin-left: 1rem;
        padding: 0;
        margin: 0;
        margin-left: 2rem;
        text-transform: capitalize;
      }
    }
  }
  .utilinfo {
    width: 100%;
    padding: 12px;
    display: flex;
    flex-direction: column;
    .utilinfomation {
      color: black;
      font-weight: 500;
      font-size: 1.5rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.5rem;
        color: ${style.fontColor.blackLight};
      }
    }
    .detailed {
      width: 100%;
      margin: 0;
      padding: 12px;
      display: flex;
      align-items: center;
      flex-direction: row;
      span {
        color: black;
        font-weight: 500;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        width: 150px;
        svg {
          margin-right: 0.5rem;
          font-size: 1.2rem;
          color: ${style.fontColor.blackLight};
        }
      }
      h4 {
        font-size: 1.2rem;
        color: ${style.fontColor.blackLight};
        margin-left: 1rem;
        padding: 0;
        margin: 0;
        margin-left: 2rem;
        text-transform: capitalize;
      }
    }
  }
  .contactinformation {
    width: 100%;
    padding: 12px;
    display: flex;
    flex-direction: column;
    h2 {
      display: flex;
      align-items: center;
      text-transform: capitalize;
      svg {
        margin-right: 0.5rem;
        font-size: 1.8rem;
        color: ${style.fontColor.blackLight};
        
      }
    }
   .detailed{
    display: flex;
    align-items: center;
    span{
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      font-weight: 500;
      width: 150px;
      svg{
        margin-right: 0.5rem;
      }
    }
    h4{
      font-weight: 400;
    }
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
        <img src={data.image[0]} alt="img" />
        <button>
          <Goback />
        </button>
      </div>
      <div className="buttonwrapper">
        <DetailLink to={`rentcondo/${data.id}`}>Detail</DetailLink>
      </div>
      <div className="titlecontainer">
        <h1 className="title">{data.posttitle}</h1>
        <span className="description">{data.posttitle}</span>
      </div>
      <div className="spaceline"></div>
      <div className="locationinfomation">
        <span className="location">
          <FiMapPin />
          Location
        </span>
        <h4>{data.address.Formattedaddress}</h4>
      </div>
      <div className="spaceline"></div>
      <div className="priceinfomation">
        <span>
          <GiTakeMyMoney />
          Monthly Fee
        </span>
        <h4>
          <b>{data.monthlyfee}$</b>/Monthly
        </h4>
      </div>
      <div className="depositinfomation">
        <span>
          <GiReceiveMoney />
          Deposit Fee
        </span>
        <h4>
          <b>{data.deposit}$</b>
        </h4>
      </div>

      <div className="spaceline"></div>

      <div className="infornmationcontainer">
        <span className="informationtitle">
          <FiInfo />
          Information
        </span>
        <div className="detailed">
          <span>
            <BsHouseDoor />
            Room type
          </span>
          <h4>{data.roomtype}</h4>
        </div>
        <div className="detailed">
          <span>
            <BsPeopleFill />
            Rommate
          </span>
          <h4>{data.howmanypeople}</h4>
        </div>
        <div className="detailed">
          <span>
            <FaParking />
            Parking
          </span>
          <h4>{data.parking}</h4>
        </div>
        <div className="detailed">
          <span>
            <MdPets />
            PET
          </span>
          <h4>{data.petavailable}</h4>
        </div>
        <div className="detailed">
          <span>
            <MdSmokingRooms />
            Smoking
          </span>
          <h4>{data.smoking}</h4>
        </div>
      </div>
      <div className="spaceline"></div>

      <div className="utilinfo">
        <span className="utilinfomation">
          <FiInfo />
          More Infomation
        </span>

        <div className="detailed">
          <span>
            <IoIosBed />
            Funished
          </span>
          <h4>{data.funished}</h4>
        </div>
        <div className="detailed">
          <span>
            <AiOutlineWifi />
            Internet
          </span>
          <h4>{data.internet}</h4>
        </div>
        <div className="detailed">
          <span>
            <CgSmartHomeCooker />
            Kitchen
          </span>
          <h4>{data.kitchen}</h4>
        </div>
        <div className="detailed">
          <span>
            <MdLocalLaundryService />
            Laundry
          </span>
          <h4>{data.Laundry}</h4>
        </div>
        <div className="detailed">
          <span>
            <MdLocalLaundryService />
            Dryer
          </span>
          <h4>{data.Dryer}</h4>
        </div>
        <div className="detailed">
          <span>
            <BiFridge />
            Fridge
          </span>
          <h4>{data.Fridge}</h4>
        </div>
        <div className="detailed">
          <span>
            <RiFridgeFill />
            Freezer
          </span>
          <h4>{data.Freezer}</h4>
        </div>
        <div className="detailed">
          <span>
            <RiTempColdLine />
            Aircondition
          </span>
          <h4>{data.aircondition}</h4>
        </div>
        <div className="detailed">
          <span>
            <RiMovieLine />
            TV
          </span>
          <h4>{data.tv}</h4>
        </div>
        <div className="detailed">
          <span>
            <BiDoorOpen />
            Private Enterance
          </span>
          <h4>{data.privateenterance}</h4>
        </div>
      </div>

      <div className="spaceline"></div>

      {user ? (
        <div className="contactinformation">
          <h2>
            <IoMdContact />
            Contact info
          </h2>
          <div className="detailed">
            <span>
              <HiOutlineIdentification />
              Owner
            </span>
            <h4>{data.userinfo.postname}</h4>
          </div>
          <div className="detailed">
            <span>
              <AiOutlineMail />
              Email
            </span>
            <h4>{data.userinfo.email}</h4>
          </div>
          <div className="detailed">
            <span>
              <AiFillPhone />
              Phone
            </span>
            <h4>{data.userinfo.phonenumber}</h4>
          </div>
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
