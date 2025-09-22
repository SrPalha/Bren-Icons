import React from 'react';
import type { IconProps } from '../types';

const Menu13: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 12H10m10-7H4m16 14H4"/> </svg>
  );
};

export default Menu13;
