import React from 'react';
import type { IconProps } from '../types';

const Road1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M5.172 3.172C4 4.343 4 6.229 4 10v4c0 3.771 0 5.657 1.172 6.828m0-17.656C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172M5.172 20.828C6.343 22 8.229 22 12 22c3.771 0 5.657 0 6.828-1.172m0 0C20 19.657 20 17.771 20 14v-4c0-3.771 0-5.657-1.172-6.828"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11v2m0-7.5v2m0 9v2"/> </svg>
  );
};

export default Road1;
