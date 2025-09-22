import React from 'react';
import type { IconProps } from '../types';

const Doorlock: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 22h18M4 22V6c0-3.31.79-4 4.571-4h6.858C19.21 2 20 2.69 20 6v16"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M13.92 11.759V9.854c0-1.022-.86-1.85-1.92-1.85s-1.92.828-1.92 1.85v1.905M15 14.084c0 1.611-1.354 2.92-3 2.92s-3-1.309-3-2.92c0-1.71 1.354-3.01 3-3.01s3 1.3 3 3.01Z"/> </svg>
  );
};

export default Doorlock;
