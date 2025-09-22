import React from 'react';
import type { IconProps } from '../types';

const Moderntv4k: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10.5 7v3m0 0v3m0-3h-2c-.943 0-1.414 0-1.707-.293C6.5 9.414 6.5 8.943 6.5 8V7m7 6v-3m0 0V7m0 3 4-3m-4 3 4 3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 10c0-3.771 0-5.657 1.172-6.828C4.343 2 6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10c0 3.771 0 5.657-1.172 6.828C19.657 18 17.771 18 14 18h-4c-3.771 0-5.657 0-6.828-1.172C2 15.657 2 13.771 2 10Zm14 12a8.397 8.397 0 0 0-4-1 8.397 8.397 0 0 0-4 1"/> </svg>
  );
};

export default Moderntv4k;
