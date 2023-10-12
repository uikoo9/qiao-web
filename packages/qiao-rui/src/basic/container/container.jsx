// react
import React from 'react';

// css
import 'purecss/build/pure.css';
import 'purecss/build/grids-responsive.css';
import './container.scss';

// log
import { colorLog } from '../../util/log.js';

/**
 * container
 */
export const Container = (props) => {
  colorLog('qiao-rui/basic/container: render');

  return <div className="container pure-g">{props.children}</div>;
};
