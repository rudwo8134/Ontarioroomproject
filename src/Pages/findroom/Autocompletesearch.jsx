import React, { useState, useEffect } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import scriptLoader from 'react-async-script-loader';
import styled from 'styled-components';
import { connect, useDispatch } from 'react-redux';
import { addressupdatestart } from '../../Redux/Rentcondo/rentcondo.action';
import { Redirect } from 'react-router-dom';

const Divcontainer = styled.div`
  width: 400px;
  position: absolute;
  transform: translateX(15px);
`;

const Autocompletesearch = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => setLoading(false), 1000);
  }, []);
  const [compeletedata, setcomplete] = useState(null);
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();
  const handleselect = async (value) => {
    const data = await geocodeByAddress(value);
    const geo = await getLatLng(data[0]);
    setcomplete({
      data: data,
      geo: geo,
      address: value,
    });
    setAddress(value);
    console.log('complete', compeletedata);
    await dispatch(addressupdatestart(compeletedata));
  };

  if (loading) {
    return <h1>...loading</h1>;
  }

  return (
    <PlacesAutocomplete
      value={address}
      onChange={setAddress}
      onSelect={handleselect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: 'Search Places ...',
              className: 'location-search-input',
            })}
            className="searchinput"
            placeholder="주소를 검색해주세요 :)"
          />
          <Divcontainer>
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </Divcontainer>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLEAPI}&libraries=places&callback=myCallbackFunc`,
])(Autocompletesearch);
