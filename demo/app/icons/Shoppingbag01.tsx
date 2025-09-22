import React from 'react';
import type { IconProps } from '../types';

const Shoppingbag01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M7.5 8V6.364C7.5 3.954 9.515 2 12 2s4.5 1.954 4.5 4.364V8"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M13.882 7.5h-3.764c-3.888 0-5.393.988-6.468 4.737-.969 3.377-1.453 5.066-.946 6.375a4.34 4.34 0 0 0 1.581 1.998c2.61 1.812 12.701 1.894 15.43 0a4.346 4.346 0 0 0 1.582-1.998c.506-1.31.021-2.998-.947-6.375-1.033-3.6-2.419-4.737-6.468-4.737Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11 11h2"/> </svg>
  );
};

export default Shoppingbag01;
