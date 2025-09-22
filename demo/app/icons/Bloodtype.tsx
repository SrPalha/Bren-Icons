import React from 'react';
import type { IconProps } from '../types';

const Bloodtype: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M3.5 13.678c0-4.184 3.58-8.319 6.094-10.706a3.463 3.463 0 0 1 4.812 0C16.919 5.36 20.5 9.494 20.5 13.678 20.5 17.78 17.281 22 12 22c-5.281 0-8.5-4.22-8.5-8.322Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m9 15 .84-1.697m0 0C10.72 11.529 11.977 9 12 9c.023 0 1.28 2.529 2.16 4.303m-4.32 0h4.32M15 15l-.84-1.697"/> </svg>
  );
};

export default Bloodtype;
