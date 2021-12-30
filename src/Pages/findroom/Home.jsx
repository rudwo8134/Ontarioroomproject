import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import Cardcontainer from './Cardcontainer';
import { createStructuredSelector } from 'reselect';
import { selectitems } from '../../Redux/Rentcondo/rentcondo.selector';
import { connect } from 'react-redux';
import { rentcondoreadstart } from '../../Redux/Rentcondo/rentcondo.action';

import useSupercluster from 'use-supercluster';
import GoogleMapReact from 'google-map-react';


import { selectCurrentUser } from '../../Redux/Users/user.selector';
import {  useLocation } from 'react-router-dom';
import { readrentcondo } from '../../Redux/Rentcondo/rentcondo.saga';
import Autocompletesearch from './Autocompletesearch';
import { BiSearch } from 'react-icons/bi';
import { useMediaQuery } from 'react-responsive';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 100px;
  border-top: 1px solid ${CommonStyles.color.Darkbold1};
  @media screen and (max-width: 476px) {
    margin-top: 0;
  }

  .statebar {
    width: 100%;
    height: 10%;
    background-color: ${CommonStyles.color.White};
    border-bottom: 1px solid ${CommonStyles.color.Darkbold1};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    margin: 0 auto;
    .searchform {
      display: flex;
      justify-content: center;
      align-items: center;
      .searchinput {
        width: auto;
        min-width: 400px;
        height: 55px;
        line-height: 1.3;
        border-radius: 16px;
        border: 0.5px solid #5b5f6388;
        ::placeholder {
          color: ${CommonStyles.color.Darkbold3};
          padding: 5px;
        }
      }
      .autocomplete-dropdown-container {
        position: absolute;
        z-index: 10;
        max-width: 400px;
      }
      .search {
        height: 30px;
        border: 0.5px solid #5b5f6388;
        border-radius: 1px;
        border-left: none;
        background-color: ${CommonStyles.color.Primary};
        color: ${CommonStyles.color.White};
        font-size: 12.75px;
        font-weight: ${CommonStyles.bold.LittleBold};
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        :hover {
          background-color: ${CommonStyles.color.PrimaryLight3};
        }
      }
    }
  }
  .showContainer {
    width: 100vw;
    height: 87vh;
    display: flex;
    @media screen and (max-width: 476px) {
      flex-direction: column;
      position: relative;
    }
    .ListViewMobile {
      display: none;
      @media screen and (max-width: 476px) {
        display: inline-block;
        width: 100vw;
        position: absolute;
        background-color: white;
        top: 0;
        left: 0;
        z-index: 20;
      }
      .textContainer {
        @media screen and (max-width: 476px) {
          margin-top: 13vh;
          width: 100vw;
          display: flex;
          justify-content: flex-end;
        }

        .filter {
          display: flex;
          flex-direction: row;
          @media screen and (max-width: 375px) {
            margin-top: -30px;
          }
          .draweer {
            border: none;
            background-color: ${CommonStyles.color.Primary};
            color: #fff;
            border-radius: 16px;
            margin-right: 1rem;
          }
          .sortContainer {
            select {
              border: 1px solid ${CommonStyles.color.Primary};
              width: 5rem;
              height: 2rem;
              border-radius: 16px;
              margin-right: 1rem;
              margin-left: 1rem;
            }
          }
        }
      }
    }
    .mapContainer {
      height: 100%;
      width: 100%;
      flex: 1.5;
      border-radius: 13px;
      position: relative;
      @media screen and (max-width: 476px) {
        height: 100vh;
        width: 100vw;
      }
      .showList {
        display: none;
        @media screen and (max-width: 476px) {
          display: ${({ showList }) => (showList ? 'none' : 'inline-block')};
          position: absolute;
          bottom: 5%;
          left: 5%;
          z-index: 30;
          padding: 0.5rem;
          border: none;
          background-color: ${CommonStyles.color.Primary};
          color: ${CommonStyles.color.White};
          border-radius: 16px;
          :hover {
            background-color: ${CommonStyles.color.PrimaryLight2};
          }
        }
      }
    }
    .dropContainer {
      height: 100%;
      flex: 1;
      border-radius: 13px;
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 476px) {
        display: none;
      }
      .textContainer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1rem 2rem;

        .number {
          font-size: 14px;
          color: ${CommonStyles.color.Darkbold2};
          font-weight: ${CommonStyles.bold.LittleBold};
          text-transform: uppercase;
        }
        .filter {
          width: 35%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .draweer {
            padding: 4px;
            background-color: ${CommonStyles.color.White};
            border: 1px solid ${CommonStyles.color.Primary};
            width: 80px;
            height: 30px;
            color: ${CommonStyles.color.Primary};
            border-radius: 16px;
            display: none;
          }
          .sortContainer {
            display: flex;
            div {
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 14px;
              height: 30px;
              padding: 1px;
              color: ${CommonStyles.color.Darkbold3};
              border: 1px solid ${CommonStyles.color.Primary};
            }
            select {
              font-size: 14px;
              height: 30px;
              width: 110px;
              padding: 4px 10px;
              color: ${CommonStyles.color.Primary};
              border: 1px solid ${CommonStyles.color.Primary};
              border-radius: 16px;
            }
          }
        }
      }
    }
  }
  .CardWrapper {
    width: 100%;
    padding: 0 40px;
    margin: 0 auto;
    overflow: scroll;
    .TitleContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .searchResult {
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        color: #231f20;
        margin-bottom: 3px;
      }
      .howmanyReseult {
        color: rgba(35, 31, 32, 0.61);
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 26px;
      }
      .dividers {
        width: 100%;
        height: 1px;
        background: ${CommonStyles.color.Darkbold1};
        margin: 16px 0px;
        margin-bottom: 32px;
      }
    }
    .divider {
      width: 100%;
      margin: 0 auto;
      height: 30px;
      margin: 30px 0px;
      background-color: ${CommonStyles.color.Darkbold1};
    }
    h4 {
      font-size: 20px;
      color: ${CommonStyles.color.Primary};
    }
    .linespace {
      width: 100%;
      margin: 0 auto;
      height: 1px;
      margin: 30px 0px;
      background-color: ${CommonStyles.color.Darkbold1};
    }
  }
