import React from 'react';
import type { IconProps } from '../types';

const Locker01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 3h4c3.771 0 5.657 0 6.828 1.172C22 5.343 22 7.229 22 11c0 3.771 0 5.657-1.172 6.828C19.657 19 17.771 19 14 19h-4c-3.771 0-5.657 0-6.828-1.172C2 16.657 2 14.771 2 11c0-3.771 0-5.657 1.172-6.828C4.343 3 6.229 3 10 3ZM5.5 7h3m-3 3h3m7-3h3m-3 3h3m1.5 9v2M4 19v2m8-18v16"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.992 14H18m-9.5 0h.009"/> </svg>
  );
};

export default Locker01;
