import React from 'react';
import type { IconProps } from '../types';

const Clock04: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2C7.522 2 3.774 4.943 2.5 9H5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l2 2M2 12c0 .337.015.67.045 1M9 22a9.655 9.655 0 0 1-1-.392M3.21 17a10.667 10.667 0 0 1-.515-1.154m2.136 3.46c.306.33.632.638.977.923"/> </svg>
  );
};

export default Clock04;
