import React from 'react';
import type { IconProps } from '../types';

const Chartlinedata01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 21H10c-3.3 0-4.95 0-5.975-1.025C3 18.95 3 17.3 3 14V3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 20c.44-3.156 2.676-11.236 5.428-11.236 1.902 0 2.395 3.871 4.258 3.871C17.893 12.635 17.428 4 21 4"/> </svg>
  );
};

export default Chartlinedata01;
