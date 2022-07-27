import React from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
import { withRouter, Link } from 'react-router-dom';

const BoardWriteButton = styled(Button)`
  border-radius: 8px;
  width: 130px;
  height: 35px;
  text-align: center;
  margin-right: 10px;
  font-family: 'SCDream4R';
  font-weight: light;
  cursor: pointer;
  padding-right: 1px;
  padding-left: 1px;
  border: none;
  background: #c5ad81;
  color: white;
  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const WriteButton = () => {
  return (
    <Link
      style={{ textDecoration: 'none', color: 'black' }}
      to="/quotemaster/board"
    >
      <BoardWriteButton>Write a Post</BoardWriteButton>
    </Link>
  );
};

export default WriteButton;
