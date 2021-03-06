import React from 'react';

import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

import style from './Dropdown.scss';

const Dropdown = ({ disabled, label, value, onChange, options }) => (
  <SelectField
    disabled={disabled}
    floatingLabelText={label}
    value={value}
    onChange={onChange}
    className={style.this}
  >
    { options.map(({ label, value }) => (
      <MenuItem key={value} value={value} primaryText={label} />
    ))}
  </SelectField>
);

export default Dropdown;
