import React from 'react';
import type { IconProps } from '../types';

const Stepover: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14 14 1.586 1.84c.667.773 1 1.16 1.414 1.16.414 0 .747-.387 1.414-1.16L20 14"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 17v-6c0-2.809 0-4.213-.674-5.222a4.002 4.002 0 0 0-1.104-1.104C14.213 4 12.81 4 10 4c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C3 6.787 3 8.19 3 11v6m4 3h6"/> </svg>
  );
};

export default Stepover;
