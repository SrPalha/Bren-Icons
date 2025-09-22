import React from 'react';
import type { IconProps } from '../types';

const Headset: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15 12a2 2 0 0 1 2-2 4 4 0 0 1 0 8 2 2 0 0 1-2-2v-4Zm-6 0a2 2 0 0 0-2-2 4 4 0 0 0 0 8 2 2 0 0 0 2-2v-4Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 14v-3a9 9 0 0 1 18 0v4.846c0 2.009 0 3.013-.352 3.796a4 4 0 0 1-2.006 2.006c-.783.352-1.787.352-3.796.352H12"/> </svg>
  );
};

export default Headset;
