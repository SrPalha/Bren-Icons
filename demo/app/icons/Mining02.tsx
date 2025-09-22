import React from 'react';
import type { IconProps } from '../types';

const Mining02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.881 5.186C13.46 4.314 9.808 2.642 6.52 3.069c1.99 1.37 3.036 2.106 5.86 4.62m6.435 1.43c.872 1.422 2.544 5.073 2.117 8.361-1.37-1.989-2.106-3.035-4.62-5.859m-5.838-.203-7.05 7.05c-.572.572-.563 1.507.02 2.09.582.582 1.518.59 2.09.019l7.049-7.05m-.596-4.301 2.788 2.787c.31.31.81.311 1.119.003l3.453-3.454a.79.79 0 0 0-.002-1.118l-2.788-2.788a.79.79 0 0 0-1.118-.002l-3.454 3.453a.79.79 0 0 0 .002 1.119Z"/> </svg>
  );
};

export default Mining02;
