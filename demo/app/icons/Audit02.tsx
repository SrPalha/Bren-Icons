import React from 'react';
import type { IconProps } from '../types';

const Audit02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11v-1c0-3.771 0-5.657-1.172-6.828C16.657 2 14.771 2 11 2 7.229 2 5.343 2 4.172 3.172 3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828C5.343 22 7.229 22 11 22"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m21 22-1.714-1.714m.571-2.857a3.429 3.429 0 1 1-6.857 0 3.429 3.429 0 0 1 6.857 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 7h8m-8 4h4"/> </svg>
  );
};

export default Audit02;
