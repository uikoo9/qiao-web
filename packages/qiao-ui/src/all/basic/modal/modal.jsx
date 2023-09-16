// react
import React from 'react';

// css
import './modal.scss';

// log
import { colorLog } from '../../../util/log.js';

/**
 * q modal
 */
export const QModal = (props) => {
  colorLog('qiao-ui/all/modal: render');

  const modal = (
    <div className="modal-container">
      <div className="modal" style={{ width: props.width }}>
        <div className="modal-close" onClick={props.closeModal}>
          x
        </div>
        {props.children}
      </div>
    </div>
  );

  return props.show ? modal : null;
};
