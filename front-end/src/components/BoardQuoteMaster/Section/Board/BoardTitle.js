import React from 'react';
import styled from 'styled-components';

const BoardTitleBlock = styled.div`
  width: 1000px;
  padding-top: 0rem;
  font-family: 'SCDream4R';
  font-size: 23px;
  font-weight: normal;
  margin-left: -5px;
  margin-bottom: 20px;
`;

const BoardTitleBox = ({}) => {
  return (
    <BoardTitleBlock>
      <div>쿼트마스터</div>
    </BoardTitleBlock>
  );
};

export default BoardTitleBox;
