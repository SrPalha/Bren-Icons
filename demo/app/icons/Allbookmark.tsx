import React from 'react';
import type { IconProps } from '../types';

const Allbookmark: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 17.98v-5.273c0-3.633 0-5.45 1.098-6.578C5.197 5 6.964 5 10.5 5s5.303 0 6.402 1.129C18 7.257 18 9.074 18 12.708v5.273c0 2.306 0 3.459-.724 3.871-1.404.8-4.035-1.867-5.285-2.67-.725-.465-1.088-.698-1.491-.698s-.766.233-1.49.698c-1.25.803-3.882 3.47-5.285 2.67C3 21.44 3 20.287 3 17.981Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 2h2c4.714 0 7.071 0 8.535 1.464C21 4.93 21 7.286 21 12v6"/> </svg>
  );
};

export default Allbookmark;
