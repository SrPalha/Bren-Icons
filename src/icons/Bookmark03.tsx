import React from 'react';
import type { IconProps } from '../types';

const Bookmark03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22c-4.243 0-6.364 0-7.682-1.465C3 19.072 3 16.714 3 12s0-7.071 1.318-8.536C5.636 2 7.758 2 12 2c4.243 0 6.364 0 7.682 1.464C21 4.93 21 7.286 21 12c0 4.714 0 7.071-1.318 8.535C18.364 22 16.242 22 12 22Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 2.5v7.326c0 1.247 0 1.87.386 2.094.749.432 2.152-1.01 2.819-1.444.387-.252.58-.378.795-.378.215 0 .408.126.795.378.667.434 2.07 1.876 2.819 1.444.386-.223.386-.847.386-2.094V2.5"/> </svg>
  );
};

export default Bookmark03;
