import React from 'react';
import type { IconProps } from '../types';

const Menu8: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5h16m-2 7H6m2 7h8"/> </svg>
  );
};

export default Menu8;
