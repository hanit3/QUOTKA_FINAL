import React, { useState } from 'react';
import { TagsInput } from 'react-tag-input-component';
import 'styles/board/tag.css';

export default function App() {
  const [selected, setSelected] = useState(['papaya']);

  return (
    //    <pre>{JSON.stringify(selected)}</pre>

    <div>
      <TagsInput
        value={selected}
        onChange={setSelected}
        name="source"
        placeHolder="enter source"
      />
    </div>
  );
}
