import React, { useState } from 'react';
import styled from 'styled-components';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import { StaticGoogleMap, Marker } from 'react-static-google-map';
import { Uploadimage } from '../../Firebase/firebase.utils';
import Noimage from '../../assets/noimage.png';
import PlacesAutocomplete from 'react-places-autocomplete';
import { v4 as uuid } from 'uuid';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../Redux/Users/user.selector';
import { rentcondopoststart } from '../../Redux/Rentcondo/rentcondo.action';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
import { MdCancel } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';

const Wrapper = styled.div`
  border-top: 1px solid ${CommonStyles.color.Darkbold1};
  width: 1300px;
  margin: 0 auto;
  margin-top: 90px;
  margin-bottom: 70px;
  @media screen and (max-width: 476px) {
    width: 90vw;
  }

  .submitbutton {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 476px) {
      margin-top: 1rem;
      width: 90vw;
    }
    .backbutton {
      height: 35px;
      background-color: white;
      border: none;
      border-radius: 16px;
      color: ${CommonStyles.color.Primary};
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      cursor: pointer;
      transition: 0.3s ease-in-out all;
      :hover {
        transform: scale(1.05) translateY(-3px);
        color: ${CommonStyles.color.Dark};
      }
    }
    .post {
      width: 200px;
      height: 35px;
      background-color: ${CommonStyles.color.Primary};
      border: none;
      border-radius: 16px;
      color: ${CommonStyles.color.White};
      font-size: 13px;
      font-weight: 700;
      text-transform: capitalize;
      cursor: pointer;
      transition: 0.3s ease-in-out all;
      :hover {
        transform: scale(1.05) translateY(-3px);
        color: ${CommonStyles.color.Dark};
      }
    }
  }
  .nextheader {
    margin-top: 60px;
    margin-bottom: 30px;
    .nextname {
      text-transform: uppercase;
      font-size: ${CommonStyles.fontSize.Large};
      color: ${CommonStyles.color.Primary};
    }
    .skipbuttonconatiner {
      display: flex;
      flex-direction: row;
      align-items: center;
      button {
        width: 70px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid ${CommonStyles.color.Primary};
        background-color: white;
        border-radius: 30px;
        margin-left: 10px;
        color: ${CommonStyles.color.Primary};
        font-size: 15px;
        transition: all 0.3s ease-in-out;
        text-transform: uppercase;
        cursor: pointer;
        :hover {
          background-color: ${CommonStyles.color.Primary};
          color: white;
        }
      }
    }
  }
  .nextbody {
    width: 1300px;
    margin: 0 auto;
    @media screen and (max-width: 476px) {
      width: 90vw;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .container {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 2rem;
      @media screen and (max-width: 476px) {
        width: 90vw;
      }
      .name {
        width: 100px;
        font-weight: 600;
        color: rgba(35, 31, 32, 0.61);
      }
      .buttoncontainer {
        margin-left: 15px;
        width: 500px;
        @media screen and (max-width: 476px) {
          width: 70vw;
          display: flex;
          align-items: center;
        }
        button {
          width: 131px;
          height: 30px;
          border: 1px solid ${CommonStyles.color.Primary};
          background-color: white;
          border-radius: 16px;
          color: ${CommonStyles.color.Primary};
          margin: 10px;
          @media screen and (max-width: 476px) {
            width: 30vw;
          }
        }
      }
    }
  }
  .header {
    margin: 50px 20px 60px 0;
    @media screen and (max-width: 476px) {
      margin: 1rem 1rem 1rem 1rem;
    }
    .name {
      text-transform: uppercase;
      font-size: 24px;
      color: ${CommonStyles.color.Primary};
      font-weight: ${CommonStyles.bold.Bold};
      margin-bottom: -20px;
      @media screen and (max-width: 476px) {
        font-size: 1.4rem;
        margin-bottom: 2rem;
      }
    }
  }
  .body {
    display: flex;
    flex-direction: row;
    width: 1300px;
    margin: 0 auto;
    font-weight: 700;
    color: rgba(35, 31, 32, 0.61);
    justify-content: center;
    @media screen and (max-width: 476px) {
      width: 90vw;
      flex-direction: column;
    }

    .left {
      flex: 1;
      margin: 0 auto;
      .mapcontainer {
        margin-top: 30px;
        margin-left: 20px;
      }
      .location {
        margin-top: ${CommonStyles.margin.Reuglar};
        .name {
          margin-left: 20px;
          margin-bottom: 25px;
          font-weight: 700;
          color: rgba(35, 31, 32, 0.61);
        }
      }
      .locationtype {
        width: 97%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 476px) {
          width: 90vw;
        }
        .locationinput {
          width: 446px;
          @media screen and (max-width: 476px) {
            width: 70vw;
          }
        }
        select,
        input {
          margin-top: 10px;
          margin-left: 20px;
          width: 241px;
          height: 45px;
          box-shadow: 0px 4px 4px rgba(223, 27, 82, 0.25);
          background-color: rgba(255, 255, 255, 0.6);
          border-radius: 10px;
          border: 0px solid #df1b52;
        }
      }
    }
    .propertytype {
      width: 98%;
      display: flex;
      justify-self: flex-end;
      flex-direction: row;
      justify-content: space-between;
      align-items: space-between;
      margin-left: 20px;
      margin-bottom: 20px;
      @media screen and (max-width: 476px) {
        width: 85vw;
      }
      .name {
        font-weight: ${CommonStyles.bold.bold};
        font-size: 17px;
        color: rgba(35, 31, 32, 0.61);
      }
      select,
      input {
        width: 230px;
        height: 30px;
        border: 1px solid ${CommonStyles.color.Primary};
        box-shadow: 0px 4px 4px rgba(223, 27, 82, 0.25);
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 10px;
      }
    }
    .propertytypeimage {
      width: 51%;
      display: flex;
      justify-self: flex-end;
      flex-direction: row;
      justify-content: space-between;
      align-items: space-between;
      margin-left: 20px;
      margin-bottom: 20px;
      @media screen and (max-width: 476px) {
        width: 85vw;
        justify-content: space-between;
        flex-direction: row;
      }

      .name {
        font-weight: ${CommonStyles.bold.bold};
        font-size: 17px;
        color: rgba(35, 31, 32, 0.61);
      }

      .photoupload,
      #photoupload {
        display: none;
      }

      .input-file-button {
        margin: 3px 145px 0 0;
        width: 66px;
        height: 24px;
        font-size: 11px;
        text-align: center;
        color: #fff;
        background: #df1b52;
        border: 1px solid ${CommonStyles.color.Primary};
        border-radius: 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        @media screen and (max-width: 476px) {
          margin: 0;
        }
      }
    }
  }
  .divider {
    //background-color: ${CommonStyles.color.Darkbold2};
    border: 1.4px solid rgba(0, 0, 0, 0.1);
    width: 2px;
    height: 520px;
    margin: 50px 80px 30px 60px;
    @media screen and (max-width: 476px) {
      display: none;
    }
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    @media screen and (max-width: 476px) {
      margin-top: 1rem;
      width: 80vw;
      justify-content: space-between;
      align-items: center;
    }
  }

  .propertytypeimage {
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: ${CommonStyles.margin.Reuglar};
    .name {
      font-weight: 700;
      color: rgba(35, 31, 32, 0.61);
    }
    h1 {
      font-size: 16px;
      width: 250px;
      font-weight: 700;
      color: ${CommonStyles.color.Primary};
    }
    label {
      width: 250px;
      font-weight: 700;
      color: ${CommonStyles.color.Darkbold3};
    }
  }
  .buttoncontainer {
    display: flex;
    justify-content: flex-end;
    width: 500px;
    margin-top: 20px;
    @media screen and (max-width: 476px) {
      width: 90vw;
    }
    button {
      width: 123px;
      height: 37px;
      background-color: ${CommonStyles.color.Primary};
      border: 1px solid #df1b52;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      color: ${CommonStyles.color.White};
      font-size: 13px;
      font-weight: 700;
      text-transform: capitalize;
      cursor: pointer;
      transition: 0.3s ease-in-out all;
      :hover {
        transform: scale(1.05) translateY(-3px);
        color: ${CommonStyles.color.Dark};
      }
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: ${CommonStyles.margin.Reuglar};
    color: rgba(35, 31, 32, 0.61);
    .name {
      width: 200px;
      font-weight: 700;
    }
    textarea {
      margin-top: 20px;
      width: 496px;
      height: 269px;
      left: 2.29%;
      right: 2.87%;
      top: 13.7%;
      bottom: 12.6%;
      background: rgba(255, 255, 255, 0.6);
      box-shadow: 0px 4px 4px rgba(223, 27, 82, 0.25);
      border-radius: 10px;
      border: 0px solid #df1b52;
      @media screen and (max-width: 476px) {
        width: 80vw;
      }
    }
  }

  .propertytype {
    width: 85%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: ${CommonStyles.margin.Reuglar};
    .name {
      width: 200px;
      font-weight: 700;
      color: rgba(35, 31, 32, 0.61);
    }
    select,
    input {
      width: 200px;
      height: 30px;
      border: 0px solid ${CommonStyles.color.Primary};
      background-color: rgba(255, 255, 255, 0.6);
      box-shadow: 0px 4px 4px rgba(223, 27, 82, 0.25);
      border-radius: 10px;
    }

    .titleInput {
      width: 350px;
      height: 30px;
      border: 0px solid ${CommonStyles.color.Primary};
      background-color: rgba(255, 255, 255, 0.6);
      box-shadow: 0px 4px 4px rgba(223, 27, 82, 0.25);
      border-radius: 10px;
    }
    .titleInputpro {
      width: 415px;
      height: 30px;
      border: 1px solid ${CommonStyles.color.Primary};
      background-color: rgba(255, 255, 255, 0.6);
      box-shadow: 0px 4px 4px rgba(223, 27, 82, 0.25);
      border-radius: 10px;
    }
  }
`;

const Imageuploadcontainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2rem;
  justify-content: center;
  align-items: center;

  img {
    max-height: 100px;
    max-width: 100px;
    border-radius: 6px;
  }
`;
const Searchbutton = styled.button`
  width: 100px;
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${CommonStyles.color.Primary};
  border: none;
  color: white;
  border-radius: 16px;
  margin-left: 10px;
  @media screen and (max-width: 476px) {
    width: 10vw;
  }
`;

const Xbutton = styled(MdCancel)`
  position: absolute;
  top: 5px;
  z-index: 30;
  right: 5px;
  font-size: 1rem;
  color: ${CommonStyles.color.Dark};
  cursor: pointer;
  :hover {
    font-size: 1.3rem;
  }
`;

const AdditionalContactSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    padding: 1rem;
    margin-top: 1rem;
  }
`;
const Postrentroom = ({ poststart, user }) => {
  const history = useHistory();
  const [next, setNext] = useState(false);
  const [address, setaddress] = useState([]);
  const [lat, SetLat] = useState(null);
  const [imageresults, setimageresults] = useState([]);
  const [imageloading, setimageloading] = useState(false);
  const [additionalContact, setAdditionalContact] = useState(false);

  const handlesubmit2 = async (e) => {
    e.preventDefault();
    const reultaddress = await handleaddressdata(address);
    poststart({
      id: uuid(),
      userinfo: {
        userid: user?.id,
        postname: user?.displayName,
        phonenumber: user?.phonenumber,
        email: user?.email,
      },
      image: imageresults,
      address: reultaddress,
      ...postcredential,
    });
    history.push('/');
  };
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
      await SetLat(result);
      return result;
    } catch (err) {
      console.log(err);
    }
  };

  const [postcredential, setpostcredential] = useState({
    unit: '',
    deposit: '',
    sex: '',
    utility: '',
    funished: '',
    monthlyfee: '',
    roomtype: '',
    sqf: '',
    parking: 'yes',
    availabledate: '',
    posttitle: '',
    description: '',
    petavailable: 'yes',
    smoking: 'yes',
    internet: 'yes',
    privateBathroom: '',
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
    properytype: '',
  });

  const handlecredentialchange = (e) => {
    const { name, value } = e.target;
    setpostcredential({ ...postcredential, [name]: value });
  };
  const handlechange = (value) => {
    setaddress(value);
  };
  const handleselect = (select) => {
    setaddress(select);
  };
  const buttonclick = () => {
    handleaddressdata(address);
  };
  const handleimage = async (e) => {
    setimageloading(true);
    var results = [];
    for (var i = 0; i < e.target.files.length; i++) {
      var imagefile = e.target.files[i];
      var result = await Uploadimage(imagefile);
      results.push(result);
    }
    setimageresults([...imageresults, ...results]);
    setimageloading(false);
  };
  const handleImageDelete = (id) => {
    setimageresults(
      imageresults.filter((data) => {
        return data !== id;
      })
    );
  };
  const submithandler = (e) => {
    e.preventDefault();
    setNext(true);
  };

  const handleadditinal = (e) => {
    e.preventDefault();
    setAdditionalContact(e.target.value);
  };
  const isbigMobile = useMediaQuery({ query: '(max-width: 476px)' });

  const filter = [
    {
      name: '선호 성별',
      button: ['남', '여', '남녀무관'],
      title: 'sex',
    },
    {
      name: '유틸리티 포함',
      button: ['네', '아니오'],
      title: 'utility',
    },
    {
      name: 'funished',
      button: ['네', '아니오'],
      title: 'funished',
    },
    {
      name: '주차장',
      button: ['네', '아니오'],
      title: 'parking',
    },
    {
      name: '인터넷',
      button: ['네', '아니오'],
      title: 'internet',
    },
    {
      name: '세탁기',
      button: ['네', '아니오'],
      title: 'Laundry',
    },
    {
      name: '개인 출입문',
      button: ['네', '아니오'],
      title: 'privateenterance',
    },
    {
      name: '흡연',
      button: ['네', '아니오'],
      title: 'smoking',
    },
    {
      name: '펫',
      button: ['네', '아니오'],
      title: 'petavailable',
    },
    {
      name: '개인 화장실',
      button: ['네', '아니오'],
      title: 'privateBathroom',
    },
    {
      name: '개인 냉장고',
      button: ['네', '아니오'],
      title: 'Fridge',
    },
    {
      name: '주방',
      button: ['네', '아니오'],
      title: 'kitchen',
    },
  ];

  return (
    <>
      {next && (
        <Wrapper>
          <div className="nextheader">
            <h1 className="nextname">List your place</h1>
            <div className="skipbuttonconatiner">
              <h4>
                꼭 맞는 세입자를 찾기 위한 과정입니다. 최대한 많은 항목을
                응답해주세요.
              </h4>
              {/* <button type="submit" className="post">
                Skip {'>>'}
              </button> */}
            </div>
          </div>
          <div className="nextbody">
            {filter.map((data, index) => {
              const { title } = data && data;
              return (
                <div className="container" key={index}>
                  <h5 className="name">{data?.name}</h5>
                  <div className="buttoncontainer">
                    {data?.button?.map((data2, index) => {
                      const filtercolor =
                        postcredential &&
                        Object.entries(postcredential)?.filter((data) => {
                          return data[0] === title;
                        });
                      return (
                        <button
                          onClick={handlecredentialchange}
                          name={title}
                          value={data2}
                          key={index}
                          style={{
                            backgroundColor:
                              filtercolor[0][1] === data2 && `#e85f85`,
                            color: filtercolor[0][1] === data2 && 'white',
                          }}
                        >
                          {data2}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <div className="submitbutton">
              <button onClick={() => setNext(false)} className="backbutton">
                {'<'}back
              </button>
              <form onSubmit={handlesubmit2}>
                <button type="submit" className="post">
                  글 올리기
                </button>
              </form>
            </div>
          </div>
        </Wrapper>
      )}
      {!next && (
        <Wrapper>
          <form onSubmit={submithandler}>
            <div className="header">
              <h1 className="name">장소를 설명해 주세요!</h1>
            </div>
            <div className="body">
              <div className="left">
                <div className="propertytype">
                  <span className="name">집 유형*</span>
                  <select
                    required
                    onChange={handlecredentialchange}
                    name="properytype"
                    value={postcredential?.properytype}
                  >
                    <option value="apart">아파트</option>
                    <option value="condo">콘도</option>
                    <option value="house">하우스</option>
                    <option value="townhouse">타운하우스</option>
                  </select>
                </div>
                <div className="propertytype">
                  <span className="name">렌트 유형*</span>
                  <select
                    required
                    name="roomtype"
                    value={postcredential?.roomtype}
                    onChange={handlecredentialchange}
                  >
                    <option value="whole">전체렌트</option>
                    <option value="room">룸렌트</option>
                  </select>
                </div>

                <div className="propertytypeimage">
                  <span className="name">사진*</span>
                  {imageloading ? (
                    <h1>...loading</h1>
                  ) : (
                    <>
                      <label
                        className="input-file-button"
                        htmlFor="photoupload"
                      >
                        파일 선택
                      </label>
                    </>
                  )}
                  <input
                    id="photoupload"
                    required
                    type="file"
                    onChange={handleimage}
                    multiple
                    accept="image/*"
                  />
                </div>
                <Imageuploadcontainer>
                  {imageresults ? (
                    imageresults.map((imgurl, index) => {
                      return (
                        <div style={{ position: 'relative' }}>
                          <Xbutton onClick={() => handleImageDelete(imgurl)} />
                          <img
                            src={imgurl}
                            alt={`uploaded{index}`}
                            key={index}
                          />
                        </div>
                      );
                    })
                  ) : (
                    <img src={Noimage} alt="noimage" />
                  )}
                </Imageuploadcontainer>

                <div className="location">
                  <span className="name">주소*</span>
                  <div className="locationtype">
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
                            required
                            {...getInputProps({
                              placeholder: '주소를 입력해주세요',
                            })}
                            className="locationinput"
                          />
                          <div
                            style={{
                              position: 'absolute',
                              width: '250px',
                              marginLeft: '40px',
                            }}
                          >
                            {loading && <div>...Searching</div>}
                            {suggestions.map((suggestions, index) => {
                              const style = suggestions.active
                                ? {
                                    backgroundColor: `${CommonStyles.color.Primary}`,
                                    cursor: 'pointer',
                                    borderBottom: '1px solid black',
                                    fontSize: '14px',
                                  }
                                : {
                                    backgroundColor: '#ffffff',
                                    cursor: 'pointer',
                                    borderBottom: '1px solid black',
                                    fontSize: '14px',
                                  };
                              return (
                                <div
                                  key={index}
                                  {...getSuggestionItemProps(suggestions, {
                                    style,
                                  })}
                                >
                                  {suggestions.description}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </PlacesAutocomplete>
                    <Searchbutton onClick={buttonclick}>검색</Searchbutton>
                  </div>
                  <div className="mapcontainer">
                    <StaticGoogleMap
                      apiKey={process.env.REACT_APP_GOOGLEAPI}
                      size={isbigMobile ? '350x200' : '525x300'}
                      className="img-fluid"
                      zoom="17"
                    >
                      <Marker
                        location={
                          lat
                            ? `${lat?.lat}, ${lat?.lng}`
                            : `43.651070, -79.347015`
                        }
                        label="H"
                        color="red"
                      />
                    </StaticGoogleMap>
                  </div>
                </div>
              </div>
              <div className="divider"></div>
              <div className="right">
                <div className="propertytype">
                  <span className="name">렌트비(월)*</span>
                  <input
                    required
                    onChange={handlecredentialchange}
                    value={postcredential?.monthlyfee}
                    name="monthlyfee"
                    type="text"
                    placeholder="CAD"
                  />
                </div>
                <div className="propertytype">
                  <span className="name">추가연락처</span>
                  <AdditionalContactSelect onChange={handleadditinal}>
                    <select name="additional" id="additional" defaultValue="">
                      <option value="">없음</option>
                      <option value="1">전화번호</option>
                      <option value="2">카카오톡ID</option>
                    </select>
                    {additionalContact && (
                      <input
                        required
                        onChange={handlecredentialchange}
                        value={postcredential?.posttitle}
                        name="posttitle"
                        type="text"
                        placeholder={
                          additionalContact === '1'
                            ? '-은 생략하고 전화번를 입력해주세요'
                            : additionalContact === '2'
                            ? '카카오톡 아이디를 입력해주세요.'
                            : null
                        }
                      />
                    )}
                  </AdditionalContactSelect>
                </div>

                <div className="propertytype">
                  <span className="name">제목*</span>
                  <input
                    className="titleInputpro"
                    required
                    onChange={handlecredentialchange}
                    value={postcredential?.posttitle}
                    name="posttitle"
                    type="text"
                  />
                </div>

                <div className="description">
                  <span className="name">설명</span>
                  <textarea
                    required
                    onChange={handlecredentialchange}
                    value={postcredential?.description}
                    name="description"
                    id="description"
                    cols="30"
                    rows="10"
                    placeholder=" 
                        입력.."
                  ></textarea>
                </div>
                <div className="buttoncontainer">
                  <button type="submit">계속</button>
                </div>
              </div>
            </div>
          </form>
        </Wrapper>
      )}
    </>
  );
};
const maptoprops = createStructuredSelector({
  user: selectCurrentUser,
});

const dispathtoprops = (dispatch) => ({
  poststart: (data) => dispatch(rentcondopoststart(data)),
});

export default withRouter(connect(maptoprops, dispathtoprops)(Postrentroom));
