import React from 'react';
import type { IconProps } from '../types';

const Bedug02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 10c0-3.866-1.5-6-4-7-1.466-.622-3.391-1-5.5-1S8.466 2.378 7 3"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M7 3c1.466-.622 3.391-1 5.5-1s4.034.378 5.5 1c2.5 1 4 3.134 4 7s-1.5 6-4 7c-1.466.622-3.391 1-5.5 1s-4.034-.378-5.5-1"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m9 22 9-9M2 15l5-5m-4 0c0-3.866 1.79-7 4-7s4 3.134 4 7-1.79 7-4 7c-1.487 0-2.784-1.42-3.474-3.526"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7 10h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m18 22-2-2"/> </svg>
  );
};

export default Bedug02;
