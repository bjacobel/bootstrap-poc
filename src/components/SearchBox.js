import React, { Component } from 'react';
import { Button } from 'reactstrap';

import '../styles/SearchBox.scss';

export default class SearchBox extends Component {
  render() {
    return (
      <div className="form-inline search-wrapper">
        <Button>Button</Button>
        <div className="search-box form-group">
          <label className="control-label sr-only" htmlFor="search">Search</label>
          <input className="form-control" type="search" id="search" name="search" placeholder="Search this website" />
          <button className="btn btn-primary search-button" type="button">Search</button>
        </div>
        <Button>Button</Button>
      </div>
    );
  }
}
