import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const SourceBoxBlock = styled.div`
  width: 100%;
  border-top: 1px solid ${palette.gray[2]};
  padding-top: 2rem;

h4 {
    color: ${palette.gray[8]}
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

const SourceForm = styled.form`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  width: 256px;
  border: 1px solid ${palette.gray[9]};
  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }

  input {
    padding: 0.5rem;
    flex: 1;
  }
  button {
    cursor: pointer;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    background: ${palette.gray[8]};
    color: white;
    font-weight: bold;
    &:hover {
      background: ${palette.gray[6]};
    }
  }
`;

const SourceTag = styled.div`
  margin-right:0.5rem;
  color: ${palette.gray[6]};
  cursor: pointer;
  &amp;: hover{
    opacity:0.5;
  }
`;

const SourceListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

// React.memo를 사용하여 tag 값이 바뀔 때만 리렌더링되도록 처리
const SourceItem = React.memo(({ tag, onRemove }) => (
  <SourceTag onClick={() => onRemove(tag)}>#{tag}</SourceTag>
));

// React.memo를 사용하여 tags 값이 바뀔 때만 리렌더링되도록 처리
const SourceList = React.memo(({ tags, onRemove }) => (
  <SourceListBlock>
    {tags.map(tag => (
      <SourceItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </SourceListBlock>
));

const SourceBox = ({ tags, onChangeTags }) => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);

  const insertTag = useCallback(
    tag => {
      if (!tag) return; // 공백이라면 추가하지 않음
      if (localTags.includes(tag)) return; // 이미 존재한다면 추가하지 않음
      const nextTags = [...localTags, tag];
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags],
  );

  const onRemove = useCallback(
    tag => {
      const nextTags = localTags.filter(t => t !== tag);
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags],
  );

  const onChange = useCallback(e => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      insertTag(input.trim()); // 앞뒤 공백을 없앤 후 등록
      setInput(''); // input 초기화
    },
    [input, insertTag],
  );

  // 태그 값이 바뀔 때
  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);

  return (
    <SourceBoxBlock>
      <h4>출처</h4>
      <SourceForm onSubmit={onSubmit}>
        <input
          placeholder="출처를 입력하세요"
          value={input}
          onChange={onChange}
        />
        <button type="submit">작성</button>
      </SourceForm>
      <SourceList tags={localTags} onRemove={onRemove} />
    </SourceBoxBlock>
  );
};

export default SourceBox;
