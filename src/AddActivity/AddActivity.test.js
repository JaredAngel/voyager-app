import React from 'react';
import ReactDOM from 'react-dom';
import AddActivity from './AddActivity';

it('renders AddActivity component', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AddActivity />, div
  );
  ReactDOM.unmountComponentAtNode(div);
});