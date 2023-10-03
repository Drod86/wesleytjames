import React from 'react';

import './Button.css';

const Button = ({type="button", text, className="button"}) => {
  return (
    <button className={className} type={type}>
      {text}
    </button>
  );
};

export default Button;
