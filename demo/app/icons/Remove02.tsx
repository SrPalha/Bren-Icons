import React from 'react';
import type { IconProps } from '../types';

const Remove02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M3 12c0-.581 0-.872.058-1.11.156-.647.61-1.153 1.193-1.326.214-.064.476-.064.999-.064h13.5c.523 0 .785 0 1 .064.582.173 1.037.679 1.192 1.326.058.238.058.529.058 1.11 0 .581 0 .872-.058 1.11-.155.647-.61 1.153-1.193 1.326-.214.064-.476.064-.999.064H5.25c-.523 0-.785 0-1-.064-.582-.173-1.036-.679-1.192-1.326C3 12.872 3 12.581 3 12Z"/> </svg>
  );
};

export default Remove02;
