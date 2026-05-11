import React from 'react';

const Icon = ({ name, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`} style={{ fontSize: 'inherit', verticalAlign: 'middle' }}>
    {name}
  </span>
);

export default Icon;