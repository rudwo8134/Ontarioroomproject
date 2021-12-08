import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { selectitems } from '../../Redux/Rentcondo/rentcondo.selector';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import style from '../../static/staticcss';
import HomeScreenShowingItemCard from './HomeScreenShowingItemCard';

const HomescreenWrapper = styled.div`
  padding: 46px 43px;
  .filterContainer {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    .filter {
      width: 111px;
      height: 34px;
      background-color: ${style.backgroundColor.White};
      letter-spacing: 0.3rem;
      font-size: ${style.fontSize.ButtonFont};
      color: ${style.fontColor.ButtonColor};
      border: none;
      border-radius: 5%;
      box-shadow: ${style.boxshaow.normal};
      cursor: pointer;
    }
  }
  .headingContainer {
    margin-top: 49px;
    h3 {
      font-size: ${style.fontSize.large};
    }
    span {
      font-size: ${style.fontSize.FooterSub};
    }
    .line {
      width: 100%;
      height: 1px;
      background-color: ${style.backgroundColor.WhiteDark};
      margin: 24px 0px;
    }
  }
  .Cardcontainer {
    .line {
      width: 100%;
      height: 1px;
      background-color: ${style.backgroundColor.WhiteDark};
      margin: 48px 0px;
    }
  }
`;

const HomeScreen = ({ rooms }) => {
  const [filterData, setFilterData] = useState(null);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    if (filter === 'recent') {
      setFilterData(
        rooms.sort((a, b) =>
          new Date(a.availabledate) < new Date(b.availabledate) ? 1 : -1
        )
      );
    }
    if (filter === 'price') {
      setFilterData(
        rooms.sort((a, b) => (a.monthlyfee < b.monthlyfee ? 1 : -1))
      );
    }
    if (filter === 'distance') {
      setFilterData(rooms);
    }else
    setFilterData(rooms);
  }, [filter, rooms]);
  return (
    <HomescreenWrapper>
      <div className="filterContainer">
        <button className="filter" onClick={() => setFilter('recent')}>
          최신순
        </button>
        <button className="filter" onClick={() => setFilter('price')}>
          가격순
        </button>
        <button className="filter" onClick={() => setFilter('distance')}>
          거리순
        </button>
        <button className="filter" onClick={() => setFilter('more')}>
          더보기
        </button>
      </div>
      <div className="headingContainer">
        <h3>Toronto, ON Rooms for rent</h3>
        <span>
          Showing 1-{rooms?.length} of {rooms?.length} results
        </span>
        <div className="line" />
      </div>
      <div className="Cardcontainer">
        {filterData?.map((data, int) => {
          return (
            <div key={int}>
              <HomeScreenShowingItemCard data={data} />
              <div className="line" />
            </div>
          );
        })}
      </div>
    </HomescreenWrapper>
  );
};

const maptoprops = createStructuredSelector({
  rooms: selectitems,
});

export default connect(maptoprops)(HomeScreen);
