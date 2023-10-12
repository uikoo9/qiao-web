// react
import React from 'react';

// css
import './header.scss';

// ui
import { Link } from '../../index.js';

// util
import { grid } from '../../util/res.js';
import { colorLog } from '../../util/log.js';

/**
 * header
 */
export const Header = (props) => {
  colorLog('qiao-rui/components/header: render');

  const navs =
    props.navs &&
    props.navs.map((nav, index) => {
      if (!nav.url || !nav.name) return;

      return (
        <div className={`nav nav-txt ${grid(2, 2, 4, 6, 8)}`} key={index}>
          <Link blank={nav.blank} url={nav.url} txt={nav.name} />
        </div>
      );
    });

  return (
    <div className="header">
      <div className={`logo nav-txt ${grid(2, 2, 4, 6, 8)}`}>
        <Link url={props.logoUrl} txt={props.logo} />
      </div>
      <div className={`navs ${grid(22, 22, 20, 18, 16)}`}>{navs}</div>
    </div>
  );
};
