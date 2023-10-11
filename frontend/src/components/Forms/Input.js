import React from 'react';

import './Input.css';

export default function Input({id, label="", type, step=null, value, onChange, placeholder, labelClick}) {
  return (
    <div className="input">
      {label && <label htmlFor={id} onClick={labelClick}>{label}</label>}
      <input
        type={type}
        step={step}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};