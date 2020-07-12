import React, { Component } from 'react';
import * as listeners from '../../communication/listeners';
import * as emitters from '../../communication/emitters';

import styles from './index.module.css';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      id: null,
      messages: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    emitters.sendMessageToChat(this.state.value);
  };

  componentDidMount = () => {
    listeners.whenChatMessageArrive((msg) => {
      this.setState({
        messages: [
          ...this.state.messages,
          {
            id: 1,
            nickname: 'Sergio',
            content: msg,
          },
        ],
      });
    });
  };

  render() {
    return (
      <>
        <ul className={styles.chat_list}>
          {this.state.messages.map((message) => (
            <li
              className={
                message.id === this.state.id
                  ? styles.chat_baloon_client
                  : styles.chat_baloon
              }
            >
              <p className={styles.chat_from}>{message.nickname}</p>
              <p className={styles.chat_content}>{message.content}</p>
            </li>
          ))}
        </ul>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <input
            className={styles.input}
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input className={styles.send_button} type="submit" value="Enviar" />
        </form>
      </>
    );
  }
}

export default Chat;
