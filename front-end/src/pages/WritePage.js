import React from 'react';
// import Editor from '../components/write/Editor';
// import TagBox from '../components/write/TagBox';
import WriteActionButtons from '../components/write/WriteActionButtons';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import SourceBoxContainer from '../containers/write/SourceBoxContainer';
import TitleBoxContainer from '../components/write/BoardTitle';

const WritePage = () => {
  return (
    <>
      <Responsive>
        <TitleBoxContainer />
        <EditorContainer />
        <SourceBoxContainer />
        <WriteActionButtons />
      </Responsive>
    </>
  );
};

export default WritePage;
