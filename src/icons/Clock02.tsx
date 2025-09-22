import React from 'react';
import type { IconProps } from '../types';

const Clock02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5.048 8.607-2.51-.153C4.338 3.704 9.503 1 14.54 2.344c5.364 1.433 8.55 6.917 7.117 12.25-1.434 5.332-6.945 8.494-12.31 7.061A10.036 10.036 0 0 1 2 13.485"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l2 2"/> </svg>
  );
};

export default Clock02;
