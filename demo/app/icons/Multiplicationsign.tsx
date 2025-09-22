import React from 'react';
import type { IconProps } from '../types';

const Multiplicationsign: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m18 6-6 6m0 0-6 6m6-6 6 6m-6-6L6 6"/> </svg>
  );
};

export default Multiplicationsign;
