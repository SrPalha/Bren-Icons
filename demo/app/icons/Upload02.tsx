import React from 'react';
import type { IconProps } from '../types';

const Upload02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m3 14 .234.663c.91 2.578 1.365 3.868 2.403 4.602C6.676 20 8.043 20 10.777 20h2.445c2.735 0 4.102 0 5.14-.735 1.039-.734 1.494-2.024 2.404-4.602L21 14"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v10m0-10c-.7 0-2.008 1.994-2.5 2.5M12 4c.7 0 2.008 1.994 2.5 2.5"/> </svg>
  );
};

export default Upload02;
