import React, { useState, useEffect } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import scriptLoader from 'react-async-script-loader';
import styled from 'styled-components';
import {  useDispatch } from 'react-redux';
import { addressupdatestart } from '../../Redux/Rentcondo/rentcondo.action';
import { useHistory } from 'react-router-dom';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import Loader from 'react-loader-spinner';

const Divcontainer = styled.div`
  width: ${({ findroom }) => (findroom ? '230px' : '400px')};
  position: absolute;
  transform: translateX(15px);
  @media screen and (max-width: 375px) {
    width: 230px;
    top: ${({ ismediumMobile }) => (ismediumMobile ? '' : '50vh;')};
  }
`;

const EnterKey = styled.span`
  color: ${CommonStyles.color.Primary};
  width: 480px;
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
`;

const EnterKeyForFind = styled.span`
  color: ${CommonStyles.color.Primary};
  width: 480px;
  position: absolute;
  left: 105%;
  font-weight: 700;
  top: 25%;
  @media screen and (max-width: 476px) {
    top: 105%;
    left: 30%;
  }
`;
const LoaderContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Autocompletesearch = ({
  findroom = false,
  setSearchInMap = null,
  showList,
  setShowList,
  isbigMobile,
  ismediumMobile,
  home = false,
}) => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => setLoading(false), 1000);
  }, []);
  const [compeletedata, setcomplete] = useState(null);
  const [address, setAddress] = useState('');
  const [enter, setenter] = useState(false);
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
    if (compeletedata) {
      console.log('complete', compeletedata);
      if (setSearchInMap) {
        setSearchInMap(compeletedata);
        setenter(false);
        if (isbigMobile) {
          setShowList(false);
          return;
        }

        return;
      }
      await dispatch(addressupdatestart(compeletedata));

      history.push({
        pathname: '/rentcondo',
        state: { params: compeletedata },
      });
      setenter(false);
    }
    if (!compeletedata) {
      setenter(true);
    }
  };

  if (loading) {
    return (
      <LoaderContainer>
        <Loader
          type="TailSpin"
          color={CommonStyles.color.Primary}
          height={40}
          width={40}
          timeout={3000}
        />
      </LoaderContainer>
    );
  }

  return (
    <PlacesAutocomplete
      value={address}
      onChange={setAddress}
      onSelect={handleselect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="responsivediv">
          <input
            {...getInputProps({
              placeholder: 'Search Places ...',
              className: 'location-search-input',
            })}
            className="searchinput"
            placeholder="주소 입력 후 Enter키를 눌러주세요!"
          />
          <Divcontainer ismediumMobile={ismediumMobile} findroom={findroom}>
            {loading && (
              <Loader
                type="TailSpin"
                color={CommonStyles.color.Primary}
                height={5}
                width={5}
                timeout={3000}
              />
            )}
            {suggestions.map((suggestion) => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              // inline style for demonstration purpose
              const style = suggestion.active
                ? {
                    backgroundColor: `#fff`,
                    cursor: 'pointer',
                    color: `${CommonStyles.color.Primary}`,
                    fontSize: '0.9rem',
                    marginLeft: home && '7rem',
                  }
                : {
                    backgroundColor: `${CommonStyles.color.White}`,
                    color: '#254261',
                    cursor: 'pointer',
                    borderBottom: `1px solid #fff`,
                    fontSize: '0.9rem',
                    marginLeft: home && '7rem',
                  };
              return (
                <div
                  className="suggestion"
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
            {!findroom && (
              <EnterKey>{enter && 'ENTER키를 눌러주세요'}</EnterKey>
            )}
          </Divcontainer>
          {findroom && (
            <EnterKeyForFind>{enter && 'ENTER키를 눌러주세요'}</EnterKeyForFind>
          )}
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLEAPI}&libraries=places&callback=myCallbackFunc`,
])(Autocompletesearch);
