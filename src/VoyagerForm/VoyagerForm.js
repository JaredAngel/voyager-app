import React from 'react';

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