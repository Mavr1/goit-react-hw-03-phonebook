import React from 'react';
import shortid from 'shortid';

const Input = ({ value, label, type, name, placeholder, onChange }) => {
  const id = shortid.generate();
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
