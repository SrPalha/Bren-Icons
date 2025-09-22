import React from 'react';
import type { IconProps } from '../types';

const Percentcircle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m8 16 8-8m-6 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 5.828a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/> </svg>
  );
};

export default Percentcircle;
