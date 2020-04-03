import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton } from '../../lib';

export const DemoControl = ({ name, options, state, onChange }) => (
  <div style={{ marginBottom: 20 }}>
    {options.map((item) => (
      <RadioButton
        key={item}
        name={name}
        value={item}
        label={item}
        checked={state === item}
        onChange={(e) => onChange(e.target.value)}
        style={{ marginRight: 20, marginBottom: 10 }}
      />
    ))}
  </div>
)

DemoControl.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  state: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
