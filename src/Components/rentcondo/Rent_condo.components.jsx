import React,{useEffect,useState} from 'react'
import styled from 'styled-components';
import { GoogleMap, useJsApiLoader,Marker,InfoWindow } from '@react-google-maps/api';
import maystylesdata from './mapstyle';
import { BsSearch } from 'react-icons/bs';
import { AiTwotoneFilter } from 'react-icons/ai';
import style from '../../static/staticcss';
import { connect } from 'react-redux';
import { rentcondoreadstart } from '../../Redux/Rentcondo/rentcondo.action';
import {createStructuredSelector} from 'reselect'
import { selectitems } from '../../Redux/Rentcondo/rentcondo.selector';
import Markericons from '../../assets/marker.svg'
import Showcomponent from './Showcomponent';
import { Link } from 'react-router-dom';


const containerStyle = {
  width: '100%',
  height: '100%',
  flex:"3"
  
};




const Wrapper = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  position: relative;
 
  .searchbarcontainer {
    width: 420px;
    height: 120px;
    position: absolute;
    top: 30px;
    left: 30px;
    background-color: white;
    z-index: 30;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius: 7px;
 

    .inputcontainer {
      background-color: white;
      form {
        .seactchCcontainer {
          width: 390px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 16px;
          input {
            width: 350px;
            height: 40px;
            border: 2px solid ${style.backgroundColor.Primary};
          }
          button {
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${style.backgroundColor.Primary};
            border: none;
          }
        }
      }
    }
    .divider {
      width: 100%;
      height: 1px;
      background-color: grey;
      margin: 0.5rem 0;
    }
    .filterCcontainer {
      margin-top: 0.5rem;
      width: 390px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 16px;

      span {
        width: 350px;
        height: 40px;
        border: 2px solid ${style.backgroundColor.blackLight};
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        text-transform: capitalize;
        font-weight: 300;
      }
      button {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid ${style.backgroundColor.blackLight};
        border-left: none;
        svg {
          width: 40px;
          height: 40px;
          color: ${style.backgroundColor.black};
        }
      }
    }
  }
`;
const Searchicons = styled(BsSearch)`
font-size: 32px;
width: 40px;
height: 40px;
color:white;

`

const Searchresultcontainer = styled.div`
  display: ${({ popup }) => (!popup ? 'none' : 'inline')};
  width: 100%;
  height: 90vh;
  overflow-y: scroll;
  background-color: ${style.backgroundColor.Primary};
  flex: 1;
  transition: all 0.3s ease-in-out;
`;

const libraries = ["places"]
const options = {
  styles: maystylesdata,
  disableDefaultUI:true,
  zoomControl:true
};
const RentCondocomponents = (props) => {

  const { readdatastart, rooms } = props;
  const [selected, setselected] = useState("")
  const [popup, setpopup] =useState(false)
  useEffect(() => {
    readdatastart();
  }, [readdatastart]);

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: process.env.REACT_APP_GOOGLEAPI,
      libraries,
    });
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  return isLoaded ? (
    <Wrapper>
      <div className="searchbarcontainer">
        <div className="inputcontainer">
          <form action="">
            <div className="seactchCcontainer">
              <input type="text" />
              <button>
                <Searchicons />
              </button>
            </div>
            <div className="divider"></div>
            <div className="filterCcontainer">
              <span>Set your condition</span>
              <button>
                <AiTwotoneFilter />
              </button>
            </div>
          </form>
          <Link to="/rentcondopost">Post your home</Link>
        </div>
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lat: 43.6532,
          lng: -79.3832,
        }}
        zoom={11}
        options={options}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <>
          {rooms &&
            rooms.map((data) => {
              return (
                <Marker
                  key={data.id}
                  position={{ lat: data.address.lat, lng: data.address.lng }}
                  icon={{
                    url: Markericons,
                    scaledSize: new window.google.maps.Size(30, 30),
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(15, 15),
                  }}
                  onClick={() => {
                    setselected(data.id);
                    setpopup(!popup);
                  }}
                />
              );
            })}
        </>
      </GoogleMap>
      <Searchresultcontainer popup={popup}>
        <Showcomponent id={selected}  />
      </Searchresultcontainer>
    </Wrapper>
  ) : (
    <div>...loading</div>
  );

}

const maptoprops = createStructuredSelector({
  rooms: selectitems
})

const dispatchtomaps = dispatch =>({
  readdatastart: () => dispatch(rentcondoreadstart())
})

export default connect(maptoprops, dispatchtomaps)(RentCondocomponents);
