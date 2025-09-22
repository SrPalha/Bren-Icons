import React from 'react';
import type { IconProps } from '../types';

const Parkingareacircle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 13V8.4c0-.372 0-.558.049-.709a1 1 0 0 1 .642-.642C9.841 7 10.028 7 10.4 7H13a3 3 0 1 1 0 6H9Zm0 0v5"/> </svg>
  );
};

export default Parkingareacircle;
