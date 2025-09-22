import React from 'react';
import type { IconProps } from '../types';

const Books01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 15h13c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C18 16.602 18 17.068 18 18c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C16.398 21 15.932 21 15 21H2M2 3h13c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C18 4.602 18 5.068 18 6c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C16.398 9 15.932 9 15 9H2m20 0H9c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C6 10.602 6 11.068 6 12c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C7.602 15 8.068 15 9 15h13"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 15c-1.105 0-2-1.343-2-3s.895-3 2-3M3 3c1.105 0 2 1.343 2 3s-.895 3-2 3m0 6c1.105 0 2 1.343 2 3s-.895 3-2 3"/> </svg>
  );
};

export default Books01;
