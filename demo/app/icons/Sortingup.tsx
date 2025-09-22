import React from 'react';
import type { IconProps } from '../types';

const Sortingup: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 8.5H6m15 4H3m13 9v-6m0 0 2 2m-2-2-2 2m-2-9v-6m0 0 2 2m-2-2-2 2m-2 17v-6m0 0 2 2m-2-2-2 2"/> </svg>
  );
};

export default Sortingup;
