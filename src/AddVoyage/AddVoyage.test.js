import React from 'react';
import ReactDOM from 'react-dom';
import AddVoyage from './AddVoyage';

it('renders AddVoyage component', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AddVoyage />, div
  );
  ReactDOM.unmountComponentAtNode(div);
})