import React from 'react';
import type { IconProps } from '../types';

const Uploadcircle01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v8m0-8c-.7 0-2.008 1.994-2.5 2.5M12 8c.7 0 2.008 1.994 2.5 2.5"/> </svg>
  );
};

export default Uploadcircle01;
