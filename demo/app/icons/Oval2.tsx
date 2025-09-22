import React from 'react';
import type { IconProps } from '../types';

const Oval2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M22 12c0 4.97-4.477 9-10 9S2 16.97 2 12s4.477-9 10-9 10 4.03 10 9Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21c-5.523 0-10-4.03-10-9s4.477-9 10-9"/> </svg>
  );
};

export default Oval2;
