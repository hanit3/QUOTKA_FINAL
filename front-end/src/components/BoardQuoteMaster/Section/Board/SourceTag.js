import React, { useState } from 'react';
import { render } from 'react-dom';
import 'styles/board/SourceTag.css';
import { WithContext as ReactTags } from 'react-tag-input';
import { withRouter } from 'react-router-dom';

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const SourceTag = () => {
  const [tags, setTags] = React.useState([{ id: 'movie', text: '영화' }]);

  const handleDelete = i => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = tag => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = index => {
    console.log('The tag at index ' + index + ' was clicked');
  };

  return (
    <div className="app">
      <h1> 출처 </h1>
      <div>
        <ReactTags
          tags={tags}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="top"
          placeholder="출처를 입력하세요."
          autocomplete
        />
      </div>
    </div>
  );
};

export default withRouter(SourceTag);
