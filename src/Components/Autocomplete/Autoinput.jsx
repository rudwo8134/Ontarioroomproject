import React, { useState, useEffect } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import scriptLoader from 'react-async-script-loader';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import { RiMapPinFill } from 'react-icons/ri';

const LoaderContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Responsivediv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  .error {
    position: absolute;
    top: 4vh;
    display: flex;
    justify-content: center;
    width: 100%;
    color: ${CommonStyles.color.Dark};
  }
  .column {
    display: flex;
    flex-direction: row;
    align-items: center;
    input {
      width: 20vw;
      height: 5vh;
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;
      border: 1px solid grey;
      padding: 1rem;
      border-right: none;
      @media screen and (max-width: 476px) {
        width: 60vw;
      }
    }
    button {
      width: 5vw;
      height: 5vh;
      border-top-right-radius: 16px;
      border-bottom-right-radius: 16px;
      border: 1px solid grey;
      background-color: ${CommonStyles.color.Primary};
      color: white;
      font-size: 1.1rem;
      border: none;
      @media screen and (max-width: 476px) {
        width: 20vw;
        font-size: 1rem;
      }
      @media screen and (max-width: 320px) {
        font-size: 0.7rem;
      }
    }
  }
  .suggetioncontainer {
    position: absolute;
    z-index: 30;
    top: 5vh;
    left: 0;
    background-color: white;
    width: 80%;
    @media screen and (max-width: 476px) {
      width: 60vw;
    }
    .suggetionin {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 1rem;
      overflow-y: scroll;
      :hover {
        background-color: ${CommonStyles.color.Primary};
        svg {
          color: #fff;
        }
      }
      svg {
        font-size: 0.9rem;
        width: 2rem;
        height: 2rem;
        border-radius: 8px;
        margin-right: 1rem;
        color: ${CommonStyles.color.Primary};
      }
      div {
        width: 80%;
        span {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

const Autoinput = () => {
  const [Loading, setLoading] = useState(true);
  const [address, setAddress] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [submitting, setsubmitting] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleselect = async (value) => {
    const data1 = await geocodeByAddress(value);
    const geo = await getLatLng(data1[0]);

    setData({
      data: data1,
      geo: geo,
      address: value,
    });
    setAddress(value);
  };

  const handleclick = () => {
    if (data) {
      setError(false);
      setsubmitting(true);
      history.push({
        pathname: '/rentcondo',
        state: {
          params: { ...data },
        },
      });
      setsubmitting(false);
    } else {
      setError(true);
    }
  };

  const searchOptions = {
    componentRestrictions: { country: ['ca'] },
  };

  if (Loading) {
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
      searchOptions={searchOptions}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <Responsivediv>
          <div className="column">
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
              className="searchinput"
              placeholder="주소 입력 후 Enter키를 눌러주세요!"
            />
            <button onClick={handleclick}>
              {!submitting ? (
                '검색하기'
              ) : (
                <Loader
                  type="TailSpin"
                  color={CommonStyles.color.Primary}
                  height={40}
                  width={40}
                  timeout={3000}
                />
              )}
            </button>
          </div>
          {error && (
            <h3 className="error">검색하기 위해서 주소를 입력해주세요</h3>
          )}
          {loading && (
            <Loader
              type="TailSpin"
              color={CommonStyles.color.Primary}
              height={5}
              width={5}
              timeout={3000}
            />
          )}
          <div className="suggetioncontainer">
            {suggestions.map((suggestion) => {
              return (
                <div className="suggetionin">
                  <RiMapPinFill />
                  <div
                    className="suggestion"
                    {...getSuggestionItemProps(suggestion)}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Responsivediv>
      )}
    </PlacesAutocomplete>
  );
};

export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLEAPI}&libraries=places&callback=myCallbackFunc`,
])(Autoinput);
