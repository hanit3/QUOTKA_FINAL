import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const BoardTitleBlock = styled.div`
  width: 1000px;
  padding-top: 0rem;
  font-family: 'SCDream4R';
  font-size: 20px;
  font-weight: normal;
  margin-left: -25px;
  margin-bottom: 30px;
`;

const BoardTitleBox = ({}) => {
  return (
    <BoardTitleBlock>
      <h3>쿼트마스터</h3>
    </BoardTitleBlock>
  );
};

export default BoardTitleBox;
