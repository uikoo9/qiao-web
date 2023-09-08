// react
import React from 'react';

// log
import { colorLog } from '../../../util/log.js';

/**
 * upload
 * @returns
 */
export const Upload = (props) => {
  colorLog('qiao-ui/pc/upload: render');

  // onchange
  const onChange = (e) => {
    // check props
    if (!props.axios) {
      colorLog('qiao-ui/pc/upload: need props.axios');
      return;
    }
    if (!props.uploadUrl) {
      colorLog('qiao-ui/pc/upload: need props.uploadUrl');
      return;
    }
    if (!props.uploadSuccess) {
      colorLog('qiao-ui/pc/upload: need props.uploadSuccess');
      return;
    }
    if (!props.uploadFail) {
      colorLog('qiao-ui/pc/upload: need props.uploadFail');
      return;
    }

    // check
    const files = e.target.files;
    if (!files || !files.length) {
      colorLog('qiao-ui/pc/upload: need files');
      return;
    }

    // form data
    const formData = new FormData();
    formData.append('file', files[0]);

    // upload
    props.axios
      .post(props.uploadUrl, formData)
      .then((response) => {
        props.uploadSuccess(response);
      })
      .catch((error) => {
        props.uploadFail(error);
      });
  };

  return (
    <div className={props.divClassName}>
      <input type="file" onChange={onChange} />
    </div>
  );
};
