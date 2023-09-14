// react
import React from 'react';

// css
import './viewer.scss';

// log
import { colorLog } from '../../../util/log.js';

/**
 * viewer
 */
export const Viewer = (props) => {
  colorLog('qiao-ui/pc/viewer: render');

  const alert = (
    <div className="viewer-container">
      <img src={props.url} alt={props.alt} />
    </div>
  );

  return props.show ? alert : null;
};
