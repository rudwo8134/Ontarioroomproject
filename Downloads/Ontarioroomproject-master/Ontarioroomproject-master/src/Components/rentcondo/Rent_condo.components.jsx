import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import maystylesdata from './mapstyle';
import { BsSearch } from 'react-icons/bs';
import style from '../../static/staticcss';
import { connect } from 'react-redux';
import { rentcondoreadstart } from '../../Redux/Rentcondo/rentcondo.action';
import {createStructuredSelector} from 'reselect'
import { selectfilter, selectitems } from '../../Redux/Rentcondo/rentcondo.selector';
import Markericons from '../../assets/findroom/Makrer.png'
import Showcomponent from './Showcomponent';
import { Link } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';

const containerStyle = {
  width: '100%',
  height: '100%',
  flex: '1',
};

const Wrapper = styled.div`
  width: 100vw;
  
  height: 90vh;
  position: relative;
  margin-top:10vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .line{
    position: absolute;
    margin:0 auto;
    top:-10px;
    width: 100vw;
    height: 2px;
   border: 2px solid #EDEDED;
  }
  .searchbarcontainer {
    width: 450px;
    height: 120px;
    position: absolute;
    top: 30px;
    left: 30px;
    background-color: transparent;
    z-index: 5;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 7px;

    .inputcontainer {
      background-color: transparent;
      form {
        width: 450px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .seactchCcontainer {
          width: 400px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 16px;
          input {
            width: 350px;
            height: 40px;
            border: 2px solid ${style.backgroundColor.Primary};
            padding: 0.4rem;
            font-size: 1rem;
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
    .filtercontentsWrapper {
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .filterCcontainer {
      margin: 0;
      margin-top: 0.5rem;
      width: 440px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 16px;

      span {
        width: 400px;
        height: 40px;
        border: 2px solid ${style.backgroundColor.blackDark};
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        text-transform: capitalize;
        font-weight: 300;
        color: ${style.fontColor.blackDark};
      }
      button {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid ${style.backgroundColor.blackDark};
        color: ${style.fontColor.blackDark};
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
  color: white;
`;

const Searchresultcontainer = styled.div`
  display: ${({ popup }) => (!popup ? 'none' : 'inline')};
  width: 100%;
  height: 90vh;
  overflow-y: scroll;
  flex: 1;
  transition: all 0.3s ease-in-out;
`;

const Postcomponentcontainer = styled.div`
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
`;

const Postcomponent = styled(Link)`
  color: white;
  background: black;
  padding: 0.5rem 2rem;
  border-radius: 30px;
  border: 1px solid black;
  text-align: center;
  font-weight: 500;
  text-transform: capitalize;
`;

const libraries = ['places'];
const options = {
  styles: maystylesdata,
  disableDefaultUI: true,
  zoomControl: true,
};
const RentCondocomponents = (props) => {
  const [searchmap, setsearchmap] = useState('');
  const [addressinfo, setaddressinfo] = useState(null);
  const { readdatastart, rooms, settingfilter } = props;
  const [selected, setselected] = useState("")
  const [popup, setpopup] =useState(true)
  const [filter, setfilter] = useState(false)


  // useEffect(() => {
  //   readdatastart();
  // }, [readdatastart]);

  const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: process.env.REACT_APP_GOOGLEAPI,
      libraries,
    });
  const [map, setMap] = React.useState(null)

  // const onLoad = React.useCallback(function callback(map) {
  //   navigator?.geolocation.getCurrentPosition(
  //     ({ coords: { latitude: lat, longitude: lng } }) => {
  //       const pos = { lat, lng };
  //       setCurrentLocation(pos);
  //     }
  //   );
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, []);

  const handlechnageforaddress = (value) => {
    setsearchmap(value);
  };
  const handleselectforaddress = (select) => {
    setsearchmap(select);
  };

  const filterdata =
    rooms &&
    rooms.filter((item) => {
      const {
        monthlyfee,
        Dryer,
        Freezeer,
        Fridge,
        Laundry,
        aricondition,
        availalbledate,
        internet,
        kitchen,
        parking,
        petavailable,
        privateenterance,
        smoking,
        tv,
      } = item;
      if (settingfilter) {
        const { minmonth, maxmonth } = settingfilter;
        return (
          Number(minmonth) <= Number(monthlyfee) &&
          Number(maxmonth) >= Number(monthlyfee)
        );
      }
      return item;
    });

  // const handleaddressdata = async (address) => {
  //   try {
  //     const response = await fetch(
  //       `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLEAPI}`
  //     );
  //     const data = await response.json();
  //     const result = {
  //       Formattedaddress: data.results[0].formatted_address,
  //       lat: data.results[0].geometry.location.lat,
  //       lng: data.results[0].geometry.location.lng,
  //     };
  //     return result;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const handlesearchsubmit = async (e) => {
  //   e.preventDefault();
  //   const data = await handleaddressdata(searchmap);
  //   setaddressinfo(data);
  // };

  useEffect(() => {}, [addressinfo]);

  //  const filterdata = rooms && rooms.filter((item)=>{
  //   return settingfilter.minmoney < item.monthlyfee;
  // })

  //  console.log(filterdata)

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  return (
    <Wrapper>
      <div className="line"></div>
        {/* <Showcomponent id={selected} /> */}
        {/* <HomeScreen /> */}
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{
            lat: addressinfo ? Number(addressinfo.lat) : 43.6532,
            lng: addressinfo ? Number(addressinfo.lng) : -79.3832,
          }}
          zoom={15}
          options={options}
          onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */}
          {/* <>
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
                    label="3"
                  />
                );
              })}
          </> */}
        </GoogleMap>
      )}
    </Wrapper>
  );
}

const maptoprops = createStructuredSelector({
  rooms: selectitems,
  settingfilter: selectfilter,
});

const dispatchtomaps = (dispatch) => ({
  readdatastart: () => dispatch(rentcondoreadstart()),
});

export default connect(maptoprops, dispatchtomaps)(RentCondocomponents);
