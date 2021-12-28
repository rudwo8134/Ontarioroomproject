import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import Background from '../../assets/feature3.png';
import { createStructuredSelector } from 'reselect';
import { selectitems } from '../../Redux/Rentcondo/rentcondo.selector';
import { connect } from 'react-redux';
import { rentcondoreadstart } from '../../Redux/Rentcondo/rentcondo.action';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';

const NewupdateWrapper = styled.div`
  width: 100vw;
  height: 420px;
  margin-bottom: 200px;
  @media screen and (max-width: 476px) {
    height: 170vh;
  }
  @media screen and (max-width: 375px) {
    height: 170vh;
  }

  .headerContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px auto;

    .updatename {
      color: ${CommonStyles.color.Primary};
      font-size: ${CommonStyles.fontSize.ExtraLarge1};
      font-weight: ${CommonStyles.bold.LittleBold};
      text-align: 'center';
      @media screen and (max-width: 476px) {
        font-size: 2.3rem;
      }
      @media screen and (max-width: 375px) {
        font-size: 2rem;
      }
    }
    .line {
      background-color: ${CommonStyles.color.Primary};
      width: 75px;
      height: 1px;
      border-radius: 30px;
      margin-top: -20px;
      margin-bottom: 16px;
    }
  }
  .cardContainer {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0 30px;
    @media screen and (max-width: 476px) {
      flex-direction: column;
    }
    @media screen and (max-width: 375px) {
      flex-direction: column;
    }

    .rentCard {
      width: 300px;
      height: 290px;
      margin-right: 30px;
      position: relative;
      cursor: pointer;
      box-shadow: 1px 3px 4px #333333;
      border-radius: 8px;
      transition: 0.5s ease-in-out all;
      :last-child {
        margin-right: 0px;
      }
      :hover{
        transform: translateY(-10px) scale(1.05);
      }
      @media screen and (max-width: 476px) {
        width: 300px;
        margin-right: 0;
        margin: 0 auto;
        margin-bottom: 1.5rem;
        justify-content: center;
        align-items: center;
        :last-child {
          margin: 0 auto;
        }
      }
      @media screen and (max-width: 375px) {
        width: 250px;
        margin-right: 0;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-bottom: 1.5rem;
        align-items: center;
        :last-child {
          margin: 0 auto;
        }
      }
    }
    .textcontainer {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 140px;
      background-color: rgba(35, 31, 32, 0.6);
      padding-left: 25px;
      margin-bottom: 1px;
      @media screen and (max-width: 375px) {
        width: 260px;
      }

      .address {
        margin-top: -1rem;
        font-size: 1.2rem;
        font-weight: ${CommonStyles.bold.Medium};
        color: ${CommonStyles.color.White};
      }
      .price {
        font-size: 27px;
        font-weight: 900;
        color: ${CommonStyles.color.White};
        padding: 0px auto;
      }
      span {
        font-weight: 200;
        font-size: 0.7rem;
        color: ${CommonStyles.color.White};
        background-color: ${CommonStyles.color.PrimaryLight4};
        border-radius: 10px;
        padding: 0.3rem 0.5rem;
        position: absolute;
        right: 15px;
        bottom: 15px;
      }
    }
    .imgfile {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
      @media screen and (max-width: 375px) {
        width: 260px;
      }
    }
  }
`;

const NewUpdate = ({ rooms, readStart }) => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    setLoading(true);
    readStart();
    setLoading(false);
  }, [readStart]);

  if (loading) {
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }
  const handclick = (id) => {
    history.push(`/rentcondo/${id}`);
  };

  return (
    <NewupdateWrapper>
      <div className="headerContainer">
        <h1 className="updatename">최신 게시물</h1>
        <div className="line"></div>
        <span>최근 7일 이전 집구하기 목록 </span>
      </div>

      <div className="cardContainer">
        {rooms &&
          rooms?.slice(0, 4)?.map((data) => {
            return (
              <div
                key={data.id}
                onClick={() => handclick(data?.id)}
                className="rentCard"
              >
                <div className="textcontainer">
                  <h3 className="price">
                    {' '}
                    $
                    {data.monthlyfee
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </h3>
                  <h2 className="address">
                    {data?.address?.Formattedaddress?.split(',')[0]}
                  </h2>
                  <span onClick={() => handclick(data?.id)}>자세히 보기</span>
                </div>
                <img
                  className="imgfile"
                  src={data?.image[0] ? data?.image[0] : data?.image[1]}
                  alt="img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `${Background}`;
                  }}
                />
              </div>
            );
          })}
      </div>
    </NewupdateWrapper>
  );
};

const maptoprops = createStructuredSelector({
  rooms: selectitems,
});
const dispatchtomaps = (dispatch) => ({
  readStart: () => dispatch(rentcondoreadstart()),
});

export default connect(maptoprops, dispatchtomaps)(NewUpdate);
