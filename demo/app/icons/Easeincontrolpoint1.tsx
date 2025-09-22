import React from 'react';
import type { IconProps } from '../types';

const Easeincontrolpoint1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path fill="#1B1C1B" d="M22 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" opacity=".4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 3S13 19 2 19m9 0h2m3 0h2m0 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"/> </svg>
  );
};

export default Easeincontrolpoint1;
