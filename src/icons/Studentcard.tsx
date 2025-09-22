import React from 'react';
import type { IconProps } from '../types';

const Studentcard: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M14 3.5c3.771 0 5.657 0 6.828 1.245C22 5.99 22 7.993 22 12s0 6.01-1.172 7.255C19.657 20.5 17.771 20.5 14 20.5h-4c-3.771 0-5.657 0-6.828-1.245C2 18.01 2 16.007 2 12s0-6.01 1.172-7.255C4.343 3.5 6.229 3.5 10 3.5h4Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M5 15.5c1.609-2.137 5.354-2.254 7 0m-1.751-5.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM15 9.5h4m-4 4h2"/> </svg>
  );
};

export default Studentcard;
