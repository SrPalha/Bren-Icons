import React from 'react';
import type { IconProps } from '../types';

const Dimsum02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.5 11.5-.5 1m3.5-1 .5 1m5.5-6 .5 1"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M9 22c3.866 0 7-2.686 7-6 0-1.402-.56-2.87-1.5-4.097C12.562 9.575 12.004 7.803 12 7c-.059 1.607-2.015 2.477-3 1-.985 1.477-2.941.607-3-1-.003.802-.562 2.575-2.5 4.903C2.56 13.13 2 14.598 2 16c0 3.314 3.134 6 7 6Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5.016C11.834 3.623 12.11 2.57 12.112 2c.059 1.616 1.993 2.49 2.967 1.005.973 1.486 2.908.611 2.966-1.005.003.807.556 2.589 2.472 4.93C21.446 8.163 22 9.64 22 11.048c0 2.05-1.173 3.86-2.966 4.951"/> </svg>
  );
};

export default Dimsum02;
