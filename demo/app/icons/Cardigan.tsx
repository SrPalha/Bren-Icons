import React from 'react';
import type { IconProps } from '../types';

const Cardigan: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.5 16 5 21H2l.886-13.285a3 3 0 0 1 1.651-2.484L9 3c1.418 1.595 4.582 1.595 6 0l4.463 2.231a3 3 0 0 1 1.651 2.484L22 21h-3l-1.5-5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6 9 1 10 1 2h8l1-2 1-10"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.5 3.5s0 3.873 2.795 5.231c.401.196.705.577.705 1.023V21m3.5-17.5S15.5 8 12 9"/> </svg>
  );
};

export default Cardigan;
