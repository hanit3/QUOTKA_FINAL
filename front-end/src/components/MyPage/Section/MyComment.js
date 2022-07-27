import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMyComment } from 'modules/actions/user';
import AddBoard from 'components/BoardQuoteMaster/Section/Board/AddBoard';
import styled from 'styled-components';
import Paging from 'components/common/Pagination';

function MyComment() {
  const dispatch = useDispatch();
  const [CommentsFrom, setCommentsFrom] = useState([]);

  const onRemove = id => {
    setCommentsFrom(
      CommentsFrom.filter(CommentsFrom => CommentsFrom._id !== id),
    );
  };

  useEffect(() => {
    const userFrom = localStorage.getItem('userId');
    dispatch(getMyComment({ userFrom: userFrom })).then(response => {
      if (response.payload.success) {
        saveOptions(response.payload.comments);
      } else {
        alert('댓글을 불러오는데 실패했습니다.');
      }
    });
  }, []);

  const saveOptions = comments => {
    const commentsList = [];

    comments.forEach(element => {
      commentsList.push(element.boardFrom);
    });
    setCommentsFrom(
      [...new Set(commentsList.map(JSON.stringify))].map(JSON.parse),
    );
  };

  return (
    <>
      <BoardUI>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th className="date">일자</th>
              <th>글 제목</th>
              <th>본문 내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="num">1</td>
              <td className="date">2022.07.24</td>
              <td className="title">뭐라뭐라 제목이올시다</td>
              <td className="content">뭐라뭐라 내용이 올시다.</td>
            </tr>
            <tr>
              <td className="num">2</td>
              <td className="date">2022.07.24</td>
              <td className="title">뭐라뭐라 제목이올시다</td>
              <td className="content">뭐라뭐라 내용이 올시다.</td>
            </tr>
            <tr>
              <td className="num">3</td>
              <td className="date">2022.07.24</td>
              <td className="title">뭐라뭐라 제목이올시다</td>
              <td className="content">뭐라뭐라 내용이 올시다.</td>
            </tr>
            <tr>
              <td className="num">4</td>
              <td className="date">2022.07.24</td>
              <td className="title">뭐라뭐라 제목이올시다</td>
              <td className="content">뭐라뭐라 내용이 올시다.</td>
            </tr>
            <tr>
              <td className="num">5</td>
              <td className="date">2022.07.24</td>
              <td className="title">뭐라뭐라 제목이올시다</td>
              <td className="content">뭐라뭐라 내용이 올시다.</td>
            </tr>
          </tbody>
        </table>
      </BoardUI>
      <Paging />
      {CommentsFrom.length === 0 && (
        <NothingBox>
          <NothingAlert>댓글 목록이 없습니다.</NothingAlert>
        </NothingBox>
      )}
      {CommentsFrom &&
        CommentsFrom.map((board, index) => {
          return (
            <React.Fragment key={index}>
              <AddBoard
                id={board._id}
                user={board.userFrom}
                time={board.createdAt}
                writer={board.boardWriter}
                title={board.boardTitle}
                content={board.boardContent}
                onRemove={onRemove}
              />
            </React.Fragment>
          );
        })}
    </>
  );
}

export default withRouter(MyComment);

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
    width: 7%;
  }
  .title {
    width: 25%;
    text-align: center;
  }
  .content {
    width: 63%;
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
