import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ActivityPageMain from './ActivityPageMain';

it('renders ActivityPageMain component', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ActivityPageMain />
    </BrowserRouter>, div
  );
  ReactDOM.unmountComponentAtNode(div);
});