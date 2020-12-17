import React from 'react';
import ReactDOM from 'react-dom';
import ActivityPageNav from './ActivityPageNav';

it('renders ActivityPageNav component', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ActivityPageNav />, div
  );
  ReactDOM.unmountComponentAtNode(div);
});