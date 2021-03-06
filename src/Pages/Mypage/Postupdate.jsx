import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import { StaticGoogleMap, Marker } from 'react-static-google-map';
import {
  updaterentcondopost,
  Uploadimage,
} from '../../Firebase/firebase.utils';
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
import Loader from 'react-loader-spinner';
import { Helmet } from 'react-helmet';
import SEO from '../../staticFiles/SeoTag';

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
    justify-content: flex-end;
    margin-top: 6rem;
    margin-bottom: 6rem;

    @media screen and (max-width: 476px) {
      margin-top: 1rem;
      width: 90vw;
      align-items: center;
    }
    .backbutton {
      height: 35px;
      width: 200px;
      background-color: #b5b5b5;
      border: none;
      color: ${CommonStyles.color.White};
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      cursor: pointer;
      transition: 0.3s ease-in-out all;
      margin-right: 1rem;
      @media screen and (max-width: 476px) {
        width: 140px;
      }
      :hover {
        transform: scale(1.05) translateY(-3px);
        color: ${CommonStyles.color.White};
        background-color: ${CommonStyles.color.PrimaryLight3};
      }
    }
    .post {
      width: 200px;
      height: 35px;
      background-color: ${CommonStyles.color.Primary};
      border: none;

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
      margin: 0;

      @media screen and (max-width: 476px) {
        width: 90vw;
      }
      .name {
        width: 100px;
        font-weight: 600;
        color: rgba(35, 31, 32, 0.61);
      }
      .buttoncontainer {
        width: 500px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 0;
        margin-left: 15px;
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
          border-radius: 8px;
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
          padding: 0rem 1rem;
          @media screen and (max-width: 476px) {
            width: 70vw;
          }
        }
        select,
        input {
          margin-top: 10px;
          margin-bottom: 10px;
          margin-left: 20px;
          width: 241px;
          height: 45px;
          box-shadow: 0px 3px 3px rgba(223, 27, 82, 0.25);
          background-color: rgba(255, 255, 255, 0.6);
          border-radius: 10px;
          border: 1px solid #df1b52;
        }
      }
    }
    .propertytype3 {
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
        width: 500px;
        height: 30px;
        border: 1px solid ${CommonStyles.color.Primary};
        box-shadow: 0px 4px 4px rgba(223, 27, 82, 0.25);
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 10px;
      }
    }
    .propertytype2 {
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
        margin-right: 1.5rem;
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
        border-radius: 8px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;
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
    margin: 50px 50px 30px 60px;
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
    align-items: center;
    width: 100%;
    margin-top: 20px;
    margin-left: 0.5rem;
    @media screen and (max-width: 476px) {
      width: 90vw;
    }
    span {
      color: ${CommonStyles.color.Primary};
      margin-right: 1rem;
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
      border-radius: 8px;
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
    justify-content: center;
    padding: 0rem 0rem 0rem 1rem;
    margin-bottom: ${CommonStyles.margin.Reuglar};
    color: rgba(35, 31, 32, 0.61);
    .name {
      width: 200px;
      font-weight: 700;
    }
    textarea {
      width: 100%;
      height: 340px;
      left: 2.29%;
      right: 2.87%;
      top: 13.7%;
      bottom: 12.6%;
      background: rgba(255, 255, 255, 0.6);
      box-shadow: 0px 4px 4px rgba(223, 27, 82, 0.25);
      border-radius: 10px;
      border: 1px solid ${CommonStyles.color.Primary};
      margin-left: 0.5rem;
      padding: 1rem 0rem;
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
  font-weight: 800;
  font-size: 0.8rem;
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
const Postrentroom = (props) => {
  const { user } = props;
  const { data: postdata } = props?.location?.state;
  const history = useHistory();
  const [next, setNext] = useState(false);
  const [address, setaddress] = useState(
    postdata ? postdata.address.Formattedaddress : []
  );
  const [lat, SetLat] = useState(null);
  const [imageresults, setimageresults] = useState([...postdata?.image]);
  const [imageloading, setimageloading] = useState(false);
  const [additionalContact, setAdditionalContact] = useState(false);
  const [noImage, setNoImage] = useState(false);
  const [backbuttonactive, setActive] = useState(false);
  const handlesubmit2 = async (e) => {
    e.preventDefault();
    const reultaddress = await handleaddressdata(address);
    updaterentcondopost({
      id: postdata.id,
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

  useEffect(() => {
    if (imageresults.length > 0) {
      setNoImage(false);
    }
  }, [imageresults]);
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
    houseType: postdata?.houseType ? postdata?.houseType : '',
    rentType: postdata?.rentType ? postdata?.rentType : '',
    rentFee: postdata?.rentFee ? postdata?.rentFee : '',
    additionalContact: postdata ? additionalContact : null,
    postTitle: postdata?.postTitle ? postdata?.postTitle : '',
    postDescription: postdata?.postDescription ? postdata?.postDescription : '',
    sex: postdata?.sex ? postdata?.sex : '',
    utility: postdata?.utility ? postdata?.utility : '',
    funished: postdata?.funished ? postdata?.funished : '',
    parking: postdata?.parking ? postdata?.parking : '',
    internet: postdata?.internet ? postdata?.internet : '',
    Laundry: postdata?.Laundry ? postdata?.Laundry : '',
    privateenterance: postdata?.privateenterance
      ? postdata?.privateenterance
      : '',
    smoking: postdata?.smoking ? postdata?.smoking : '',
    petavailable: postdata?.petavailable ? postdata?.petavailable : '',
    privateBathroom: postdata?.privateBathroom ? postdata?.privateBathroom : '',
    Fridge: postdata?.Fridge ? postdata?.Fridge : '',
    kitchen: postdata?.kitchen ? postdata?.kitchen : '',
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
  const handleimageclick = () => {
    if (imageresults.length === 0) {
      setNoImage(true);
      return;
    }
    if (backbuttonactive) {
      setNext(true);
    }
  };
  const handleImageDelete = (id) => {
    setimageresults(
      imageresults.filter((data) => {
        return data !== id;
      })
    );
  };
  const Submithandler = (e) => {
    e.preventDefault();
    if (!postcredential.houseType) {
      alert('???????????? ??????????????????');
      return;
    }
    if (!postcredential.rentType) {
      alert('?????? ????????? ??????????????????');
      return;
    }
    if (!lat) {
      alert('????????? ?????? ????????? ???????????????.');
    } else {
      setNext(true);
    }
  };
  const handlebackboutton = () => {
    setNext(false);
    setActive(true);
  };

  const searchOptions = {
    componentRestrictions: { country: ['ca'] },
  };

  const handleadditinal = (e) => {
    e.preventDefault();
    setAdditionalContact(e.target.value);
  };
  const isbigMobile = useMediaQuery({ query: '(max-width: 476px)' });

  const filter = [
    {
      name: '?????? ??????',
      button: ['???', '???', '????????????'],
      title: 'sex',
    },
    {
      name: '???????????? ??????',
      button: ['???', '?????????'],
      title: 'utility',
    },
    {
      name: '?????? ??????',
      button: ['???', '?????????'],
      title: 'funished',
    },
    {
      name: '????????? ??????',
      button: ['???', '?????????'],
      title: 'parking',
    },
    {
      name: '????????? ??????',
      button: ['???', '?????????'],
      title: 'internet',
    },
    {
      name: '????????? ??????',
      button: ['???', '?????????'],
      title: 'Laundry',
    },
    {
      name: '?????? ????????? ??????',
      button: ['???', '?????????'],
      title: 'privateenterance',
    },

    {
      name: '?????? ????????? ??????',
      button: ['???', '?????????'],
      title: 'privateBathroom',
    },
    {
      name: '?????? ????????? ??????',
      button: ['???', '?????????'],
      title: 'Fridge',
    },
    {
      name: '?????? ?????? ??????',
      button: ['???', '?????????'],
      title: 'kitchen',
    },
    {
      name: '?????? ??????',
      button: ['???', '?????????'],
      title: 'smoking',
    },
    {
      name: '??? ??????',
      button: ['???', '?????????'],
      title: 'petavailable',
    },
  ];

  return (
    <>
      <Helmet>
        <title>{SEO.title} | Edit Posted room</title>
        <meta name="description" content={`${SEO.description}`} />
        <meta name="keywords" content={SEO.keyword} />
      </Helmet>
      {next && (
        <Wrapper>
          <div className="nextheader">
            <h1 className="nextname">List your place</h1>
            <div className="skipbuttonconatiner">
              <h4>
                ??? ?????? ???????????? ?????? ?????? ???????????????. ????????? ?????? ?????????
                ??????????????????.
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
              <button onClick={handlebackboutton} className="backbutton">
                ?????? ??????
              </button>
              <form onSubmit={handlesubmit2}>
                <button type="submit" className="post">
                  ??? ?????????
                </button>
              </form>
            </div>
          </div>
        </Wrapper>
      )}
      {!next && (
        <Wrapper>
          <form name="formsubmit" onSubmit={Submithandler}>
            <div className="header">
              <h1 className="name">????????? ????????? ?????????!</h1>
            </div>
            <div className="body">
              <div className="left">
                <div className="propertytype">
                  <span className="name">??? ??????*</span>
                  <select
                    required
                    style={{ padding: '0rem 0.5rem' }}
                    onChange={handlecredentialchange}
                    name="houseType"
                    value={postcredential?.houseType}
                  >
                    <option value="?????????">?????????</option>
                    <option value="??????">??????</option>
                    <option value="?????????">?????????</option>
                    <option value="???????????????">???????????????</option>
                  </select>
                </div>
                <div className="propertytype">
                  <span className="name">?????? ??????*</span>
                  <select
                    required
                    style={{ padding: '0rem 0.5rem' }}
                    name="rentType"
                    value={postcredential?.rentType}
                    onChange={handlecredentialchange}
                  >
                    <option value="?????? ??????">????????????</option>
                    <option value="??? ??????">?????????</option>
                  </select>
                </div>

                <div className="propertytypeimage">
                  <span className="name">??????*</span>
                  {imageloading ? (
                    <>
                      <Loader
                        type="TailSpin"
                        color={CommonStyles.color.Primary}
                        height={30}
                        width={30}
                        timeout={50000}
                      />
                    </>
                  ) : (
                    <>
                      <label
                        className="input-file-button"
                        htmlFor="photoupload"
                      >
                        ?????? ??????
                      </label>
                    </>
                  )}
                  <input
                    id="photoupload"
                    type="file"
                    onChange={handleimage}
                    multiple
                    name="imageloader"
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
                  <span className="name">??????*</span>
                  <div className="locationtype">
                    <PlacesAutocomplete
                      value={address}
                      onChange={handlechange}
                      onSelect={handleselect}
                      searchOptions={searchOptions}
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
                              placeholder: '????????? ??????????????????',
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
                    <Searchbutton onClick={buttonclick}>??????</Searchbutton>
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
                            : postdata?.address
                            ? `${postdata?.address?.lat}, ${postdata?.address?.lng}`
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
                <div className="propertytype2">
                  <span className="name">?????????(???)*</span>
                  <input
                    required
                    style={{ padding: '0rem 0.5rem' }}
                    onChange={handlecredentialchange}
                    value={postcredential?.rentFee}
                    name="rentFee"
                    type="text"
                    placeholder="CAD"
                  />
                </div>
                <div className="propertytype2">
                  <span className="name">???????????????</span>
                  <AdditionalContactSelect onChange={handleadditinal}>
                    <select
                      style={{ padding: '0rem 0.5rem' }}
                      name="additional"
                      id="additional"
                      defaultValue=""
                    >
                      <option value="">
                        ?????? (?????? ??? ????????? ????????? ??????)
                      </option>
                      <option value="1">????????????</option>
                      <option value="2">????????????ID</option>
                    </select>
                    {additionalContact && (
                      <input
                        required
                        onChange={handlecredentialchange}
                        value={postcredential?.additionalContact}
                        name="additionalContact"
                        type="text"
                        placeholder={
                          additionalContact === '1'
                            ? '-??? ???????????? ???????????? ??????????????????'
                            : additionalContact === '2'
                            ? '???????????? ???????????? ??????????????????.'
                            : null
                        }
                      />
                    )}
                  </AdditionalContactSelect>
                </div>

                <div className="propertytype3">
                  <span className="name">??????*</span>
                  <input
                    className="titleInputpro"
                    required
                    onChange={handlecredentialchange}
                    value={postcredential?.postTitle}
                    name="postTitle"
                    type="text"
                  />
                </div>

                <div className="description">
                  <textarea
                    required
                    onChange={handlecredentialchange}
                    value={postcredential?.postDescription}
                    name="postDescription"
                    id="postDescription"
                    cols="30"
                    rows="20"
                    placeholder=" 
                      ????????? ????????? ??????????????????"
                  ></textarea>
                </div>
                <div className="buttoncontainer">
                  {noImage ? <span>????????? ????????? ????????????</span> : null}
                  <button
                    onClick={handleimageclick}
                    className="buttoncontinue"
                    type="submit"
                  >
                    ??????
                  </button>
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
