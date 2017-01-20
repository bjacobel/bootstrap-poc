import React, { Component } from 'react';
import { Checkbox, FormGroup } from 'react-bootstrap';

import '../styles/Form.scss';

export default class Form extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <div className="alert alert-danger" role="alert">There were errors in the form.</div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
        </div>
        <div className="form-group has-success">
          <label className="control-label" htmlFor="inputSuccess1">Input with success</label>
          <input type="text" className="form-control" id="inputSuccess1" aria-describedby="helpBlock2" />
          <span id="helpBlock2" className="help-block">This input was validated.</span>
        </div>
        <div className="form-group has-error">
          <label className="control-label" htmlFor="inputError1">Input with error</label>
          <input type="text" className="form-control" id="inputError1" aria-describedby="helpBlock1" />
          <span id="helpBlock1" className="help-block">This input has an error.</span>
        </div>
        <div className="form-group">
          <Checkbox defaultChecked>
            Recieve Email
          </Checkbox>
        </div>
        <div className="form-group row">
          <div className="col-xs-12 col-md-10">
            <select className="form-control" id="select-per-day">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <label className="col-md-2 control-label" htmlFor="select-per-day">Times per day</label>
        </div>
        <div className="form-group form-actions">
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" className="btn btn-default">Cancel</button>
        </div>
      </form>
    );
  }
}
