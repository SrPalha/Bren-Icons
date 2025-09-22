import React from 'react';
import type { IconProps } from '../types';

const Coordinate02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M13.5 2 12 3.5m0 0V5m0-1.5L10.5 2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 14h3l-3 3h3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m19 14 3 3m0-3-3 3m-7-9v8m0 0-9 6m9-6 9 6"/> </svg>
  );
};

export default Coordinate02;
