import React from 'react';
import type { IconProps } from '../types';

const Sortingdown: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 15.5h12m-15-4h18m-13-9v6m0 0-2-2m2 2 2-2m2 9v6m0 0-2-2m2 2 2-2m2-17v6m0 0-2-2m2 2 2-2"/> </svg>
  );
};

export default Sortingdown;
