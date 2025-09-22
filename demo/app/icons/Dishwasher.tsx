import React from 'react';
import type { IconProps } from '../types';

const Dishwasher: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 6c0-3.31.69-4 4-4h12c3.31 0 4 .69 4 4v12c0 3.31-.69 4-4 4H6c-3.31 0-4-.69-4-4V6Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2 8h20"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M5 5h4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 5.009V5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6.003-.002v-2.444m0 0v-3.56c.67.083 1.436.401 1.785.744.349.342.358.781.48 1.328.126.564.247 1.095.226 1.183-.026.59-2.4.309-2.491.305Z"/> </svg>
  );
};

export default Dishwasher;
