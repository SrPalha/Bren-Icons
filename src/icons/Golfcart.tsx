import React from 'react';
import type { IconProps } from '../types';

const Golfcart: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.998 18.982c-.925 0-1.998.236-1.998-.995V15.84c0-1.72 0-2.58.499-3.144.78-.88 2.289-.674 3.337-.674.809 0 1.805-.112 2.49.411.454.347.67.92 1.102 2.066.165.438.283 1.044.688 1.324.257.177.592.177 1.262.177h2.112c1.323 0 1.771-1.026 2.498-1.99h1.554c2.19 0 4.218 1.277 4.425 3.632.041.471.155 1.34-.54 1.34h-1.443m-3.997 0H8.495"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 12V3m15 11L16 3M2 3h16m-2 11-2-3m-1 1 2-2m-8.5 2c0-2.03-.12-4-2.5-4"/> </svg>
  );
};

export default Golfcart;
