import React from 'react';
import type { IconProps } from '../types';

const Estimate02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M17.5 11V7.3c0-2.263 0-3.394-.775-4.097-.776-.703-2.023-.703-4.52-.703h-4.41c-2.497 0-3.744 0-4.52.703C2.5 3.906 2.5 5.037 2.5 7.3v6.4c0 2.263 0 3.394.775 4.097.776.703 2.023.703 4.52.703H11"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.5 6.5h9m-9 4h1m3 0h1m3 0h1m-9 4h1m3 0h1"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M17.5 21.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m18.5 18-1-.5V16"/> </svg>
  );
};

export default Estimate02;
