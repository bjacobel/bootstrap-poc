import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import '../styles/SearchBox.scss';

export default class SearchBox extends Component {
  render() {
    return (
      <Form inline className="search-wrapper">
        <Button>Button</Button>
        <FormGroup className="search-box">
          <Label className="sr-only">Search</Label>
          <Input type="search" placeholder="Search this website" />
          <Button color="primary" className="search-button">Search</Button>
        </FormGroup>
        <Button>Button</Button>
      </Form>
    );
  }
}
