import React from 'react';
import type { IconProps } from '../types';

const Database02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 8c4.418 0 8-1.343 8-3s-3.582-3-8-3-8 1.343-8 3 3.582 3 8 3Zm8 4c0 1.657-3.582 3-8 3s-8-1.343-8-3"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M20 5v14c0 1.657-3.582 3-8 3s-8-1.343-8-3V5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8 8v2m0 5v2"/> </svg>
  );
};

export default Database02;
