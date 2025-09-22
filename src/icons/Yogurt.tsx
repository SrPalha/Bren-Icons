import React from 'react';
import type { IconProps } from '../types';

const Yogurt: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.921 10.273a3.098 3.098 0 0 1-1.848 1.122m1.848-1.122c1.308-1.67.257-3.918-1.33-4.521m1.33 4.52c1.933 0 4.19 2.526 2.465 4.728M15.59 5.752C16.015 3.84 13.867 2 10.761 2c.836.535 1.126 1.19 1.097 1.804-.15 3.208-6.184 1.426-5.359 6.518m9.092-4.57c-.164.743-.716 1.496-1.75 2.157M4.6 15c-1.517-1.936.111-4.36 1.9-4.678m0 0a3.16 3.16 0 0 1 2.5.603"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m3 15 .828 2.737c.621 2.054.932 3.08 1.728 3.672.797.591 1.87.591 4.015.591h4.858c2.146 0 3.218 0 4.015-.591.796-.591 1.107-1.618 1.728-3.672L21 15M2 15h20"/> </svg>
  );
};

export default Yogurt;
