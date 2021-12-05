import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import maystylesdata from '../../Components/rentcondo/mapstyle';
import Cardcontainer from './Cardcontainer';
import { createStructuredSelector } from 'reselect';
import { selectitems } from '../../Redux/Rentcondo/rentcondo.selector';
import { connect } from 'react-redux';
import { rentcondoreadstart } from '../../Redux/Rentcondo/rentcondo.action';
import Markericons from '../../assets/findroom/Makrer.png';


import { handleaddressdata } from './Functionhandler';
import Autocompletesearch from './Autocompletesearch';
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 80px;

  .statebar {
    width: 100%;
    height: 5%;
    background-color: ${CommonStyles.color.Darkbold1};
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
        height: 30px;
        line-height: 1.3;
        border-radius: 1px;
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
    .filterButton {
      background-color: ${CommonStyles.color.Primary};
      color: ${CommonStyles.color.White};
      height: 30px;
      padding: 10px 25px;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12.75px;
      font-weight: ${CommonStyles.bold.LittleBold};
      cursor: pointer;
      text-transform: uppercase;
      transition: all 0.5s ease-in-out;
      :hover {
        background-color: ${CommonStyles.color.PrimaryLight2};
      }
    }
  }
  .showContainer {
    width: 100vw;
    height: 87vh;
    display: flex;
    .mapContainer {
      height: 100%;
      flex: 2;
      border-radius: 13px;
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
          font-weight: ${CommonStyles.bold.LittleBold};
          text-transform: uppercase;
        }
        .filter {
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .draweer {
            padding: 4px;
            background-color: ${CommonStyles.color.White};
            border: 1px solid ${CommonStyles.color.Darkbold1};
            width: 105px;
            height: 30px;
            color: ${CommonStyles.color.Darkbold3};
          }
          .sortContainer {
            display: flex;
            div {
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 14px;
              height: 30px;
              padding: 4px;
              color: ${CommonStyles.color.Darkbold3};
              border: 1px solid ${CommonStyles.color.Darkbold1};
            }
            select {
              font-size: 14px;
              height: 30px;
              padding: 4px;
              color: ${CommonStyles.color.Darkbold5};
              border: 1px solid ${CommonStyles.color.Darkbold1};
            }
          }
        }
      }
    }
  }
  .CardWrapper {
    width: 100%;
    padding: 0 30px;
    margin: 0 auto;
    overflow: scroll;
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

const Home = (props) => {
  const { rooms, getData } = props;
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLEAPI,
    libraries,
  });

  const onUnmount = React.useCallback(function callback(map) {

  }, []);
  const [loading, setLoading] = useState(false);
  const [address, setaddress] = useState([]);
  const [googlemapcenter, setgooglemapcenter] = useState(null);
  const handlechange = (value) => {
    setaddress(value);
  };
  const handleselect = (select) => {
    setaddress(select);
  };

  const handlesubmitaddress = async (e) => {
    e.preventDefault();
    const data = await handleaddressdata(address);
    await setgooglemapcenter({
      lat: data.lat,
      lng: data.lng,
    });
  };
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
  }, []);
  useEffect(() => {
    setLoading(true);
    getData();
    setLoading(false);
  }, [getData, googlemapcenter]);

  if (loading || !isLoaded) {
    <h1>Loading ....</h1>;
  }
  return (
    <Wrapper>
      <div className="statebar">
        <form onSubmit={handlesubmitaddress} className="searchform">
          <button type="submit" className="search">
            Search
          </button>
        </form>
        <button className="filterButton">Filters</button>
      </div>

      <div className="showContainer">
        <div className="mapContainer">
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={
                googlemapcenter
                  ? googlemapcenter
                  : {
                      lat: 43.6532,
                      lng: -79.3832,
                    }
              }
              zoom={googlemapcenter ? 17 : 10}
              options={options}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              <>
                {rooms &&
                  rooms.map((data) => {
                    return (
                      <Marker
                        key={data?.id}
                        position={{
                          lat: data?.address?.lat,
                          lng: data?.address?.lng,
                        }}
                        icon={{
                          url: Markericons,
                          scaledSize: new window.google.maps.Size(40, 40),
                          origin: new window.google.maps.Point(0, 0),
                          anchor: new window.google.maps.Point(15, 15),
                        }}
                        label={`${data?.monthlyfee}`}
                      />
                    );
                  })}
              </>
            </GoogleMap>
          )}
        </div>
        <div className="dropContainer">
          {/* filter container */}
          <div className="textContainer">
            <span className="number"> 1 - 12 of 1000</span>
            <div className="filter">
              <button className="draweer">+크게보기</button>
              <div className="sortContainer">
                <div>정렬</div>
                <select name="" id="">
                  <option value="">가격 높은순</option>
                  <option value="">가격 낮은순</option>
                  <option value="">가까운순</option>
                </select>
              </div>
            </div>
          </div>
          {/* card container */}
          <div className="CardWrapper">
            {rooms &&
              rooms.map((data, index) => {
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
});
const dispatchmap = (dispatch) => ({
  getData: () => dispatch(rentcondoreadstart()),
});

export default connect(maptoprops, dispatchmap)(Home);
