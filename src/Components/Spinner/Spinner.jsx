import React from 'react'
import { BounceLoader } from 'react-spinners';
import styled from 'styled-components';
import style from '../../static/staticcss';

const Wrapper = styled.div`
  position: absolute;
  z-index: 5;
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Spinner = (props) => {
  const {loading} = props
  if(loading)
  return (
    <Wrapper>
      <BounceLoader
        color={style.backgroundColor.Primary} loading={loading} size={200}  speedMultiplier="1">
      </BounceLoader>
    </Wrapper>
  );
}

export default Spinner
