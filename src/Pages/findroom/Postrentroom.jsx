import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import { StaticGoogleMap, Marker } from 'react-static-google-map';

const Wrapper = styled.div`
  border-top: 1px solid ${CommonStyles.color.Darkbold1};
  width: 1300px;
  margin: 0 auto;
  margin-top: 90px;
  margin-bottom: 100px;
  .submitbutton {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    .backbutton {
      height: 35px;
      background-color: white;
      border: none;
      border-radius: 16px;
      color: ${CommonStyles.color.Primary};
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      cursor: pointer;
      transition: 0.3s ease-in-out all;
      :hover {
        transform: scale(1.05) translateY(-3px);
        color: ${CommonStyles.color.Dark};
      }
    }
    .post {
      width: 200px;
      height: 35px;
      background-color: ${CommonStyles.color.Primary};
      border: none;
      border-radius: 16px;
      color: ${CommonStyles.color.White};
      font-size: 13px;
      font-weight: 700;
      text-transform: capitalize;
      cursor: pointer;
      transition: 0.3s ease-in-out all;
      :hover {
        transform: scale(1.05) translateY(-3px);
        color: ${CommonStyles.color.Dark};
      }
    }
  }
  .nextheader {
    margin-top: 60px;
    margin-bottom: 30px;
    .nextname {
      text-transform: uppercase;
      font-size: ${CommonStyles.fontSize.Large};
      color: ${CommonStyles.color.Primary};
    }
  }
  .nextbody {
    width: 1300px;
    margin: 0 auto;
    .container {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 2rem;
      .name {
        width: 100px;
        font-weight: 600;
        color: ${CommonStyles.color.Darkbold3};
      }
      .buttoncontainer {
        margin-left: 15px;
        width: 500px;
        button {
          width: 131px;
          height: 30px;
          border: 1px solid ${CommonStyles.color.Primary};
          background-color: white;
          border-radius: 16px;
          color: ${CommonStyles.color.Primary};
          margin: 10px;
        }
      }
    }
  }
  .header {
    margin-top: 60px;
    margin-bottom: 60px;
    .name {
      text-transform: uppercase;
      font-size: ${CommonStyles.fontSize.Large};
      color: ${CommonStyles.color.Primary};
    }
  }
  .body {
    display: flex;
    flex-direction: row;
    width: 1300px;
    margin: 0 auto;
    justify-content: center;
    .left {
      flex: 1;
      margin: 0 auto;
      .mapcontainer {
        margin-top: 30px;
      }
      .location {
        margin-top: ${CommonStyles.margin.Reuglar};
      }
      .propertytype {
        width: 60%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .name {
          font-weight: 700;
          color: ${CommonStyles.color.Darkbold3};
        }
        select,
        input {
          width: 250px;
          height: 30px;
          border: 1px solid ${CommonStyles.color.Primary};
          background-color: white;
          border-radius: 8px;
        }
      }
    }
    .divider {
      background-color: ${CommonStyles.color.Darkbold2};
      width: 2px;
      margin-right: 80px;
      margin-left: 90px;
    }
    .right {
      flex: 1;
      display: flex;
      flex-direction: column;

      .buttoncontainer {
        display: flex;
        justify-content: flex-end;
        width: 500px;
        margin-top: 40px;
        button {
          width: 200px;
          height: 35px;
          background-color: ${CommonStyles.color.Primary};
          border: none;
          border-radius: 16px;
          color: ${CommonStyles.color.White};
          font-size: 13px;
          font-weight: 700;
          text-transform: capitalize;
          cursor: pointer;
          transition: 0.3s ease-in-out all;
          :hover {
            transform: scale(1.05) translateY(-3px);
            color: ${CommonStyles.color.Dark};
          }
        }
      }
      .description {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: ${CommonStyles.margin.Reuglar};
        .name {
          width: 200px;
          font-weight: 700;
          color: ${CommonStyles.color.Darkbold3};
        }
        textarea {
          width: 500px;
          height: 300px;
          border: 1px solid ${CommonStyles.color.Primary};
        }
      }
      .propertytype {
        width: 60%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: ${CommonStyles.margin.Reuglar};
        .name {
          width: 200px;
          font-weight: 700;
          color: ${CommonStyles.color.Darkbold3};
        }
        select,
        input {
          width: 250px;
          height: 30px;
          border: 1px solid ${CommonStyles.color.Primary};
          background-color: white;
          border-radius: 8px;
        }
      }
    }
  }
`;

const Postrentroom = () => {
  const [next, setNext] = useState(false);
  const filter = [
    {
      name: '선호 성별',
      button: ['남', '여', '남녀무관'],
    },
    {
      name: '유틸리티 포함',
      button: [
        'Cable',
        'heating',
        'Hydro/electricity',
        'internet/Wifi',
        'water',
      ],
    },
    {
      name: 'funished',
      button: ['네', '아니오'],
    },
    {
      name: '주차장',
      button: ['유', '무'],
    },
    {
      name: '인터넷',
      button: ['유', '무'],
    },
    {
      name: '세탁기',
      button: ['유', '무'],
    },
    {
      name: '개인 출입문',
      button: ['유', '무'],
    },
    {
      name: '흡연',
      button: ['허용', '불허용'],
    },
    {
      name: '펫',
      button: ['허용', '불허용'],
    },
    {
      name: '화장실',
      button: ['개인', '쉐어'],
    },
    {
      name: '냉장고',
      button: ['개인', '쉐어', '없음'],
    },
    {
      name: '주방',
      button: ['개인', '쉐어'],
    },
  ];
  return (
    <>
      {next && (
        <Wrapper>
          <div className="nextheader">
            <h1 className="nextname">List your place</h1>
            <h4>
              꼭 맞는 세입자를 찾기 위한 과정입니다. 최대한 많은 항목을
              응답해주세요.
            </h4>
          </div>
          <div className="nextbody">
            {filter.map((data, index) => {
              return (
                <div className="container">
                  <h5 className="name">{data?.name}</h5>
                  <div className="buttoncontainer">
                    {data?.button?.map((data2, index) => {
                      return <button key={index}>{data2}</button>;
                    })}
                  </div>
                </div>
              );
            })}
            <div className="submitbutton">
              <button onClick={()=>setNext(false)} className="backbutton">{'<'}back</button>
              <button className="post">글 올리기</button>
            </div>
          </div>
        </Wrapper>
      )}
      {!next && (
        <Wrapper>
          <div className="header">
            <h1 className="name">List your place</h1>
          </div>
          <div className="body">
            <div className="left">
              <div className="propertytype">
                <span className="name">Property type*</span>
                <select>
                  <option value="">1</option>
                </select>
              </div>
              <div className="location">
                <div className="propertytype">
                  <span className="name">Location*</span>
                  <input type="text" />
                </div>
                <div className="mapcontainer">
                  <StaticGoogleMap
                    apiKey={process.env.REACT_APP_GOOGLEAPI}
                    size="600x400"
                    className="img-fluid"
                    zoom="15"
                  >
                    <Marker location={(33, 33)} label="H" color="red" />
                  </StaticGoogleMap>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="right">
              <div className="propertytype">
                <span className="name">Type of Rental*</span>
                <select>
                  <option value="">1</option>
                </select>
              </div>
              <div className="propertytype">
                <span className="name">Rent fee*</span>
                <input type="text" />
              </div>
              <div className="description">
                <span className="name">Description</span>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <div className="buttoncontainer">
                <button onClick={()=>setNext(true)}>continue</button>
              </div>
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Postrentroom;
