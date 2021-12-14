import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectdetailaddress } from '../../Redux/Rentcondo/rentcondo.selector';
import { useHistory } from 'react-router-dom';
const Secondarybutton = ({ name, data,setting }) => {
  const [value, setValue] = useState(name);
  const history = useHistory();
  const handleClick = () => {
    if (!data) {
      setValue('검색입력');
      return;
    }
    console.log('woriking.....');
    history.push({
      pathname: '/rentcondo',
      state: { params: data },
    });
  };
  return (
    <Secondarybuttonstyle disabled={setting} onClick={handleClick}>
      <span>{value}</span>
    </Secondarybuttonstyle>
  );
};
const Secondarybuttonstyle = styled.button`
  width: 100.43px;
  height: 62px;
  background: #df1b52;
  border-radius: 100px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s ease-in-out all;
  :hover {
    background-color: black;
  }
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
`;
const maptoprops = createStructuredSelector({
  data: selectdetailaddress,
});

export default connect(maptoprops)(Secondarybutton);
