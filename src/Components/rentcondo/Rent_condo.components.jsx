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
import { selectfilter, selectitems } from '../../Redux/Rentcondo/rentcondo.selector';
import Markericons from '../../assets/marker.svg'
import Showcomponent from './Showcomponent';
import { Link } from 'react-router-dom';
import PlacesAutocomplete from 'react-places-autocomplete/dist/PlacesAutocomplete';
import Filter from './Filter';


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
    width: 450px;
    height: 120px;
    position: absolute;
    top: 30px;
    left: 30px;
    background-color: transparent;
    z-index: 30;
    display: flex;
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
    .filtercontentsWrapper{
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

const Postcomponentcontainer= styled.div`
  
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: .5rem;
`

const Postcomponent = styled(Link)`
  color:white;
  background: black;
  padding: 0.5rem 2rem;
  border-radius: 30px;
  border: 1px solid black;
  text-align:center;
  font-weight: 500;
  text-transform: capitalize;
`

const libraries = ["places"]
const options = {
  styles: maystylesdata,
  disableDefaultUI:true,
  zoomControl:true
};
const RentCondocomponents = (props) => {
  const [searchmap, setsearchmap] = useState("")
  const [addressinfo,setaddressinfo] = useState(null)
  const { readdatastart, rooms, settingfilter } = props;
  const [selected, setselected] = useState("")
  const [popup, setpopup] =useState(false)
  const [filter, setfilter] = useState(false)


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

  const handlechnageforaddress= (value) =>{
    setsearchmap(value)
  }
  const handleselectforaddress = (select) => {
    setsearchmap(select);
  };

  console.log(rooms)
  console.log(settingfilter)

  const filterdata = rooms && rooms.filter((item)=>{
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
    if(settingfilter){
      const {
        minmonth,
        maxmonth,
    
      } = settingfilter;
      return Number(minmonth) <= Number(monthlyfee) && Number(maxmonth) >= Number(monthlyfee)
    }
   return item;
 
  })
  console.log("filterdata", filterdata)

   const handleaddressdata = async (address) => {
     try {
       const response = await fetch(
         `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLEAPI}`
       );
       const data = await response.json();
       const result = {
         Formattedaddress: data.results[0].formatted_address,
         lat: data.results[0].geometry.location.lat,
         lng: data.results[0].geometry.location.lng,
       };
       return result;
     } catch (err) {
       console.log(err);
     }
   };

 const handlesearchsubmit = async(e)=>{
   e.preventDefault();
   const data = await handleaddressdata(searchmap);
   setaddressinfo(data)
 }



 useEffect(() => {}, [addressinfo]);

//  const filterdata = rooms && rooms.filter((item)=>{
//   return settingfilter.minmoney < item.monthlyfee;
// })

//  console.log(filterdata)
 
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  return isLoaded ? (
    <Wrapper>
      <div className="searchbarcontainer">
        <div className="inputcontainer">
          <form onSubmit={handlesearchsubmit}>
            <div className="seactchCcontainer">
              <PlacesAutocomplete
                value={searchmap}
                onChange={handlechnageforaddress}
                onSelect={handleselectforaddress}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: 'Enter address...',
                      })}
                      style={{
                        width: '400px',
                        position: 'relative',
                        height: '40px',
                      }}
                    />
                    <div style={{ position: 'absolute', top: '40px' }}>
                      {loading && <div>...loading</div>}
                      {suggestions.map((suggestions, index) => {
                        const style = suggestions.active
                          ? { backgroundColor: '#a83232', cursor: 'pointer' }
                          : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                          <div
                            key={index}
                            {...getSuggestionItemProps(suggestions, { style })}
                          >
                            {suggestions.description}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
              <button type="submit">
                <Searchicons />
              </button>
            </div>
            <div className="filtercontentsWrapper">
              <div className="filterCcontainer">
                <span>Set your condition</span>
                <button onClick={()=>setfilter(!filter)}>
                  <AiTwotoneFilter />
                </button>
              </div>
                <Filter filter={filter}/>
            </div>
          </form>
          <Postcomponentcontainer>
            <Postcomponent to="/rentcondopost">Post your home</Postcomponent>
          </Postcomponentcontainer>
        </div>
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lat: addressinfo ? Number(addressinfo.lat) : 43.6532,
          lng: addressinfo ? Number(addressinfo.lng) : -79.3832,
        }}
        zoom={15}
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
        <Showcomponent id={selected} />
      </Searchresultcontainer>
    </Wrapper>
  ) : (
    <div>...loading</div>
  );

}

const maptoprops = createStructuredSelector({
  rooms: selectitems,
  settingfilter: selectfilter
})

const dispatchtomaps = dispatch =>({
  readdatastart: () => dispatch(rentcondoreadstart())
})

export default connect(maptoprops, dispatchtomaps)(RentCondocomponents);