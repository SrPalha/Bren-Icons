import React from 'react';
import type { IconProps } from '../types';

const Sorting05: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 10h7m-7 4h5m-5 4h3M11 6h10M7 18.813C6.607 19.255 5.56 21 5 21m0 0c-.56 0-1.607-1.745-2-2.188M5 21v-6M3 5.188C3.393 4.745 4.44 3 5 3m0 0c.56 0 1.607 1.745 2 2.188M5 3v6"/> </svg>
  );
};

export default Sorting05;
