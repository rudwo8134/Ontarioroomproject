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
import { Uploadimage } from '../../Firebase/firebase.utils';

const Wrapper = styled.div`
  margin-top:10vh;
  width: 100vw;
  height: 100vh;
  overflow-x: scroll;
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

const Imageuploadcontainer = styled.div`
  margin-top:1rem;
  width:1300px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2rem;
  justify-content: center;
  align-items: center;
  img{
    width: 300px;
    border-radius: 30px;

  }
`

const Rentcondopost = (props) => {
  const { user, poststart, isScriptLoaded, isScriptLoadSucceed } = props;
  const [address, setaddress] = useState([])
  const [imageresults,setimageresults] = useState([])
  const [imageloading, setimageloading] = useState(false)
  const history=useHistory()
  const [postcredential, setpostcredential] = useState({
    unit: '',
    deposit: '',
    monthlyfee: '',
    roomtype: '1 room',
    sqf: '',
    parking: 'yes',
    availabledate: '',
    posttitle: '',
    description: '',
    petavailable: 'yes',
    smoking: 'yes',
    internet: 'yes',
    kitchen: 'yes',
    Laundry: 'yes',
    Dryer: 'yes',
    Fridge: 'yes',
    Freezer: 'yes',
    hairDryer: 'yes',
    aircondition: 'yes',
    tv: 'yes',
    privateenterance: 'yes',
    howmanypeople: '',
  });

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

  const handleimage = async (e) =>{
    setimageloading(true)
    var results = [];
    for(var i = 0; i <e.target.files.length; i++){  
      var imagefile = e.target.files[i]
      var result = await Uploadimage(imagefile)
      results.push(result);

    }
    setimageresults([...results])
    setimageloading(false)
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
      image: imageresults,
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
            {imageloading ? (
              <h1>...loading</h1>
            ) : (
              <>
                <label htmlFor="">attach the picture</label>
              </>
            )}
            <input
              type="file"
              onChange={handleimage}
              multiple
              accept="image/*"
            />
            <Imageuploadcontainer>
              {imageresults &&
                imageresults.map((imgurl, index) => {
                  return (
                    <img src={imgurl} alt={`uploaded${index}`} key={index} />
                  );
                })}
            </Imageuploadcontainer>

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
              <option value="1 room">1 room</option>
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
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label htmlFor="petavailable">Pet</label>
            <select
              name="petavailable"
              id="petavailable"
              value={postcredential.petavailable}
              onChange={handlecredentialchange}
              required
            >
              <option value="yes">Available</option>
              <option value="no">No available</option>
            </select>

            <label htmlFor="smoking">smoking</label>
            <select
              name="smoking"
              id="smoking"
              value={postcredential.smoking}
              onChange={handlecredentialchange}
              required
            >
              <option value="yes">Available</option>
              <option value="no">No available</option>
            </select>

            <label htmlFor="internet">Internet</label>
            <select
              name="internet"
              id="internet"
              value={postcredential.internet}
              onChange={handlecredentialchange}
              required
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label htmlFor="kitchen">Kitchen</label>
            <select
              name="kitchen"
              id="kitchen"
              value={postcredential.kitchen}
              onChange={handlecredentialchange}
              required
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label htmlFor="Laundry">Laundry</label>
            <select
              name="Laundry"
              id="Laundry"
              value={postcredential.Laundry}
              onChange={handlecredentialchange}
              required
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label htmlFor="Dryer">Dryer</label>
            <select
              name="Dryer"
              id="Dryer"
              value={postcredential.Dryer}
              onChange={handlecredentialchange}
              required
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label htmlFor="Fridge">Fridge</label>
            <select
              name="Fridge"
              id="Fridge"
              value={postcredential.Fridge}
              onChange={handlecredentialchange}
              required
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label htmlFor="Freezer">Freezer</label>
            <select
              name="Freezer"
              id="Freezer"
              value={postcredential.Freezer}
              onChange={handlecredentialchange}
              required
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label htmlFor="Freezer">Freezer</label>
            <select
              name="Freezer"
              id="Freezer"
              value={postcredential.Freezer}
              onChange={handlecredentialchange}
              required
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label htmlFor="aircondition">aircondition</label>
            <select
              name="aircondition"
              id="aircondition"
              value={postcredential.aircondition}
              onChange={handlecredentialchange}
              required
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label htmlFor="tv">tv</label>
            <select
              name="tv"
              id="tv"
              value={postcredential.tv}
              onChange={handlecredentialchange}
              required
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label htmlFor="privateenterance">privateenterance</label>
            <select
              name="privateenterance"
              id="privateenterance"
              value={postcredential.privateenterance}
              onChange={handlecredentialchange}
              required
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label htmlFor="howmanypeople">Number of people to share</label>
            <input
              type="number"
              name="howmanypeople"
              id="howmanypeople"
              value={postcredential.howmanypeople}
              onChange={handlecredentialchange}
              required
            />

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
