import React, { Component } from 'react';

import Chat from '../components/Chat';

import styles from './index.module.css';

import * as iframe from '../iframe';

class App extends Component {
  componentDidMount() {
    iframe.listener();
  }

  render() {
    return (
      <div className={styles.app}>
        <Chat />
      </div>
    );
  }
}

export default App;
