import React from 'react';
import type { IconProps } from '../types';

const Circlelockremove02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M15 9V6.5a4.5 4.5 0 1 0-9 0v3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10.963 21.982c-.164.012-.33.018-.497.018C6.619 22 3.5 18.866 3.5 15s3.119-7 6.966-7C12.833 8 15 9 16 11"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m15.5 17 .999 1m0 0 1.001 1m-1.001-1 1.001-1m-1.001 1-.999 1m5-1a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/> </svg>
  );
};

export default Circlelockremove02;
