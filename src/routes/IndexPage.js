import React, { useLayoutEffect } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Router, Route, Switch, Link } from 'dva/router';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <ul>
        <li><Link to="/">a</Link></li>
        <li><Link to="/b">b</Link></li>
        <li><Link to="/c">c</Link></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
