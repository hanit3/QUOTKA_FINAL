import React from 'react';
import styled from 'styled-components';

const BoardText = styled.div`
  width: 430px;
  padding-top: 0rem;
  font-family: 'SCDream4R';
  font-size: 13px;
  font-weight: normal;
  margin-left: -3px;
  margin-bottom: 20px;
`;

const BoardListTextBox = ({}) => {
  return (
    <BoardText>
      <p>
        쿼트마스터는 여러분들이 따뜻한 명언, 이야기를 공유하는 게시판입니다.
        Write a Post 버튼을 통해 여러분들의 이야기를 공유해주세요 !
      </p>
    </BoardText>
  );
};

export default BoardListTextBox;
