import React, { Component } from 'react';

import '../styles/App.scss';
import Form from './Form';
import ModalWrapper from './ModalWrapper';
import SearchBox from './SearchBox';
import { Button } from 'react-bootstrap';

export default class App extends Component {
  componentWillMount() {
    this.state = { dir: 'ltr' };
    this.toggleDir = this.toggleDir.bind(this);
  }

  toggleDir() {
    this.setState({
      dir: this.state.dir === 'rtl' ? 'ltr' : 'rtl',
    });
  }

  render () {
    document.querySelector('html').setAttribute('dir', this.state.dir);

    return (
      <div className="app">
        <Form />
        <ModalWrapper />
        <SearchBox />
        <Button bsStyle="warning" onClick={ this.toggleDir }>Toggle RTL/LTR</Button>
      </div>
    );
  }
}
