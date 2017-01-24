import React, { Component } from 'react';
import Button from 'reactstrap/lib/Button';
import Container from 'reactstrap/lib/Container';

import '../styles/App.scss';
import FormWrapper from './FormWrapper';
import ModalWrapper from './ModalWrapper';
import SearchBox from './SearchBox';

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
    let rtlToggle;

    if (process.env.NODE_ENV === 'development') {
      document.querySelector('html').setAttribute('dir', this.state.dir);
      rtlToggle = <Button color="warning" onClick={ this.toggleDir }>Toggle RTL/LTR</Button>;
    }

    return (
      <Container className="app">
        <FormWrapper />
        <ModalWrapper />
        <SearchBox />
        { rtlToggle }
        <pre className="no-rtl">
          This code block won't be flipped to RTL.
        </pre>
      </Container>
    );
  }
}
