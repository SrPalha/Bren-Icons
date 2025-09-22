import React from 'react';
import type { IconProps } from '../types';

const Road02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M20.828 5.172C19.657 4 17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172m17.656 0C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828M3.172 5.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828m0 0C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 12h-2m7.5 0h-2m-9 0h-2"/> </svg>
  );
};

export default Road02;
