import React from 'react';
import type { IconProps } from '../types';

const Aibrain01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 4.5a3 3 0 0 0-2.567 4.553 3.001 3.001 0 0 0 0 5.893M7 4.5a2.5 2.5 0 0 1 5 0v15a2.5 2.5 0 0 1-5 0 3 3 0 0 1-2.567-4.553M7 4.5c0 .818.393 1.544 1 2m-3.567 8.447A3.01 3.01 0 0 1 6 13.67m11 5.83a3 3 0 0 0 2.567-4.553 3.001 3.001 0 0 0 0-5.893M17 19.5a2.5 2.5 0 0 1-5 0v-15a2.5 2.5 0 0 1 5 0 3 3 0 0 1 2.567 4.553M17 19.5c0-.818-.393-1.544-1-2m3.567-8.447A3.01 3.01 0 0 1 18 10.33"/> </svg>
  );
};

export default Aibrain01;
