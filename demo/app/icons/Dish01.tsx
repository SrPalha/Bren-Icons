import React from 'react';
import type { IconProps } from '../types';

const Dish01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 17h20"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M12 7s1.5-1.034 1.5-2.309c0-2.255-3-2.255-3 0C10.5 5.966 12 7 12 7Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m3 17 .621 2.485A2 2 0 0 0 5.561 21h12.877a2 2 0 0 0 1.94-1.515L21 17m-.5-2.5C20.002 10.277 16.386 7 12 7s-8.002 3.277-8.5 7.5"/> </svg>
  );
};

export default Dish01;
