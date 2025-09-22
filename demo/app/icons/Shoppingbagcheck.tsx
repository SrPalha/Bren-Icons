import React from 'react';
import type { IconProps } from '../types';

const Shoppingbagcheck: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m20 12.5-.076-.263C18.887 8.637 17.496 7.5 13.43 7.5H9.65c-3.905 0-5.415.988-6.495 4.737-.973 3.377-1.46 5.066-.95 6.375a4.349 4.349 0 0 0 1.588 1.998c1.379.954 4.839 1.428 8.207 1.388"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M7 8V6.364C7 3.954 9.015 2 11.5 2S16 3.954 16 6.364V8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 19s1 0 2 2c0 0 3.177-5 6-6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10.5 11h2"/> </svg>
  );
};

export default Shoppingbagcheck;
