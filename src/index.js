import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const render = (domNode = document.body) => {
  ReactDOM.render(<App />, domNode);
};

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render();
  });

  render();
}

export default class BootstrapPoc {
  constructor(domNode) {
    render(domNode);
  }
}
