import React from 'react'
import styled from 'styled-components'
import style from '../../static/staticcss'
import {FaLocationArrow} from 'react-icons/fa'
import {BiUserCircle} from 'react-icons/bi'
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import { Filterdata } from '../../static/staticdata'
import { filterdatafail } from '../../Redux/Rentcondo/rentcondo.action'

const Background = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${style.backgroundColor.Detailpage_Background};
`
const Wrapper = styled.div`
  width: 1300px;
  height: 100%;
  margin: 0 auto;
  padding: 2rem;
`
const PostNav = styled.div`
  h1 {
    font-size: ${style.fontSize.detailroommainheader};
    color: ${style.fontColor.detailpageheader};
  }
  .userinfo {
    h3 {
      font-size: ${style.fontSize.detailroomsubheader};
      color: ${style.fontColor.detailpagesubheader};
      display: flex;
      align-items: center;
      svg{
        color: ${style.fontColor.detailpageiconcolor};
        margin-right:1rem;
      }
    }
  }
`;

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 400px 400px 400px;
  height: 500px;
  overflow-x: hidden;
`;
const Customimagetag = styled.img`
  width: 380px;

`
const Ownerinfomation = styled.div`
  .conatactcontainer {
    font-size: 22px;
    font-weight: 500;
  }
  .conatactinfo {
    display: flex;
    align-items: center;
    .postname {
      display: flex;
      align-items: center;
      font-size: 1rem;
      font-weight: 500;
      margin-right: 2rem;
      svg {
        font-size: 40px;
        margin-right: 10px;
    
      }
    }
    .useremail {
      display: flex;
      align-items: center;
      font-size: 1rem;
      font-weight: 500;
      margin-right: 2rem;
      svg {
        font-size: 30px;
        margin-right: 10px;
        
      }
    }
    .phonenumber {
      display: flex;
      align-items: center;
      font-size: 1rem;
      font-weight: 500;
      margin-right: 2rem;
      svg {
        font-size: 20px;
        margin-right: 10px;
      }
    }
  }
`;


const Linearbar = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${style.backgroundColor.linear};
`

const PriceInformation = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  .monthly {
    display: flex;
    align-items: center;
    h2 {
      font-size: 1.2rem;
      font-weight: 500;
    }
    h3 {
      margin-left: 1rem;
      font-size: 1.4rem;
      letter-spacing: 0.2rem;
      b{
        color: ${style.fontColor.detailpageiconcolor}
      }
    }
  }
  .deposit {
    margin-left: 3rem;
    display: flex;
    align-items: center;
    h2 {
      font-size: 1.2rem;
      font-weight: 500;
    }
    h3 {
      margin-left: 1rem;
      font-size: 1.4rem;
      letter-spacing: 0.2rem;
    }
  }
`;
const Utilityinfo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  .monthly {
    display: flex;
    align-items: center;
    h2 {
      font-size: 1.2rem;
      font-weight: 500;
    }
    h3 {
      margin-left: 1rem;
      font-size: 1.4rem;
      letter-spacing: 0.2rem;
    }
  }
  .deposit {
    margin-left: 3rem;
    display: flex;
    align-items: center;
    h2 {
      font-size: 1.2rem;
      font-weight: 500;
    }
    h3 {
      margin-left: 1rem;
      font-size: 1.4rem;
      letter-spacing: 0.2rem;
    }
  }
`;

const Categorycontainer = styled.div`
`

const RentCondoDetailpage = (props) => {
  console.log(props)
  return (
    <Background>
      <Wrapper>
        <PostNav>
          <h1>{props.posttitle}</h1>
          <div className="userinfo">
            <h3>
              <FaLocationArrow />
              {props.address.Formattedaddress}
            </h3>
          </div>
        </PostNav>

        <ImageWrapper>
          {props.image.map((image, index) => {
            return (
              <Customimagetag src={image} alt={`viewer${index}`} key={index} />
            );
          })}
        </ImageWrapper>

        <Ownerinfomation>
          <h3 className="conatactcontainer">Owner Information</h3>
          <div className="conatactinfo">
            <h3 className="postname">
              <BiUserCircle />
              {props.userinfo.postname}
            </h3>
            <h3 className="useremail">
              <AiOutlineMail />
              {props.userinfo.email}
            </h3>
            <h3 className="phonenumber">
              <AiFillPhone />
              {props.userinfo.phonenumber}
            </h3>
          </div>
        </Ownerinfomation>
        <Linearbar />
        <PriceInformation>
          <div className="monthly">
            <h2 className="monthlyprice">Monthly Fee</h2>
            <h3>
              <b>{props.monthlyfee}$</b> / Monthly
            </h3>
          </div>
          <div className="deposit">
            <h2 className="depositprice">Deposit Fee</h2>
            <h3>{props.deposit}$</h3>
          </div>
        </PriceInformation>
        <Linearbar />
        <Utilityinfo>
          <div className="monthly">
            <h2 className="monthlyprice">Room Type</h2>
            <h3>{props.roomtype}</h3>
          </div>
          <div className="deposit">
            <h2 className="depositprice">Roomate</h2>
            <h3>{props.howmanypeople}</h3>
          </div>
        </Utilityinfo>
        <Linearbar />
        <Categorycontainer>
          {Filterdata.Category.map((item,index)=>{
            <div className="itemcontainer" key={index}>
              <h1>{item.icon}{item.name}</h1>

            </div>
          })}

        </Categorycontainer>
      </Wrapper>
    </Background>
  );
}

export default RentCondoDetailpage
