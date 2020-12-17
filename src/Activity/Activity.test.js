import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Activity from './Activity';

it('renders Activity component', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Activity />
    </BrowserRouter>, div 
  );
  ReactDOM.unmountComponentAtNode(div);
});