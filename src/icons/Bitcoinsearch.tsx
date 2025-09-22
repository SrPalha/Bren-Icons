import React from 'react';
import type { IconProps } from '../types';

const Bitcoinsearch: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 17.5 22 22"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M20 11a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.125 14V8M11 8V6.5m0 9V14m-1.875-3h3.75m0 0c.621 0 1.125.504 1.125 1.125v.75c0 .621-.504 1.125-1.125 1.125H8m4.875-3C13.496 11 14 10.496 14 9.875v-.75C14 8.504 13.496 8 12.875 8H8"/> </svg>
  );
};

export default Bitcoinsearch;
