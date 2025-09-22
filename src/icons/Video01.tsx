import React from 'react';
import type { IconProps } from '../types';

const Video01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2 11c0-3.3 0-4.95 1.025-5.975C4.05 4 5.7 4 9 4h1c3.3 0 4.95 0 5.975 1.025C17 6.05 17 7.7 17 11v2c0 3.3 0 4.95-1.025 5.975C14.95 20 13.3 20 10 20H9c-3.3 0-4.95 0-5.975-1.025C2 17.95 2 16.3 2 13v-2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m17 8.906.126-.104c2.116-1.746 3.174-2.619 4.024-2.197.85.421.85 1.819.85 4.613v1.564c0 2.794 0 4.192-.85 4.613-.85.422-1.908-.451-4.024-2.197L17 15.094"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M11.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/> </svg>
  );
};

export default Video01;
