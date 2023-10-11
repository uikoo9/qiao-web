// react
import React from 'react';

// css
import 'purecss/build/pure.css';

// log
import { colorLog } from '../../util/log.js';

/**
 * responsive container
 */
export const ResponsiveContainer = (props) => {
  colorLog('qiao-ui/basic/responsive-container: render');

  return <div className="responsive-container">{props.children}</div>;
};
