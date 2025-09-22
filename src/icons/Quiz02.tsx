import React from 'react';
import type { IconProps } from '../types';

const Quiz02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 2a7.5 7.5 0 0 0-4.8 13.262C8.19 16.09 9 17.21 9 18.5h6c0-1.29.81-2.411 1.8-3.238A7.5 7.5 0 0 0 12 2Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M15 18.5H9v2a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10 8c0-1.013.895-2 2-2s2 .82 2 1.833c0 .365-.116.705-.317.991C13.085 9.676 12 10.488 12 11.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.992 14H12"/> </svg>
  );
};

export default Quiz02;
