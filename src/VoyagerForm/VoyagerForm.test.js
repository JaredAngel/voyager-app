import React from 'react';
import ReactDOM from 'react-dom';
import VoyagerForm from './VoyagerForm';

it('renders VoyagerForm component', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <VoyagerForm />,
    div);
  ReactDOM.unmountComponentAtNode(div);
});