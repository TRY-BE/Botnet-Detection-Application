/* jshint ignore:start */
import React , {useState} from 'react';
import {useDropzone} from 'react-dropzone';
import Button from './Button';

function FileUpload() {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  const [isEmpty , setEmpty] = useState(true);

  const onUploaded = () => {
    setEmpty(false);
  };

  const buttonStyle = {
    position : 'absolute',
    left : '195px'
  };

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
        {file.path} - {file.size} bytes
    </li>
  ));

  const overflow = {
    wordWrap : 'break-word',
    fontSize : '14.5px'
  };
  

  return (
    <div>
      <div className="fileContainer" onChange={onUploaded}>
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <p>Choose a file</p>
          <Button
                  class= "btn-form"
                  title="Open File Dailog"
                  name = "Open-File-Btn"
          />
        </div>
        <aside>
          <h4>File</h4>
          <ul style={overflow}>{files}</ul>
        </aside>
      </div>
      <div>
        <Button
                  class= "btn-Go"
                  name= "FormPage"
                  style = {buttonStyle}
                  title="Click here to Proceed"
                  boolValue = {isEmpty}
        />
      </div>
    </div>
  );
}

export default FileUpload;

/* jshint ignore:end */