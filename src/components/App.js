import React, { Component } from 'react';

import '../styles/App.scss';
import Form from './Form';
import ModalWrapper from './ModalWrapper';

export default class App extends Component {
  render () {
    return (
      <div className="app">
        <Form />
        <ModalWrapper />
      </div>
    );
  }
}