`;

const AutoCompletediv = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 20;
  @media screen and (max-width: 476px) {
    z-index: 29;
  }
  @media screen and (max-width: 375px) {
    top: 12px;
    left: 12px;
  }
  @media screen and (max-width: 320px) {
    top: 10px;
    left: 5px;
  }
  .container {
    width: 300px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${CommonStyles.color.Primary};
    background: rgba(255, 255, 255);
    border-radius: 16px;
    z-index: 20;
    @media screen and (max-width: 375px) {
      width: 260px;
    }
    @media screen and (max-width: 325px) {
      width: 220px;
    }
    svg {
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${CommonStyles.color.Primary};
      font-size: 30px;
      padding: 3px;
    }
  }
  input {
    padding: 3px;
    width: 230px;
    border: none;
    margin-left: 3%;
    @media screen and (max-width: 375px) {
      width: 200px;
    }
    @media screen and (max-width: 325px) {
      width: 170px;
    }
    ::placeholder {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 26px;
      color: ${CommonStyles.color.Primary};
      @media screen and (max-width: 325px) {
        font-size: 11px;
      }
    }
  }
`;




const Filterbutton = styled.button`
  background-color: ${CommonStyles.color.Primary};
  color: ${CommonStyles.color.White};
  height: 30px;
  width: 80px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 13.75px;
  font-weight: ${CommonStyles.bold.LittleBold};
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.5s ease-in-out;
  border-radius: 16px;
  :hover {
    background-color: ${CommonStyles.color.PrimaryLight2};
  }
`;

const Marker = ({ children }) => children;

