import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ActivityListMain from './ActivityListMain';

it('renders ActivityListMain component', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ActivityListMain />
    </BrowserRouter>, div
  );
  ReactDOM.unmountComponentAtNode(div);
});