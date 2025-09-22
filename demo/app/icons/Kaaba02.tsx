import React from 'react';
import type { IconProps } from '../types';

const Kaaba02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 22V5c0-1.414 0-2.121-.44-2.56C20.122 2 19.415 2 18 2H6c-1.414 0-2.121 0-2.56.44C3 2.878 3 3.585 3 5v17"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 17c0-.943 0-1.414.293-1.707C7.586 15 8.057 15 9 15h1c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v5H7v-5Zm-5 5h20M3 6h18M3 19h4m5 0h9M3.5 9h2m3 0h2m3 0h2m3 0h2"/> </svg>
  );
};

export default Kaaba02;
