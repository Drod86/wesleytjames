import React from 'react';

import './Button.css';

const Button = ({type="button", text, className="button", handleClick, clickParam}) => {
  return (
    <button className={className} type={type} onClick={() => handleClick(clickParam)}>
      {text}
    </button>
  );
};

export default Button;
