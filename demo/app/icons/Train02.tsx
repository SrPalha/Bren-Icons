import React from 'react';
import type { IconProps } from '../types';

const Train02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 10c0 4.418-3.582 10-8 10s-8-5.582-8-10a8 8 0 1 1 16 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 18c.939-1.22 2.382-2 4-2 1.618 0 3.061.78 4 2M9.249 9.604A9.791 9.791 0 0 0 12 10c.966 0 1.893-.145 2.751-.396 1.16-.34 1.668-.994.844-2.016-1.705-2.117-5.485-2.117-7.19 0-.824 1.022-.315 1.676.844 2.016ZM5 19l-2 3m16-3 2 3"/> </svg>
  );
};

export default Train02;
