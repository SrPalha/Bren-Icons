import React from 'react';
import type { IconProps } from '../types';

const Menu6: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5h16M4 12h4m0 0 1.5 2 1.5-2m-3 0h3m9 0h-9m-7 7h16"/> </svg>
  );
};

export default Menu6;
