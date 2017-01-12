import React from 'react';
import ReactDOM from 'react-dom';

import Form from './Form';

const render = () => {
  ReactDOM.render(<Form />, document.body);
};

if (module.hot) {
  module.hot.accept('./Form', () => {
    render();
  });
}

render();
