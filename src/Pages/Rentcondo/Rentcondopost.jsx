import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
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

const Rentcondopost = () => {
  return (
    <Wrapper>
      <Container>
        <Formcontainer>
          <label htmlFor="">Address1</label>
          <input type="text" />
          <label htmlFor="">Address2</label>
          <input type="text" />
          <label htmlFor="">attach the picture</label>
          <input type="file" />
          <label htmlFor="">deposit</label>
          <input type="number" />
          <label htmlFor="">Monthly Fee</label>
          <input type="number" />
          <label htmlFor="">Room type</label>
          <select name="" id="">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <label htmlFor="">Sqf</label>
          <input type="text" />
          <label htmlFor="">Parking</label>
          <select name="" id="">
            <option value=""></option>
            <option value=""></option>
          </select>
          <label htmlFor="">Available to live</label>
          <input type="date" />
          <label htmlFor="">Post Title</label>
          <input type="text" />
          <label htmlFor="">description</label>
          <textarea name="" id="" cols="100" rows="10"></textarea>
        </Formcontainer>
      </Container>
    </Wrapper>
  );
}

export default Rentcondopost
