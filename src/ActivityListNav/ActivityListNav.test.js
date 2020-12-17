import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ActivityListNav from './ActivityListNav';

it('renders ActivityListNav component', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ActivityListNav />
    </BrowserRouter>, div
  );
  ReactDOM.unmountComponentAtNode(div);
});