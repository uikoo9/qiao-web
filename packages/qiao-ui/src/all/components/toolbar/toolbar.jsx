// react
import React from 'react';

// css
import './toolbar.scss';

// log
import { colorLog } from '../../../util/log.js';

/**
 * toolbar
 */
export const Toolbar = (props) => {
  colorLog('qiao-ui/all/toolbar: render');

  // search modal show
  const searchModalShow = () => {
    colorLog('qiao-ui/all/toolbar: searchModalShow');

    props.searchModal.current.modalShow();
  };

  // reset data
  const resetData = () => {
    props.reload();
  };

  // edit modal show
  const editModalShow = () => {
    colorLog('qiao-ui/all/toolbar: editModalShow');

    props.editModal.current.modalShow();
  };

  // del rows
  const delRows = () => {
    colorLog('qiao-ui/all/toolbar: delRows');

    const cks = props.cks;
    if (!cks.length) {
      alert('check del rows');
      return;
    }

    props.delRows(cks.join(','));
  };

  // first page
  const firstPage = () => {
    colorLog('qiao-ui/all/toolbar: firstPage');

    const pagenumber = props.pagenumber;
    if (pagenumber == 1) return;

    props.reload();
  };

  // prev page
  const prevPage = () => {
    colorLog('qiao-ui/all/toolbar: prevPage');

    const pagenumber = props.pagenumber;
    if (pagenumber == 1) return;

    props.reload({}, pagenumber - 1);
  };

  // last page
  const lastPage = () => {
    colorLog('qiao-ui/all/toolbar: lastPage');

    const pagenumber = props.pagenumber;
    if (pagenumber == props.sumpage) return;

    props.reload({}, props.sumpage);
  };

  // next page
  const nextPage = () => {
    colorLog('qiao-ui/all/toolbar: nextPage');

    const pagenumber = props.pagenumber;
    if (pagenumber == props.sumpage) return;

    props.reload({}, pagenumber + 1);
  };

  // set pagesize
  const setPagesize = (pagesize) => {
    colorLog('qiao-ui/all/toolbar: setPagesize');

    window.pagesize = pagesize;
    props.reload();
  };

  return (
    <div className="toolbar">
      <div onClick={editModalShow}>add</div>
      <div onClick={delRows}>del</div>
      <div onClick={searchModalShow}>search</div>
      <div onClick={resetData}>reset</div>
      <div>/</div>
      <div onClick={firstPage}>&lt;&lt;</div>
      <div onClick={prevPage}>&lt;</div>
      <div onClick={nextPage}>&gt;</div>
      <div onClick={lastPage}>&gt;&gt;</div>
      <div>/</div>
      <div
        onClick={() => {
          setPagesize(10);
        }}
      >
        10
      </div>
      <div
        onClick={() => {
          setPagesize(100);
        }}
      >
        100
      </div>
    </div>
  );
};
