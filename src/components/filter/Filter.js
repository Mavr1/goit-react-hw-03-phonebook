import React from 'react';
import Input from '../input/Input';

const Filter = ({ onChange }) => (
  <Input label="Find contacts by name" onChange={onChange} name="filter" />
);

export default Filter;
