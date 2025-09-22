import React from 'react';
import type { IconProps } from '../types';

const Belt: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8.975 17.965C12.462 17.523 16 16.332 16 12s-3.538-5.523-7.025-5.965C6.621 5.735 6 7.42 6 9.412v5.176c0 1.992.62 3.676 2.975 3.377ZM2 7.5h4m-4 9h4m8-9h8m-8 9h8M5 12h5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12h.009"/> </svg>
  );
};

export default Belt;
