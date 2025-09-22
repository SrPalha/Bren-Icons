import React from 'react';
import type { IconProps } from '../types';

const More2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M21 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm-7.5 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm-7.5 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM21 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm0-7.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM13.5 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm0-7.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM6 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm0-7.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/> </svg>
  );
};

export default More2;
