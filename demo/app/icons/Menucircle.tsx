import React from 'react';
import type { IconProps } from '../types';

const Menucircle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M10 6a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm0 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0ZM22 6a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm0 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"/> </svg>
  );
};

export default Menucircle;
