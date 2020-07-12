import React, { Component } from 'react';

import Chat from '../components/Chat';

import styles from './index.module.css';

class App extends Component {
  componentDidMount() {
    window.addEventListener(
      'message',
      (message) => {
        this.setState({
          status: message.data.status,
        });
      },
      true
    );
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
