import React from 'react';
import type { IconProps } from '../types';

const Bicycle01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 20.002a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm12 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 16.004h4.37a1 1 0 0 0 .87-.506l4.26-7.494m-3.5 5-5-6m0 0H5m2 0h2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20.004 6.219c-.204-.576-.564-1.476-1.764-1.896-.78-.3-2.7-.42-2.94-.24-.347.086-.36.48-.192 1.02.136.579.348 1.325.54 2.04.492 1.83 1.572 5.796 2.376 8.856"/> </svg>
  );
};

export default Bicycle01;
