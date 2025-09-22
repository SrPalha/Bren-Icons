import React from 'react';
import type { IconProps } from '../types';

const Boxingbag: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 17.5c-4 1.333-8 1.333-12 0m12-7c-4-1.333-8-1.333-12 0m10-4-2.505-2.82c-.697-.784-1.046-1.176-1.495-1.176-.45 0-.798.392-1.495 1.176L8 6.5M18 2H6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.111 21.768c1.926.31 3.852.31 5.778 0 2.628-.422 3.111-1.3 3.111-3.476V9.708c0-2.176-.483-3.054-3.111-3.476a18.116 18.116 0 0 0-5.778 0C6.483 6.654 6 7.532 6 9.708v8.584c0 2.176.483 3.054 3.111 3.476Z"/> </svg>
  );
};

export default Boxingbag;
