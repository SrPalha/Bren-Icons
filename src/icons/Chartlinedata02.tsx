import React from 'react';
import type { IconProps } from '../types';

const Chartlinedata02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M8.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm6 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm4-8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.434 14.296 18 9m-8.417 2.568 3.62 2.728M3 19l4.59-7.12"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20 21H9c-3.3 0-4.95 0-5.975-1.025C2 18.95 2 17.3 2 14V3"/> </svg>
  );
};

export default Chartlinedata02;
