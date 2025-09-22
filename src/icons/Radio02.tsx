import React from 'react';
import type { IconProps } from '../types';

const Radio02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 13c0-3.3 0-4.95.879-5.975C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121 1.025C22 8.05 22 9.7 22 13s0 4.95-.879 5.975C20.243 20 18.828 20 16 20H8c-2.828 0-4.243 0-5.121-1.025C2 17.95 2 16.3 2 13Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 15h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 20v2m12-2v2M5 6l14-4M9 11H6m9 5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/> </svg>
  );
};

export default Radio02;
