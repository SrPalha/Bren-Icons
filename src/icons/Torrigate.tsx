import React from 'react';
import type { IconProps } from '../types';

const Torrigate: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 8v13M18 8v13M3 8h18M3 12h18M10 8v4m4-4v4m6-9c-1.46 2.963-4.495 5-8 5S5.46 5.963 4 3"/> </svg>
  );
};

export default Torrigate;
