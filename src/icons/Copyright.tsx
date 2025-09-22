import React from 'react';
import type { IconProps } from '../types';

const Copyright: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M15 14a2 2 0 0 1-2 2h-1c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C9 14.398 9 13.932 9 13v-2c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C10.602 8 11.068 8 12 8h1a2 2 0 0 1 2 2"/> </svg>
  );
};

export default Copyright;
