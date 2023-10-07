// react
import React, { useRef } from 'react';

// log
import { colorLog } from '../../../util/log.js';

/**
 * upload
 * @returns
 */
export const Upload = (props) => {
  colorLog('qiao-ui/basic/upload: render');

  // ref
  const inputFileRef = useRef(null);

  // onchange
  const onChange = (e) => {
    // check props
    if (!props.post) {
      colorLog('qiao-ui/basic/upload: need props.post');
      return;
    }
    if (!props.uploadUrl) {
      colorLog('qiao-ui/basic/upload: need props.uploadUrl');
      return;
    }
    if (!props.uploadSuccess) {
      colorLog('qiao-ui/basic/upload: need props.uploadSuccess');
      return;
    }
    if (!props.uploadFail) {
      colorLog('qiao-ui/basic/upload: need props.uploadFail');
      return;
    }

    // check
    const files = e.target.files;
    if (!files || !files.length) {
      colorLog('qiao-ui/basic/upload: need files');
      return;
    }
    if (props.checkFile && !props.checkFile(files[0])) return;

    // form data
    const formData = new FormData();
    formData.append('file', files[0]);

    // upload
    inputFileRef.current.value = '';
    props
      .post(props.uploadUrl, {
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((response) => {
        props.uploadSuccess(response);
      })
      .catch((error) => {
        props.uploadFail(error);
      });
  };

  return (
    <div className={props.divClassName}>
      <input type="file" ref={inputFileRef} onChange={onChange} />
    </div>
  );
};
