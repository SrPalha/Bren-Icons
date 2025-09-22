import React from 'react';
import type { IconProps } from '../types';

const Share08: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M21 6.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm12 5.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8.729 10.75l6.5-3m-6.5 5.5 6.5 3"/> </svg>
  );
};

export default Share08;
