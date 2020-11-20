import React from 'react';
import './VoyagerForm.css';

function VoyagerForm(props) {
  const { className, ...otherProps } = props;
  return (
    <form
      className={['Voyager-form', className].join(' ')}
      action='#'
      {...otherProps}
    />
  );
}

export default VoyagerForm;