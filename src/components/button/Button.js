import React from 'react';

const Button = ({ name, type, onClick, clsn }) => {
  return (
    <button className={clsn} type={type} onClick={onClick}>
      {name}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
