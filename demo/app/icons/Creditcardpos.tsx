import React from 'react';
import type { IconProps } from '../types';

const Creditcardpos: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m3.346 16.198 12.829-12.83m2.457 7.688-2.2 2.2m-1.877 1.854-.979.979"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M3.175 16.141a4.01 4.01 0 0 1 0-5.672l7.294-7.294a4.01 4.01 0 0 1 5.672 0l4.684 4.684a4.01 4.01 0 0 1 0 5.672l-7.294 7.294a4.01 4.01 0 0 1-5.672 0l-4.684-4.684Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M4 22h16"/> </svg>
  );
};

export default Creditcardpos;
