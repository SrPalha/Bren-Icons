import React from 'react';
import type { IconProps } from '../types';

const Bloodbag: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M5 7.372c8-4.13 6.5 2.633 14 0"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M5 9c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 2 9.19 2 12 2c2.809 0 4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C19 4.787 19 6.19 19 9v2c0 2.809 0 4.213-.674 5.222a4.003 4.003 0 0 1-1.104 1.104C16.213 18 14.81 18 12 18c-2.809 0-4.213 0-5.222-.674a4.002 4.002 0 0 1-1.104-1.104C5 15.213 5 13.81 5 11V9Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m12.014 10-1.44 1.488a2.127 2.127 0 0 0 .013 2.92 1.968 1.968 0 0 0 2.828-.014 2.114 2.114 0 0 0 0-2.92L12.015 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 22a4 4 0 0 0 4-4"/> </svg>
  );
};

export default Bloodbag;
