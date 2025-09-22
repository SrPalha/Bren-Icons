import React from 'react';
import type { IconProps } from '../types';

const Profit: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm3 16c-2 0-3 1.5-3 1.5s1 1.5 3 1.5 3-1.5 3-1.5-1-1.5-3-1.5Zm-6 0c-2 0-3 1.5-3 1.5S7 21 9 21s3-1.5 3-1.5S11 18 9 18Zm3 4v-6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.438 11.667V6.333m1.562 0V5m0 8v-1.333M10.437 9h3.126m0 0c.517 0 .937.448.937 1v.667c0 .552-.42 1-.938 1H9.5M13.563 9c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.938-1H9.5"/> </svg>
  );
};

export default Profit;
