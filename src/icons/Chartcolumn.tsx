import React from 'react';
import type { IconProps } from '../types';

const Chartcolumn: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 20h3m12 0h3m-10.5 0h3M3 16h3m12 0h3m-10.5 0h3M3 12h3m12 0h3m-10.5 0h3M3 8h3m12 0h3M3 4h3"/> </svg>
  );
};

export default Chartcolumn;
