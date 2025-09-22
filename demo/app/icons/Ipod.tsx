import React from 'react';
import type { IconProps } from '../types';

const Ipod: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M19.5 13.5v-3c0-3.759 0-5.638-.929-6.893a4.283 4.283 0 0 0-.49-.554C16.976 2 15.317 2 12 2 8.684 2 7.025 2 5.918 3.053a4.41 4.41 0 0 0-.49.554C4.5 4.862 4.5 6.741 4.5 10.5v3c0 3.759 0 5.638.929 6.892a4.2 4.2 0 0 0 .49.555C7.024 22 8.683 22 12 22c3.316 0 4.975 0 6.082-1.053a4.35 4.35 0 0 0 .49-.555c.928-1.254.928-3.133.928-6.892Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M4.5 10h15"/> </svg>
  );
};

export default Ipod;
