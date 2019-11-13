import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

function CheckBox() {
  const [state, setState] = useState('');
  const [value, setValue] = useState('');
  return (
    <label>
      <span>
        {value}
      </span>
      <input
        type={state}
      />
    </label >
  )
}

export default CheckBox;
