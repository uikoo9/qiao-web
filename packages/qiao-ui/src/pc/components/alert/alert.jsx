// react
import React from 'react';

// css
import './alert.scss';

// log
import { colorLog } from '../../../util/log.js';

/**
 * alert
 */
export const Alert = (props) => {
  colorLog('qiao-ui/pc/alert: render');

  const alert = (
    <div className="alert-container">
      <div className="alert">{props.children}</div>
    </div>
  );

  return props.show ? alert : null;
};