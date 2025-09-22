import React from 'react';
import type { IconProps } from '../types';

const Picircle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M17 8H9.222C7.995 8 7 8.895 7 10m3.333-2-.96 6.909c-.082.6-.696 1.02-1.36.935-.45-.057-.826-.34-.97-.728L7 15m6.667 1 1.11-8"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/> </svg>
  );
};

export default Picircle;
