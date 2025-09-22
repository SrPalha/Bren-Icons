import React from 'react';
import type { IconProps } from '../types';

const Saturn01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.636 18.364A9 9 0 1 1 18.364 5.636m1.93 2.864A9 9 0 0 1 8.5 20.294"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.83 3.822c2.702-1.682 4.89-2.302 5.77-1.424 1.54 1.538-1.509 7.083-6.811 12.386-5.302 5.303-10.85 8.356-12.39 6.818-.875-.874-.268-3.042 1.393-5.725"/> </svg>
  );
};

export default Saturn01;
