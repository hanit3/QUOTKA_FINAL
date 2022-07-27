import React, { useEffect, useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMyBoard } from 'modules/actions/user';
import { updateBoard } from 'modules/actions/board';
import AddBoard from 'components/BoardQuoteMaster/Section/Board/AddBoard';
import styled from 'styled-components';

function MyBoardList({ history }) {
  const dispatch = useDispatch();
  const userFrom = localStorage.getItem('userId');
  const [MyBoard, setMyBoard] = useState([]);
  const [show, setShow] = useState(false);
  const [boardId, getBoardId] = useState('');
  const [inputs, setInput] = useState({
    boardTitle: '',
    boardContent: '',
  });
  const { boardTitle, boardContent } = inputs;
  const onChange = e => {
    const { value, name } = e.target;
    setInput({
      ...inputs,
      [name]: value,
    });
  };

  const onRemove = id => {
    setMyBoard(MyBoard.filter(MyBoard => MyBoard._id !== id));
    history.push('/mypage/boardlist');
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!boardTitle) {
      alert('제목을 작성해주세요.');
      return;
    } else if (!boardContent) {
      alert('내용을 작성해주세요.');
      return;
    } else if (boardContent.length > 300) {
      alert('내용을 300자 이내로 작성해주세요.');
      return;
    }
    dispatch(
      updateBoard(userFrom, boardId, {
        boardTitle: boardTitle,
        boardContent: boardContent,
      }),
    ).then(response => {
      if (!response.payload.success) {
        alert('게시글 수정에 실패했습니다.');
      } else {
        if (response.payload.success) {
          alert('게시글이 수정되었습니다.');
          window.location.replace('/mypage/boardList');
        } else {
          alert(response.payload.message);
        }
      }
    });
  };

  useEffect(() => {
    dispatch(getMyBoard({ userFrom: userFrom })).then(response => {
      if (response.payload.success) {
        setMyBoard(response.payload.boards);
      } else {
        alert('게시글 정보를 가져오는데 실패했습니다.');
      }
    });
  }, []);

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
    </>
  );
}

export default withRouter(MyBoardList);

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
