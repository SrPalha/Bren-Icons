import React from 'react';
import type { IconProps } from '../types';

const Tag02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2.736 11.687c-.953 1.064-.974 2.67-.1 3.8a32.31 32.31 0 0 0 5.878 5.876c1.13.875 2.735.855 3.8-.098a87.727 87.727 0 0 0 8.09-8.263c.252-.294.41-.654.445-1.04.157-1.706.479-6.62-.856-7.955-1.334-1.335-6.25-1.013-7.955-.856a1.854 1.854 0 0 0-1.04.446 87.731 87.731 0 0 0-8.262 8.09Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.5 14.5 2 2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m18 6 4-4"/> </svg>
  );
};

export default Tag02;
