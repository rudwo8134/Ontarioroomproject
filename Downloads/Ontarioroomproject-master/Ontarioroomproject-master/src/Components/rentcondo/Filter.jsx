import React,{useState} from 'react'
import styled from 'styled-components'
import style from '../../static/staticcss';
import { Filterdata } from '../../static/staticdata';
import { RiPinDistanceFill } from 'react-icons/ri';
import { connect } from 'react-redux';
import { filterdatasuccess } from '../../Redux/Rentcondo/rentcondo.action';

const Filterbox = styled.div`
  position: absolute;
  top: 3rem;
  left: 0;
  width: 440px;
  height: 70vh;
  overflow-x: scroll;
  background: white;
  display: ${({ filter }) => (filter ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  .title {
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    font-size: 1.6rem;
    font-weight: 500;
    svg {
      font-weight: 700;
      font-size: 1.8rem;
      margin-right: 0.5rem;
      color: ${style.backgroundColor.blackLight};
    }
  }
  .categoryContainer {
    padding: 12px;
    width: 100%;
    display: flex;
    .Selector {
      width: 150px;
      border: none;
      font-size: 1.1rem;
      text-transform: capitalize;
      background: ${style.backgroundColor.primaryLight};
      border-radius: 30px;
      padding: 0.3rem;
    }
    span {
      display: flex;

      align-items: center;
      width: 100%;
      text-align: start;
      font-size: 1.2rem;
      svg {
        margin-right: 0.5rem;
        color: ${style.backgroundColor.primaryDark};
      }
    }
  }
  .monthlyfeecontainer {
    padding: 12px;
    width: 100%;
    display: flex;
    flex-direction: column;
    span {
      display: flex;
      align-items: center;
      width: 100%;
      text-align: start;
      font-size: 1.2rem;
      svg {
        margin-right: 0.5rem;
        color: ${style.backgroundColor.primaryDark};
      }
    }
    .monthlyinputcontainer {
      margin-top: 1rem;
      width: 100%;
      .maxmonth{
        margin-left: 4rem;
      } 
      label {
        margin-right: 1rem;
        font-size: 0.8rem;
      }
      input {
        width: 80px;
        border:none;
        border-bottom: 2px solid black;
      }
    }
  }
`;
const Submitbutton = styled.button`
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 1rem 3rem;
  border-radius: 30px;
  border:none;
  background: ${style.backgroundColor.primaryLight};
  color: white;
  font-size: 1.2rem;
`

const Filter = ({ filter, filtersuccess }) => {
  const [filterinfo, setfilterinfo] = useState({
    minmonth: '',
    maxmonth: '',
    distance: '5',
    Parking: 'NA',
    Pet: 'NA',
    Smoking: 'NA',
    Internet: 'NA',
    Kitchen: 'NA',
    Laundry: 'NA',
    Dryer: 'NA',
    Fridge: 'NA',
    Freezer: 'NA',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setfilterinfo({ ...filterinfo, [name]: value });
  };

  const handlesumbit = () =>{
    filtersuccess(filterinfo);
  }

  return (
    <Filterbox filter={filter && filter.toString()}>
      <h1 className="title">
        {Filterdata.filtericon}
        {Filterdata.title}
      </h1>
        <div className="monthlyfeecontainer">
          <span>
            {Filterdata.paymenticon}
            {Filterdata.payment}
          </span>
          <div className="monthlyinputcontainer">
            <label htmlFor="minmonth">Minimum</label>
            <input
              type="number"
              id="minmonth"
              name="minmonth"
              onChange={handleChange}
            />
            $
            <label htmlFor="maxmonth" className="maxmonth">
              Maximum
            </label>
            <input
              type="number"
              id="maxmonth"
              name="maxmonth"
              onChange={handleChange}
            />
            $
          </div>
        </div>

        <div className="categoryContainer">
          <span>
            <RiPinDistanceFill />
            Distance
          </span>
          <select
            required
            className="Selector"
            onChange={handleChange}
            name="distance"
          >
            <option value="5">5km</option>
            <option value="10">10km</option>
            <option value="20">20km</option>
            <option value="30">30km</option>
          </select>
        </div>

        {Filterdata.Category.map((category, index) => {
          return (
            <div className="categoryContainer" key={index}>
              <span>
                {category.icon}
                {category.name}
              </span>
              <select
                required
                className="Selector"
                onChange={handleChange}
                name={category.name}
              >
                <option value="NA">Not choose</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          );
        })}
        <Submitbutton onClick={handlesumbit}>Apply</Submitbutton>
      
    </Filterbox>
  );
};

const dispatchfunction = (dispatch) => ({
  filtersuccess: (filter) => dispatch(filterdatasuccess(filter)),
});

export default connect(null, dispatchfunction)(Filter);
