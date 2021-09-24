import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1{
    color:black;
    margin-top: -5rem;
    margin-bottom: 3rem;
  }
  a{
    

  }
`

const Errorpage = () => {
  return (
    <Wrapper>
      <h1>Something Wrong with your webpage</h1>
      <Link to="/">Click to Go back Home</Link>
    </Wrapper>
  )
}

export default Errorpage
