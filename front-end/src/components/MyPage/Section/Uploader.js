import { useState } from 'react';
import FileUpload from 'react-material-file-upload';

export default function App() {
  const [files, setFiles] = useState([]);
  return (
    <div className="App">
      <FileUpload value={files} onChange={setFiles} />
    </div>
  );
}
