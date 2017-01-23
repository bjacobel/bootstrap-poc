import React, { Component } from 'react';

import '../styles/App.scss';
import FormWrapper from './FormWrapper';
import ModalWrapper from './ModalWrapper';
import SearchBox from './SearchBox';
import { Button } from 'reactstrap';

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
        <FormWrapper />
        <ModalWrapper />
        <SearchBox />
        <Button color="warning" onClick={ this.toggleDir }>Toggle RTL/LTR</Button>
        <pre className="no-rtl">
          This code block won't be flipped to RTL.
        </pre>
      </div>
    );
  }
}
