import React from 'react';
import type { IconProps } from '../types';

const Shoppingbagadd: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M19.5 11.5c-1.02-3.02-2.296-4-6.07-4H9.65c-3.905 0-5.415.988-6.495 4.737-.973 3.377-1.46 5.066-.95 6.375a4.349 4.349 0 0 0 1.588 1.998c1.447 1 5.187 1.474 8.707 1.378"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M7 8V6.364C7 3.954 9.015 2 11.5 2S16 3.954 16 6.364V8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14 18h8m-4 4v-8m-7.5-3h2"/> </svg>
  );
};

export default Shoppingbagadd;