const Home = (props) => {
  const { rooms, getData} = props;
  const isbigMobile = useMediaQuery({ query: '(max-width: 476px)' });
  const ismediumMobile = useMediaQuery({ query: '(max-width: 375px)' });
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const locationhistory = location?.state?.params;


  // map ref
  const mapref = useRef();
  const [zoom, setZoom] = useState(10);
  const [bounds, setBounds] = useState(null);
  const [points, setPoints] = useState([]);
  const [selected, setSelected] = useState(null);
  const [selectInfo, setSelectInfo] = useState(null);
  const [searchLatlng, setsearchLatlng] = useState(null);
  const [searchInMap, setSearchInMap] = useState(null);
  const [searchQuery, SetSearchquery] = useState(null);
  const [filter, SetFilter] = useState(null);
  const [finalData, setFinalData] = useState(rooms);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    if (locationhistory || searchInMap) {
      SetSearchquery(
        searchInMap ? searchInMap.address : locationhistory.address
      );
    }
  }, [searchInMap, locationhistory]);

  useEffect(() => {
    if (searchInMap) {
      setsearchLatlng(searchInMap.geo);
    }
  }, [searchInMap]);

  useEffect(() => {
    if (locationhistory) {
      setsearchLatlng(locationhistory?.geo);
    }
  }, [locationhistory]);

  const handleClick = (id) => {
    setSelected(id);
    if (isbigMobile) {
      setShowList(true);
    }
  };

  useEffect(() => {
    const readdata = async () => {
      if (selected) {
        const data = rooms.filter((data) => data.id === selected);
        setSelectInfo(data);
      }
    };
    readdata();
  }, [selected, rooms]);

  useEffect(() => {
    const data =
      rooms &&
      rooms?.map((data) => {
        return {
          type: 'Feature',
          properties: {
            cluster: false,
            crimeId: data.id,
            category: data.roomtype,
            price: data.rentFee,
          },
          geometry: {
            type: 'Point',
            coordinates: [
              parseFloat(data.address.lng),
              parseFloat(data.address.lat),
            ],
          },
        };
      });

    setPoints(data);
  }, [rooms]);

  // load and format data
  // get cluster
  const { clusters, supercluster } = useSupercluster({
    points: points ? points : [],
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 25 },
  });

  useEffect(() => {
    setLoading(true);
    getData();
    setLoading(false);
  }, [getData]);

  const SelectFilter = (e) => {
    SetFilter(e.target.value);
  };

  const watchtheList = () => {
    setShowList(true);
  };

  useEffect(() => {
    if (filter === 'low') {
      setFinalData(rooms?.sort((a, b) => b.rentFee - a.rentFee));
    }
    if (filter === 'high') {
      setFinalData(rooms?.sort((a, b) => a.rentFee - b.rentFee));
    }
  }, [filter, rooms]);

  if (loading) {
    <h1>Loading ....</h1>;
  }
  return (
    <Wrapper showList={showList}>
      <div className="showContainer">
        <div className="mapContainer">
          <>
            <button onClick={watchtheList} className="showList">
              리스트 보기
            </button>
            <AutoCompletediv>
              <div className="container">
                <BiSearch />
                <Autocompletesearch
                  ismediumMobile={ismediumMobile}
                  showList={showList}
                  setShowList={setShowList}
                  isbigMobile={isbigMobile}
                  findroom={true}
                  setSearchInMap={setSearchInMap}
                  hold ={locationhistory?.address}
                />
              </div>
            </AutoCompletediv>
            <GoogleMapReact
              style={{ height: isbigMobile && '92vh' }}
              bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEAPI }}
              defaultCenter={
                searchLatlng ? searchLatlng : { lat: 43.6532, lng: -79.3832 }
              }
              defaultZoom={searchLatlng ? 15 : 10}
              zoom={15}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map }) => {
                mapref.current = map;
              }}
              center={searchLatlng && searchLatlng}
              onChange={({ zoom, bounds }) => {
                setZoom(zoom);
                setBounds([
                  bounds.nw.lng,
                  bounds.se.lat,
                  bounds.se.lng,
                  bounds.nw.lat,
                ]);
              }}
            >
              {clusters &&
                clusters?.map((cluster) => {
                  const [longitude, latitude] = cluster?.geometry?.coordinates;
                  const {
                    cluster: isCluster,
                    point_count: pointCount,
                    price,
                    crimeId,
                  } = cluster?.properties;

                  if (isCluster) {
                    return (
                      <Marker
                        key={`cluster-${cluster.id}`}
                        lat={latitude}
                        lng={longitude}
                      >
                        <div
                          className="cluster-marker"
                          style={{
                            width: `${
                              30 +
                              (pointCount && pointCount / points?.length) * 40
                            }px`,
                            height: `${
                              30 +
                              (pointCount && pointCount / points?.length) * 40
                            }px`,
                            background: `#00000099`,
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: `#fff`,
                            border: `none`,
                            fontSize: '16px',
                            fontWeight: 800,
                          }}
                          onClick={() => {
                            const expansionzoom = Math.min(
                              supercluster?.getClusterExpansionZoom(cluster.id),
                              20
                            );
                            mapref?.current?.setZoom(expansionzoom);
                            mapref?.current?.panTo({
                              lat: latitude,
                              lng: longitude,
                            });
                          }}
                        >
                          {pointCount}
                        </div>
                      </Marker>
                    );
                  }
                  return (
                    <Marker
                      key={`crime-${cluster.properties.crimeId}`}
                      lat={latitude}
                      lng={longitude}
                    >
                      <button
                        onClick={() => handleClick(crimeId)}
                        className="crime-marker"
                        style={{
                          background:
                            crimeId === selected
                              ? `${CommonStyles.color.Primary}`
                              : `${CommonStyles.color.PrimaryLight4}`,
                          border: `none`,
                          borderRadius: '30px',
                          display: 'flex',
                          height: `${zoom * 2.5}px`,
                          width: `${zoom * 4.5}px`,
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: `${CommonStyles.color.White}`,
                          fontSize: `${zoom * 1.2}px`,
                          fontWeight: 800,
                          padding: crimeId === selected ? '6px' : '4px',
                        }}
                      >
                        ${price}
                      </button>
                    </Marker>
                  );
                })}
            </GoogleMapReact>
          </>
        </div>
        {showList && (
          <div className="ListViewMobile">
            <div className="textContainer">
              <span className="number"></span>

              <div className="filter">
                <Filterbutton>필터</Filterbutton>
                <div className="sortContainer">
                  <select
                    defaultValue="no"
                    name="filter"
                    id="filter"
                    onChange={SelectFilter}
                  >
                    <option value="no">선택</option>
                    <option value="high">가격 높은순</option>
                    <option value="low">가격 낮은순</option>
                  </select>
                </div>
                <button onClick={() => setShowList(false)} className="draweer">
                  지도 보기
                </button>
              </div>
            </div>
            <div className="CardWrapper">
              {selectInfo &&
                selectInfo.map((data, index) => {
                  return (
                    <>
                      <h4>선택한 집</h4>

                      <Cardcontainer data={data} key={index} />
                      <div className="linespace"></div>
                    </>
                  );
                })}
              <div className="TitleContainer">
                <h3 className="searchResult">
                  {searchQuery
                    ? searchQuery?.split(',')[
                        searchQuery?.split(',').length - 1
                      ]
                    : '검색어를 입력해주세요. '}
                </h3>
                <span className="howmanyReseult">
                  {' '}
                  {rooms.length} 개의 검색결과
                </span>
                <div className="dividers"></div>
              </div>

              {selectInfo
                ? finalData
                    ?.filter((data) => data.id !== selected)
                    ?.map((data, index) => {
                      return <Cardcontainer data={data} key={index} />;
                    })
                : finalData?.map((data, index) => {
                    return <Cardcontainer data={data} key={index} />;
                  })}
            </div>
          </div>
        )}

        <div className="dropContainer">
          {/* filter container */}
          <div className="textContainer">
            <span className="number"></span>
            <div className="filter">
              <button className="draweer">+크게보기</button>
              <div className="sortContainer">
                <select
                  defaultValue="no"
                  name="filter"
                  id="filter"
                  onChange={SelectFilter}
                >
                  <option value="no">선택</option>
                  <option value="high">가격 높은순</option>
                  <option value="low">가격 낮은순</option>
                </select>
              </div>
              <Filterbutton>필터</Filterbutton>
            </div>
          </div>
          {/* card container */}
          <div className="CardWrapper">
            {selectInfo &&
              selectInfo.map((data, index) => {
                return (
                  <>
                    <h4>선택한 집</h4>

                    <Cardcontainer data={data} key={index} />
                    <div className="linespace"></div>
                  </>
                );
              })}
            <div className="TitleContainer">
              <h3 className="searchResult">
                {searchQuery
                  ? searchQuery?.split(',')[searchQuery?.split(',').length - 1]
                  : '검색어를 입력해주세요. '}
              </h3>
              <span className="howmanyReseult">
                {' '}
                {rooms.length} 개의 검색결과
              </span>
              <div className="dividers"></div>
            </div>

            {selectInfo
              ? finalData
                  ?.filter((data) => data.id !== selected)
                  ?.map((data, index) => {
                    return <Cardcontainer data={data} key={index} />;
                  })
              : finalData?.map((data, index) => {
                  return <Cardcontainer data={data} key={index} />;
                })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const maptoprops = createStructuredSelector({
  rooms: selectitems,
  User: selectCurrentUser,
});
const dispatchmap = (dispatch) => ({
  getData: () => dispatch(rentcondoreadstart()),
  getroomData: (id) => dispatch(readrentcondo(id)),
});

export default connect(maptoprops, dispatchmap)(Home);
