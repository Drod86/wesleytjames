import React from 'react';

import './Input.css';

export default function Input({id, label="", type, step=null, value, onChange, placeholder}) {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
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