import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { likeList } from 'modules/actions/like';
import MyLikeBoard from 'components/BoardQuoteMaster/Section/Like/MyLikeBoard';
import styled from 'styled-components';

function myFavorite() {
  const dispatch = useDispatch();
  const [myFavorites, setMyFavorites] = useState([]);

  const getMyFavorite = () => {
    const userFrom = localStorage.getItem('userId');
    dispatch(likeList({ userFrom: userFrom }))
      .then(response => {
        setMyFavorites(response.payload.likes);
      })
      .catch(e => alert('좋아요한 게시글을 불러오는데 실패했습니다,'));
  };

  useEffect(() => {
    getMyFavorite();
  }, []);

  return (
    <>
      <BoardUI>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th className="date">일자</th>
              <th className="user">글쓴이</th>
              <th>글 제목</th>
              <th>본문 내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="num">1</td>
              <td className="date">2022.07.24</td>
              <td className="user">글쓴이</td>

              <td className="title">뭐라뭐라 제목이올시다</td>
              <td className="content">뭐라뭐라 내용이 올시다.</td>
            </tr>
            <tr>
              <td className="num">2</td>
              <td className="date">2022.07.24</td>
              <td className="user">글쓴이</td>

              <td className="title">뭐라뭐라 제목이올시다</td>
              <td className="content">뭐라뭐라 내용이 올시다.</td>
            </tr>
            <tr>
              <td className="num">3</td>
              <td className="date">2022.07.24</td>
              <td className="user">글쓴이</td>

              <td className="title">뭐라뭐라 제목이올시다</td>
              <td className="content">뭐라뭐라 내용이 올시다.</td>
            </tr>
            <tr>
              <td className="num">4</td>
              <td className="date">2022.07.24</td>
              <td className="user">글쓴이</td>

              <td className="title">뭐라뭐라 제목이올시다</td>
              <td className="content">뭐라뭐라 내용이 올시다.</td>
            </tr>
            <tr>
              <td className="num">5</td>
              <td className="date">2022.07.24</td>
              <td className="user">글쓴이올시다</td>
              <td className="title">뭐라뭐라 제목이올시다</td>
              <td className="content">뭐라뭐라 내용이 올시다.</td>
            </tr>
          </tbody>
        </table>
      </BoardUI>
      {myFavorites.length === 0 && (
        <NothingBox>
          <NothingAlert>좋아요한 게시글이 없습니다.</NothingAlert>
        </NothingBox>
      )}
      {myFavorites &&
        myFavorites.map((likes, index) => {
          return (
            <React.Fragment key={index}>
              <MyLikeBoard
                href="{`../board/${likes.boardFrom}`}"
                id={likes.boardFrom}
                time={likes.createdAt}
                writer={likes.boardWriter}
                title={likes.boardTitle}
                content={likes.boardContent}
              />
            </React.Fragment>
          );
        })}
    </>
  );
}

export default withRouter(myFavorite);

const NothingBox = styled.div`
  display: flex;
  height: 500px;
  justify-content: center;
  align-items: center;
`;

const NothingAlert = styled.p`
  font-size: 25px;
  color: #ff0200;
`;

const BoardUI = styled.tbody`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-collapse: separate;
  border-spacing: 0 10px;

  .num {
    width: 5%;
    text-align: center;
  }
  .date {
    width: 5%;
  }
  .user {
    text-align: center;

    width: 10%;
  }
  .title {
    width: 25%;
    text-align: center;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    border-top: 1px solid #444444;
    margin-top: 7px;
  }

  td {
    text-aligh: left;
    padding: 10px;
    border-bottom: 1px solid #444444;
    margin-left: 10px;
  }
  th {
    padding: 15px;
    border-bottom: 1px solid #444444;
    margin-left: 10px;
  }

  thead {
    font-family: 'SCDream-bold';
    font-weight: 100;
  }
`;
