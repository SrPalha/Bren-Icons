import React from 'react';
import type { IconProps } from '../types';

const Greaterthan: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 4 8.33 6.04c2.226 1.615 2.226 2.306 0 3.92L7 20"/> </svg>
  );
};

export default Greaterthan;
