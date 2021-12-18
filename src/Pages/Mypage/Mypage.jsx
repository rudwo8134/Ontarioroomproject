import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectitems } from '../../Redux/Rentcondo/rentcondo.selector';
import { rentcondoreadstart } from '../../Redux/Rentcondo/rentcondo.action';
import styled from 'styled-components';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import { Sendpasswordreset } from '../../Firebase/firebase.utils';

const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 90px;
  .mypost {
    padding: 20px;
    .Listcontainer {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .numberlist {
        flex: 1;
        font-size: 16px;
        font-weight: 600;
        color: ${CommonStyles.color.Black};
      }
      .numberlist2 {
        flex: 1;
        font-size: 16px;
        font-weight: 600;
      }
      .title {
        flex: 4;
        font-size: 16px;
        font-weight: 600;
      }
      .price {
        flex: 2;
        font-size: 16px;
        font-weight: 600;
      }
      .go {
        flex: 1;
        font-size: 16px;
        font-weight: 600;
      }
      .gobutton {
        flex: 1;
      }
    }
  }
  .cover {
    padding: 30px;
    .name {
      font-size: 25px;
      font-weight: ${CommonStyles.bold.Bold};
      color: ${CommonStyles.color.Primary};
    }
    .divider {
      width: 1300px;
      height: 1px;
      background-color: ${CommonStyles.color.Darkbold1};
    }
    .namecontainer {
      padding: 20px;
      .listcontainer2 {
        width: 750px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
        position: relative;
        .list {
          width: 200px;
          font-size: 18px;
          text-transform: capitalize;
          color: ${CommonStyles.color.Darkbold4};
          font-weight: ${CommonStyles.bold.Bold};
        }
        .name2 {
          text-align: start;
          width: 100px;
        }
        .resetpassword{
          width: 300px;
          margin-left: 10px;
          color: ${CommonStyles.color.PrimaryLight4}
        } button {
          width: 130px;
          height: 30px;
          border: none;
          background-color: ${CommonStyles.color.Primary};
          color: ${CommonStyles.color.White};
          border-radius: 16px;
          margin-left: 24px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s ease-in-out all;
          :hover {
            background-color: ${CommonStyles.color.PrimaryLight2};
          }
        }
      }
      .listcontainer {
        width: 300px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
        .list {
          width: 200px;
          font-size: 18px;
          text-transform: capitalize;
          color: ${CommonStyles.color.Darkbold4};
          font-weight: ${CommonStyles.bold.Bold};
        }
        .name2 {
          text-align: start;
          width: 100px;
        }
      }
    }
  }
`;

const Mypage = ({ rooms, readStart }) => {
  const [load, setLoad] = useState(false);
  const [user, setUser] = useState(null);
  const [userPost, setUserPost] = useState(null);
  const [sendPasswordBack, setSendPasswordBack] = useState(null);
  const location = useLocation();
  const history = useHistory();
  console.log(userPost);
  useEffect(() => {
    if (!location.state.params) {
      history.push('/login');
    } else {
      setUser(location?.state?.params);
    }
  }, [location, history]);

  useEffect(() => {
    setUserPost(
      rooms.filter((data) => {
        return data?.userinfo?.userid === user?.id;
      })
    );
  }, [rooms, user]);
  useEffect(() => {
    setLoad(true);
    readStart();
    setLoad(false);
  }, [readStart]);

  console.log(user);
  const Sendpassword = () => {
    Sendpasswordreset(user?.email).then((res) => {
      if(res === 'success'){
        setSendPasswordBack('비밀번호 변경 링크가 메일로 전송 되었습니다.')
      }else{
        setSendPasswordBack('문제가 발생했습니다. 고객센터에 문의해주세요.');
      }
    });
  };
  const handlesend = (id) => {
    history.push(`/rentcondo/${id}`);
  };
  return (
    <Wrapper>
      <div className="cover">
        <h3 className="name">나의 정보</h3>
        <div className="divider"></div>
        <div className="namecontainer">
          <div className="listcontainer">
            <span className="list">UserName</span>
            <span className="name2">{user?.displayName}</span>
          </div>
          <div className="listcontainer">
            <span className="list">E-mail</span>
            <span className="name2">{user?.email}</span>
          </div>
          <div className="listcontainer">
            <span className="list">전화번호</span>
            <span className="name2">{user?.phonenumber}</span>
          </div>
          <div className="listcontainer2">
            <span className="list">비밀번호</span>
            <span className="name2">*************</span>
            <button onClick={Sendpassword}>비밀번호 초기화</button>
            <span className="resetpassword">
              {sendPasswordBack && sendPasswordBack}
            </span>
          </div>
        </div>
        <div className="divider"></div>
        <h3 className="name">나의 게시물</h3>
        <div className="divider"></div>
        <div className="mypost">
          <div className="Listcontainer">
            <span className="numberlist2">순서</span>
            <h1 className="title">제목</h1>
            <h2 className="price">가격</h2>
            <h2 className="go">바로가기</h2>
          </div>
          {userPost?.map((data, index) => {
            return (
              <div className="Listcontainer">
                <span className="numberlist">{index}</span>
                <h1 className="title">{data?.posttitle}</h1>
                <h2 className="price">${data?.monthlyfee}</h2>
                <button
                  onClick={() => handlesend(data?.id)}
                  className="gobutton"
                >
                  바로가기
                </button>
              </div>
            );
          })}
        </div>
        <div className="divider"></div>
        <div className="mypost">
          <h3 className="name">나의 찜한 목록</h3>
          <div className="divider"></div>
          <h1>게시물이 없습니다.</h1>
        </div>
      </div>
    </Wrapper>
  );
};

const maptoprops = createStructuredSelector({
  rooms: selectitems,
});

const dispatchtomaps = (dispatch) => ({
  readStart: () => dispatch(rentcondoreadstart()),
});

export default connect(maptoprops, dispatchtomaps)(Mypage);
