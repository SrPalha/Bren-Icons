import React from 'react';
import type { IconProps } from '../types';

const Boardmath: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M3 10c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172C21 4.343 21 6.229 21 10v6H3v-6Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 16h20M4 22l3-6m13 6-3-6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9h-2m-3 2V7L7 8m10 3V7l-1 1m-4 12v-4"/> </svg>
  );
};

export default Boardmath;
