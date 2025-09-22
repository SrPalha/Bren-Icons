import React from 'react';
import type { IconProps } from '../types';

const Quran03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20.5 17H6a2.5 2.5 0 0 0 0 5h14.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20.5 22a2.5 2.5 0 0 1 0-5m-5.566-6A3.23 3.23 0 1 1 10.5 6.566"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 8h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.5 19.5v-14A3.5 3.5 0 0 1 7 2h10a3.5 3.5 0 0 1 3.5 3.5V17"/> </svg>
  );
};

export default Quran03;
