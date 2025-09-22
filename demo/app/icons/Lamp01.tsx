import React from 'react';
import type { IconProps } from '../types';

const Lamp01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M12 7a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6Zm-3 6a3 3 0 1 0 6 0"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13h14m-7-6V2m0 18v2m3-3 2 1.5M9 19l-2 1.5"/> </svg>
  );
};

export default Lamp01;
