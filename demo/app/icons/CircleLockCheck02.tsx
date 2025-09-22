import React from 'react';
import type { IconProps } from '../types';

const Circlelockcheck02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10.963 21.982c-.164.012-.33.018-.497.018C6.619 22 3.5 18.866 3.5 15s3.119-7 6.966-7C12.833 8 15 9 16 11"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M15 9.5v-3a4.5 4.5 0 1 0-9 0v3"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M16.5 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M15.168 18.444c.3.144.672.516.852.816.06.42.36-1.2 1.824-2.16"/> </svg>
  );
};

export default Circlelockcheck02;
