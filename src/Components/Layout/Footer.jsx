import React from 'react'
import styled from 'styled-components';
import style from '../../static/staticcss';
import { Link } from 'react-router-dom';
import { Footerdata,Navdata } from '../../static/staticdata';

const FooterWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 5rem 0rem 5rem 0rem;
  .Container {
    width: 100%;
    .copyright {
      margin-top: 2rem;
      width: 100%;
      display: flex;
      justify-content: center;
      text-align: center;
    }
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem 2rem;
      margin: 0 auto;
      .col {
        display: flex;
        flex-direction: column;
        align-items: center;
        h4 {
          font-weight: 500;
          font-size: ${style.fontSize.FooterMain};
        }
        ul {
          margin: 0;
          padding: 0;
          li {
            margin-top: 0.5rem;
            list-style: none;
            font-size: ${style.fontSize.FooterSub};
          }
        }
      }
    }
  }
`;

const LinkContainer = styled(Link)`
  text-decoration: none;
  color:black;
  transition: all 0.3s ease-in-out;
  :hover{
    color:${style.fontColor.primaryLight}
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="Container">
        <div className="row">
          <div className="col">
            <h4>{Footerdata.title}</h4>
            <ul className="ListUnstyled">
              <li>{Footerdata.tel}</li>
              <li>{Footerdata.email}</li>
              <li>{Footerdata.Address}</li>
            </ul>
          </div>
          <div className="col">
            <h4>Link</h4>
            <ul className="ListUnstyled">
              {Navdata.map((data, index) => {
                return (
                  <li key={index}>
                    <LinkContainer to={data.Link}>
                      {data.name}
                    </LinkContainer>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col">
            <h4>Custommer Services</h4>
            <ul className="ListUnstyled">
              <li>{Footerdata.cutomerserviceemail}</li>
              <li>{Footerdata.cutomerservicephone}</li>
            </ul>
          </div>
        </div>
        <span className="copyright">{Footerdata.copyright}</span>
      </div>
    </FooterWrapper>
  );
}

export default Footer
