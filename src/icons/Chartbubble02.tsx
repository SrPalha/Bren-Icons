import React from 'react';
import type { IconProps } from '../types';

const Chartbubble02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M5 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm3 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm9-10a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/> </svg>
  );
};

export default Chartbubble02;
