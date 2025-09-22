import React from 'react';
import type { IconProps } from '../types';

const Route3: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M18 2c2.165 0 4 1.815 4 4.017 0 2.236-1.865 3.806-3.588 4.873a.83.83 0 0 1-.824 0C15.868 9.813 14 8.261 14 6.017 14 3.815 15.835 2 18 2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6-15H9.5C7.567 7 6 8.343 6 10s1.567 3 3.5 3h3c1.933 0 3.5 1.343 3.5 3s-1.567 3-3.5 3H11"/> </svg>
  );
};

export default Route3;
