import React from 'react';
import type { IconProps } from '../types';

const Obtuse: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 17c0 .56-2 2-2 2m2-2c0-.56-2-2-2-2m2 2H11.505c-1.218 0-1.826 0-2.313-.305-.487-.305-.753-.852-1.285-1.947l-5.198-10.7m0 0C2.238 4.32 2 6.706 2 6.706m.708-2.658c.47-.273 2.645.712 2.645.712"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 10.803A6 6 0 0 1 14.917 17"/> </svg>
  );
};

export default Obtuse;
