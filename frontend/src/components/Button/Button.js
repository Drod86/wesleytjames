import React from 'react';

import './Button.css';

const Button = ({type="button", text, className="button", handleClick}) => {
  return (
    <button className={className} type={type} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
