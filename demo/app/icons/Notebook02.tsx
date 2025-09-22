import React from 'react';
import type { IconProps } from '../types';

const Notebook02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 14v-4c0-3.771 0-5.657-1.172-6.828C19.657 2 17.771 2 14 2h-2C8.229 2 6.343 2 5.172 3.172 4 4.343 4 6.229 4 10v4c0 3.771 0 5.657 1.172 6.828C6.343 22 8.229 22 12 22h2c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 6H2m3 6H2m3 6H2M17.5 7h-4m2 4h-2M9 22V2"/> </svg>
  );
};

export default Notebook02;
