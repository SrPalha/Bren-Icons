import React from 'react';
import type { IconProps } from '../types';

const Chartbubble01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 21H10c-3.3 0-4.95 0-5.975-1.025C3 18.95 3 17.3 3 14V3"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm6-7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/> </svg>
  );
};

export default Chartbubble01;
