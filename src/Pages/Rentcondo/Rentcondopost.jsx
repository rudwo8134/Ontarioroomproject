import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser } from '../../Redux/Users/user.selector';
import { rentcondopoststart } from '../../Redux/Rentcondo/rentcondo.action';
import { v4 as uuid } from 'uuid';
import PlacesAutocomplete from 'react-places-autocomplete';
import scriptLoader from 'react-async-script-loader'
import { useHistory } from 'react-router';
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`
const Container = styled.div`
  width: 1300px;
  height: 100vh;
  margin: 0 auto;

`;
const Formcontainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const Rentcondopost = (props) => {
  const { user, poststart, isScriptLoaded, isScriptLoadSucceed } = props;
  const [address, setaddress] = useState([])
  const history=useHistory()
  const [postcredential,setpostcredential] =useState({
    unit:"",
    deposit:"",
    monthlyfee:"",
    roomtype:"1 room",
    sqf:"",
    parking:"yes",
    availabledate:"",
    posttitle:"",
    description:""
  })

  const handleaddressdata = async(address) =>{
    try{
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLEAPI}`
      );
      const data = await response.json()
      const result ={
        Formattedaddress: data.results[0].formatted_address,
        lat: data.results[0].geometry.location.lat,
        lng: data.results[0].geometry.location.lng,
      };
      return result
    }catch(err){
      console.log(err)
    }
  }
  const handlecredentialchange = (e) =>{
    const {name,value} = e.target;
    setpostcredential({...postcredential, [name]:value})
  }

  const handlechange = (value) =>{
    setaddress(value);
  }
  const handleselect = (select) =>{
    setaddress(select)
  }

  const handlesubmit= async (e)=>{
    e.preventDefault()
    const reultaddress = await handleaddressdata(address);
    poststart({
      id: uuid(),
      userinfo: {
        userid: user.id,
        postname: user.displayName,
        phonenumber: user.phonenumber,
        email: user.email,
      },
      address: reultaddress,
      ...postcredential,
    });
    history.push('/rentcondo')
  }
  if (isScriptLoaded && isScriptLoadSucceed) {
    return (
      <Wrapper>
        <Container>
          <label htmlFor="">Address</label>
          <Formcontainer onSubmit={handlesubmit}>
            <PlacesAutocomplete
              value={address}
              onChange={handlechange}
              onSelect={handleselect}
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
                    style={{ width: '100vh' }}
                  />
                  <div>
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
            <label htmlFor="unit">unit/apartnumber</label>
            <input
              type="text"
              name="unit"
              id="unit"
              value={postcredential.unit}
              onChange={handlecredentialchange}
            />
            <label htmlFor="">attach the picture</label>
            <input type="file" />
            <label htmlFor="deposit">deposit</label>
            <input
              type="number"
              name="deposit"
              id="deposit"
              value={postcredential.deposit}
              onChange={handlecredentialchange}
            />
            <label htmlFor="monthlyfee">Monthly Fee</label>
            <input
              type="number"
              name="monthlyfee"
              id="monthlyfee"
              value={postcredential.monthlyfee}
              onChange={handlecredentialchange}
              required
            />
            <label htmlFor="roomtype">Room type</label>
            <select
              name="roomtype"
              id="roomtype"
              value={postcredential.roomtype}
              onChange={handlecredentialchange}
              required
            >
              <option  value="1 room">
                1 room
              </option>
              <option value="1 room + 1 bath">1 room and 1 bath</option>
              <option value="living room">living room</option>
            </select>
            <label htmlFor="sqf">Sqf</label>
            <input
              type="text"
              name="sqf"
              id="sqf"
              value={postcredential.sqf}
              onChange={handlecredentialchange}
            />
            <label htmlFor="parking">Parking</label>
            <select
              name="parking"
              id="parking"
              value={postcredential.parking}
              onChange={handlecredentialchange}
              required
            >
              <option  value="yes">
                Yes
              </option>
              <option value="no">No</option>
            </select>
            <label htmlFor="availabledate">Available to live</label>
            <input
              type="date"
              name="availabledate"
              id="availabledate"
              value={postcredential.availabledate}
              onChange={handlecredentialchange}
              required
            />
            <label htmlFor="posttitle">Post Title</label>
            <input
              type="text"
              name="posttitle"
              id="posttitle"
              value={postcredential.posttitle}
              onChange={handlecredentialchange}
              required
            />
            <label htmlFor="description">description</label>
            <textarea
              name="description"
              id="description"
              value={postcredential.description}
              cols="100"
              rows="10"
              onChange={handlecredentialchange}
              required
            ></textarea>
            <button type="submit">submit</button>
          </Formcontainer>
        </Container>
      </Wrapper>
    );
  } else {
    return <div></div>;
  }
}

const maptoprops = createStructuredSelector({
  user: selectCurrentUser
})

const dispatchtoprops = dispatch =>({
  poststart: (data) => dispatch(rentcondopoststart(data))
})

export default scriptLoader(
  `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLEAPI}&libraries=places`
)(connect(maptoprops, dispatchtoprops)(Rentcondopost));
