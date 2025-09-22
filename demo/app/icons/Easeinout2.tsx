import React from 'react';
import type { IconProps } from '../types';

const Easeinout2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 4c-9.947 0-8.053 16-18 16" opacity=".4"/> </svg>
  );
};

export default Easeinout2;
