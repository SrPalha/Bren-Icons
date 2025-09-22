import React from 'react';
import type { IconProps } from '../types';

const Charthistogram: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 21H10c-3.3 0-4.95 0-5.975-1.025C3 18.95 3 17.3 3 14V3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10v11m5-8v8M8 13v7M21 7.987c-1.84 0-3.808.256-5.123-1.494-1.497-1.99-4.257-1.99-5.754 0C8.808 8.243 6.84 7.987 5 7.987H3"/> </svg>
  );
};

export default Charthistogram;
