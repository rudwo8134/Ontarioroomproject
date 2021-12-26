import React from 'react';
import style from '../../static/staticcss'
import styled from 'styled-components'
import video from '../../assets/video.mp4'

const ImageContainer = styled.div`
  position: relative;
  width: 100vw;
  .mainholder {
    position: absolute;
    top: 40%;
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
    .search {
      input {
        border-width: 0px;
        font-size: 1.2rem;
        background-color: rgba(242, 242, 242);
        line-height: 1.5;
        outline: none;
        width: 30rem;
        height: 3rem;
        border-radius: 8px 0px 0px 8px;
        padding: 1rem 2rem;
        text-align: start;
        ::placeholder {
        }
      }
    }
    button {
      font-size: 1rem;
      width: 6rem;
      height: 3rem;
      background-color: ${style.backgroundColor.Primary};
      border: none;
      border-radius: 0 8px 8px 0;
    }
  }

  .MainText {
    font-size: ${style.fontSize.MainFont};
    font-weight: bold;
  }
`;

const Imagetag = styled.video`
  opacity: 0.8;
  width: 100vw;
  height: 100vh;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;
const Pallarlax = styled.div`
  position: absolute;
  bottom: -80px;
  z-index: 3;
  left: 0;
  width: 100vw;
  height: 50vh;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0) 0%,
    rgba(0, 0, 0, 0.1) 20%,
    rgba(0, 0, 0, 0.2) 40%,
    rgba(0, 0, 0, 0.3) 60%,
    rgba(0, 0, 0, 0.6) 70%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 1) 90%,
    rgba(0, 0, 0, 1) 100%
  );
`;




const Hero = () => {
  
 
  return (
    <>
    <ImageContainer>
      <Imagetag playsInline src={video} autoPlay loop muted type="video/mp4">
      </Imagetag>
      <div className="mainholder">
        <h1 className="MainText">Which Location are you looking for?</h1>
        <form className="search" action="submit">
          <input type="text" placeholder="Search by Street, City" />
          <button type="submit">Search</button>
        </form>
      </div>
      <Pallarlax/>
    </ImageContainer>
    </>
  );
}

export default Hero
