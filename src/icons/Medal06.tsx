import React from 'react';
import type { IconProps } from '../types';

const Medal06: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M4.5 14.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M9 14.5c0-1.657 1.295-3 2.893-3h.214c1.598 0 2.893 1.343 2.893 3s-1.295 3-2.893 3h-.214C10.295 17.5 9 16.157 9 14.5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m13.56 2-2.561 5m7-5-2.821 5.602M10.44 2 12 4.594M6 2l2.821 5.5"/> </svg>
  );
};

export default Medal06;
