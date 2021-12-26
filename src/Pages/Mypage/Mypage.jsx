import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectitems } from '../../Redux/Rentcondo/rentcondo.selector';
import { rentcondoreadstart } from '../../Redux/Rentcondo/rentcondo.action';
import styled from 'styled-components';
import { CommonStyles } from '../../staticFiles/CommonStyles';
import {
  removeretcondoppost,
  Sendpasswordreset,
} from '../../Firebase/firebase.utils';

const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 90px;
  @media screen and (max-width: 476px) {
    margin-top: 0;
    width: 100vw;
  }
  .mypost {
    padding: 20px;
    @media screen and (max-width: 476px) {
      padding: 10px;
    }
    .nopost {
      font-size: 1rem;
      color: ${CommonStyles.color.Darkbold3};
      @media screen and (max-width: 476px) {
        font-size: 1rem;
      }
    }
    .renderlist {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background: red;
      width: 1228px;
      height: 90px;
      margin-bottom: 10px;
      padding-left: 65px;
      background: rgba(196, 196, 196, 0.5);
      border-radius: 4px;
      color: rgba(0, 0, 0, 0.5);
      @media screen and (max-width: 476px) {
        width: 90vw;
        height: 40px;
        justify-content: space-between;
        padding: 0;
      }
      .buttoncontainer {
        margin-right: 20px;
        @media screen and (max-width: 476px) {
          width: 30vw;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          margin-right: 0px;
        }
      }

      .gobutton,
      .deletebutton {
        margin-right: 12px;
        width: 73px;
        height: 50px;
        background: rgba(255, 255, 255, 0.8);
        border: none;
        border-radius: 10px;
        font-weight: bold;
        align-items: center;
        color: rgba(97, 97, 97, 0.8);
        cursor: pointer;
        :hover {
          background-color: ${CommonStyles.color.PrimaryLight2};
        }
        @media screen and (max-width: 476px) {
          width: 3rem;
          height: 80%;
        }
      }
      .deletebutton {
        color: rgba(223, 27, 82, 0.6);
      }

      .title {
        font-size: 16px;
        font-weight: bold;
        line-height: 26px;
        @media screen and (max-width: 476px) {
          width: 70%;
          font-size: 0.7rem;
          line-height: 16px;
          margin-left: 0.5rem;
        }
      }

      .numberlist {
        flex: 1;
        font-size: 16px;
        font-weight: 600;
        color: ${CommonStyles.color.Black};
      }

      .go {
        flex: 1;
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
  .cover {
    padding: 30px;
    @media screen and (max-width: 476px) {
      padding: 1rem;
    }
    .name {
      font-size: 25px;
      font-weight: ${CommonStyles.bold.Bold};
      color: ${CommonStyles.color.Primary};
      @media screen and (max-width: 476px) {
        font-size: 1rem;
      }
    }
    .description {
      font-size: 14px;
      font-weight: ${CommonStyles.bold.Bold};
      line-height: 6px;
      color: rgba(35, 31, 32, 0.61);
      @media screen and (max-width: 476px) {
        font-size: 0.7rem;
      }
    }
    .divider {
      width: 1300px;
      height: 1px;
      background-color: ${CommonStyles.color.Darkbold1};
      @media screen and (max-width: 476px) {
        width: 90vw;
      }
    }
    .namecontainer {
      padding: 20px;
      @media screen and (max-width: 476px) {
        padding: 0.7rem;
      }
      .listcontainer2 {
        width: 750px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
        position: relative;
        @media screen and (max-width: 476px) {
          width: 90vw;
        }
        .list {
          width: 200px;
          font-size: 18px;
          text-transform: capitalize;
          color: ${CommonStyles.color.Darkbold4};
          font-weight: ${CommonStyles.bold.Bold};
          @media screen and (max-width: 476px) {
            width: 14vw;
            font-size: 1rem;
          }
          @media screen and (max-width: 375px) {
            width: 20vw;
          }
          @media screen and (max-width: 320px) {
            font-size: 0.8rem;
            width: 20vw;
          }
        }
        .name2 {
          text-align: start;
          width: 100px;
          @media screen and (max-width: 476px) {
            font-size: 1rem;
            margin-left: 3rem;
          }
          @media screen and (max-width: 375px) {
            margin-left: 0.8rem;
          }
          @media screen and (max-width: 320px) {
            font-size: 0.8rem;
            width: 20vw;
          }
        }
        .resetpassword {
          width: 300px;
          margin-left: 10px;
          color: ${CommonStyles.color.PrimaryLight4};
          @media screen and (max-width: 476px) {
            width: 50vw;
            font-size: 0.7rem;
            position: absolute;
            top: 2.5rem;
            left: 23%;
          }
          @media screen and (max-width: 375px) {
            width: 50vw;
            font-size: 0.6rem;
            position: absolute;
            top: 2.5rem;
            left: 23%;
          }
          @media screen and (max-width: 320px) {
            font-size: 0.5rem;
            width: 50vw;
          }
        }
        button {
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
          @media screen and (max-width: 320px) {
            font-size: 0.5rem;
            width: 90px;
            height: 30px;
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
        @media screen and (max-width: 476px) {
          width: 60vw;
          font-size: 1rem;
          text-align: start;
        }
        .list {
          width: 200px;
          font-size: 18px;
          text-transform: capitalize;
          color: ${CommonStyles.color.Darkbold4};
          font-weight: ${CommonStyles.bold.Bold};
          @media screen and (max-width: 476px) {
            font-size: 1rem;
            width: 100px;
          }
          @media screen and (max-width: 320px) {
            width: 200px;
            font-size: 0.8rem;
          }
        }
        .name2 {
          text-align: start;
          width: 100px;
          @media screen and (max-width: 320px) {
            font-size: 0.8rem;
            width: 400px;
            display: flex;
            margin-left: 10px;
            justify-content: center;
          }
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

  const Sendpassword = () => {
    Sendpasswordreset(user?.email).then((res) => {
      if (res === 'success') {
        setSendPasswordBack('비밀번호 변경 링크가 메일로 전송 되었습니다.');
      } else {
        setSendPasswordBack('문제가 발생했습니다. 고객센터에 문의해주세요.');
      }
    });
  };
  const handlesend = (id, data) => {
    history.push({
      pathname: `/postedit/`,
      state: { data: data, id: id },
    });
  };

  const handledelete = async (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      removeretcondoppost(id);
      alert('삭제가 완료되었습니다.');
      history.push('/rentcondo');
    } else {
      alert('삭제가 취소되었습니다.');
    }
    return false;
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
        <p className="description">
          내가 올린 글을 이곳에서 한눈에 확인해 보세요!
        </p>
        <div className="divider"></div>
        <div className="mypost">
          {userPost?.map((data, index) => {
            return (
              <div className="renderlist">
                <p className="title">
                  {data?.posttitle}
                  &nbsp;(${data?.monthlyfee})
                </p>
                <div className="buttoncontainer">
                  <button
                    className="gobutton"
                    onClick={() => handlesend(data?.id, data)}
                  >
                    수정
                  </button>
                  <button
                    type="danger"
                    onClick={() => handledelete(data?.id)}
                    className="deletebutton"
                  >
                    삭제
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="divider"></div>
        <div className="mypost">
          <h3 className="name">나의 찜한 목록</h3>
          <div className="divider"></div>
          <h1 className="nopost">게시물이 없습니다.</h1>
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
