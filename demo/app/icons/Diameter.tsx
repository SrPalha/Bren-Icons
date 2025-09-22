import React from 'react';
import type { IconProps } from '../types';

const Diameter: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 12H19m-8.5 0H5"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.01 14C6.49 13.48 5 12.5 5 12s1.51-1.5 2.01-2M17 10c.52.52 2.01 1.5 2.01 2S17.5 13.5 17 14"/> </svg>
  );
};

export default Diameter;
