import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button.js';
import palette from '../../lib/styles/palette';

const WriteActionButtonsBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

/* TagBox에서 사용하는 버튼과 일치하는 높이로 설정한 후 서로 간의 여백 지정 */
const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
  background-color: #c5ad81;
`;

const CancleButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
  background-color: ${palette.gray[8]};
`;

const WriteActionButtons = ({ onCancel, onPublish }) => {
  return (
    <WriteActionButtonsBlock>
      <StyledButton onClick={onPublish}>게시글 등록</StyledButton>
      <CancleButton gray onClick={onCancel}>
        취소
      </CancleButton>
    </WriteActionButtonsBlock>
  );
};

export default WriteActionButtons;
