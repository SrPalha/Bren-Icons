import React from 'react';
import type { IconProps } from '../types';

const Circlelockadd02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M15 9V6.5a4.5 4.5 0 1 0-9 0v3m10.5 7.167V18m0 0v1.333m0-1.333h1.333M16.5 18h-1.333m5.333 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10.963 21.982c-.164.012-.33.018-.497.018C6.619 22 3.5 18.866 3.5 15s3.119-7 6.966-7C12.833 8 15 9 16 11"/> </svg>
  );
};

export default Circlelockadd02;
