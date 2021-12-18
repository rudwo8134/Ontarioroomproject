import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import maystylesdata from '../../Components/rentcondo/mapstyle';
import Cardcontainer from './Cardcontainer';
import { createStructuredSelector } from 'reselect';
import { selectitems } from '../../Redux/Rentcondo/rentcondo.selector';
import { connect } from 'react-redux';
import { rentcondoreadstart } from '../../Redux/Rentcondo/rentcondo.action';
import Markericons from '../../assets/mapMarker.svg';
import useSupercluster, { supercluster } from 'use-supercluster';
import GoogleMapReact from 'google-map-react';

import { handleaddressdata } from './Functionhandler';
import { selectCurrentUser } from '../../Redux/Users/user.selector';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { readrentcondo } from '../../Redux/Rentcondo/rentcondo.saga';
import Autocompletesearch from './Autocompletesearch';
import { BiSearch } from 'react-icons/bi';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 100px;
  border-top: 1px solid ${CommonStyles.color.Darkbold1};

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
    .mapContainer {
      height: 100%;
      width: 100%;
      flex: 1.5;
      border-radius: 13px;
      position: relative;
    }
    .dropContainer {
      height: 100%;
      flex: 1;
      border-radius: 13px;
      display: flex;
      flex-direction: column;
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
          width: 55%;
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
  .container {
    width: 300px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${CommonStyles.color.Primary};
    background: rgba(255, 255, 255);
    border-radius: 16px;
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
    ::placeholder {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 26px;
      color: ${CommonStyles.color.Primary};
    }
  }
`;

const libraries = [];
const options = {
  style: maystylesdata,
  disableDefaultUI: false,
  zoomControl: true,
};

const containerStyle = {
  width: '100%',
  height: '100%',
  flex: '1',
};

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
  const { rooms, getData, User, getroomData } = props;

  const [loading, setLoading] = useState(false);
  const [address, setaddress] = useState([]);
  const [googlemapcenter, setgooglemapcenter] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const locationhistory = location?.state?.params;
  const handlesubmitaddress = async (e) => {
    e.preventDefault();
    const data = await handleaddressdata(address);
    await setgooglemapcenter({
      lat: data.lat,
      lng: data.lng,
    });
  };

  // map ref
  const mapref = useRef();
  const [zoom, setZoom] = useState(10);
  const [bounds, setBounds] = useState(null);
  const [points, setPoints] = useState([]);
  const [selected, setSelected] = useState(null);
  const [selectInfo, setSelectInfo] = useState(null);
  const [searchLatlng, setsearchLatlng] = useState(null);
  const [searchInMap, setSearchInMap] = useState(null);

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
            price: data.monthlyfee,
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
  }, [getData, googlemapcenter]);

  if (loading) {
    <h1>Loading ....</h1>;
  }
  return (
    <Wrapper>
      <div className="showContainer">
        <div className="mapContainer">
          <>
            <AutoCompletediv>
              <div className="container">
                <BiSearch />
                <Autocompletesearch
                  findroom={true}
                  setSearchInMap={setSearchInMap}
                />
              </div>
            </AutoCompletediv>
            <GoogleMapReact
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
                              10 +
                              (pointCount && pointCount / points?.length) * 20
                            }px`,
                            height: `${
                              10 +
                              (pointCount && pointCount / points?.length) * 20
                            }px`,
                            background: 'black',
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
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
                              : `${CommonStyles.color.Dark}`,
                          borderRadius: '50%',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: 'white',
                          fontSize: '12px',
                          fontWeight: 800,
                          padding: crimeId === selected ? '4px' : '2px',
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
        <div className="dropContainer">
          {/* filter container */}
          <div className="textContainer">
            <span className="number">{rooms.length} 개의 검색결과</span>
            <div className="filter">
              <button className="draweer">+크게보기</button>
              <div className="sortContainer">
                <select name="" id="">
                  <option value="">가격 높은순</option>
                  <option value="">가격 낮은순</option>
                  <option value="">가까운순</option>
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
            <h4>집 목록</h4>
            {selectInfo
              ? rooms
                  ?.filter((data) => data.id !== selected)
                  ?.map((data, index) => {
                    return <Cardcontainer data={data} key={index} />;
                  })
              : rooms?.map((data, index) => {
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
