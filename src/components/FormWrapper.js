import React, { Component } from 'react';
import { Alert, Button, Input, FormGroup, Form, FormFeedback, Label, Col } from 'reactstrap';

import '../styles/FormWrapper.scss';

export default class FormWrapper extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Alert color="danger">There were errors in the form.</Alert>
        </FormGroup>

        <FormGroup>
          <Label>Email address</Label>
          <Input type="email" />
        </FormGroup>

        <FormGroup color="success">
          <Label>Input with success</Label>
          <Input state="success" />
          <FormFeedback>This input was validated.</FormFeedback>
        </FormGroup>

        <FormGroup color="danger">
          <Label>Input with error</Label>
          <Input state="danger" />
          <FormFeedback>This input has an error.</FormFeedback>
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input type="checkbox" />
            Recieve Email
          </Label>
        </FormGroup>

        <FormGroup row>
          <Col md={ 10 }>
            <Input type="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </Col>
          <Col md={ 2 }>
            <Label>Times per day</Label>
          </Col>
        </FormGroup>

        <FormGroup>
          <Button color="primary">Submit</Button>
          <Button outline color="primary">Cancel</Button>
        </FormGroup>
      </Form>
    );
  }
}
