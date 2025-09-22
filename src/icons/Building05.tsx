import React from 'react';
import type { IconProps } from '../types';

const Building05: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 22h20"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M18 9h-4c-2.482 0-3 .518-3 3v10h10V12c0-2.482-.518-3-3-3Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M15 22H3V5c0-2.482.518-3 3-3h6c2.482 0 3 .518 3 3v4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M3 6h3m-3 4h3m-3 4h3m9-1h2m-2 3h2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 22v-3"/> </svg>
  );
};

export default Building05;
