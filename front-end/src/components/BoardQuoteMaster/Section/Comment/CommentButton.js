import { getComment } from 'modules/actions/comment';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import CommentIcon from 'assests/commentt.png';

function CommentButton({ boardId }) {
  const dispatch = useDispatch();
  const userFrom = localStorage.getItem('userId');
  const [CommentCounts, setCommentCounts] = useState(0);
  const uploadCheck = useSelector(state => state.comment.uploadSuccess);
  const deleteCheck = useSelector(state => state.comment.deleteSuccess);
  let variables = {
    userFrom: userFrom,
    boardFrom: boardId,
  };

  useEffect(() => {
    dispatch(getComment(variables)).then(response => {
      if (response.payload.success) {
        setCommentCounts(response.payload.commentCounts);
      } else {
        alert('댓글을 보여줄 수 없습니다.');
      }
    });
  }, [uploadCheck, deleteCheck]);

  return (
    <button>
      <Comment src={CommentIcon} />
      <Count>
        <span>{CommentCounts}</span>
      </Count>
    </button>
  );
}

export default withRouter(CommentButton);

const Comment = styled.img`
  width: 15px;
  height: 15px;
  margin-right: -23px;
  margin-top: 3px;
`;

const Count = styled.span`
  font-size: 15px;
  color: gray;
  text-align: left;
  margin-top: 4px;
`;
