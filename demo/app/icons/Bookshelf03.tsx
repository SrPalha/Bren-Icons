import React from 'react';
import type { IconProps } from '../types';

const Bookshelf03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 16h18M2 22h20M3 9h18M3 22V8c0-2.828 0-4.243.93-5.121C4.86 2 6.358 2 9.353 2h5.294c2.995 0 4.492 0 5.423.879C21 3.757 21 5.172 21 8v14m-10-3h2M10 9 9 5M6.5 9V5M14 16v-4m-2-3V5m4 11 1-4m2 4v-4"/> </svg>
  );
};

export default Bookshelf03;
