import React from 'react';
import type { IconProps } from '../types';

const Firepit: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.104 17.5c-.77-.928-.68-2.301-.406-3.184 4.477 2.184 5.061-1.816 4.725-2.816 1.505 1 2.965 4.419 1.414 6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.816 17.5C5.592 16.429 4.77 11.548 6.13 8.929c.995 2.141 2.62 2.141 2.62 2.141-1.083-4.285 1.083-7.5 5.26-8.571-.818 1.501-1.473 3.846.187 5.349.352-.669 1.533-2.135 3.22-2.135 0 0-1.297 2.302.11 4.308 1.625 2.315 1.209 5.763-1.207 7.478m4.18.001h-17l.66 2.485c.335 1.26.681 1.515 2.062 1.515h11.556c1.38 0 1.727-.255 2.062-1.515l.66-2.485Zm-16.944 0H2.5m17.944 0H21.5"/> </svg>
  );
};

export default Firepit;
