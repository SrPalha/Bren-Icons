import React from 'react';
import type { IconProps } from '../types';

const Mayanpyramid: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.5 17H4c-1.655 0-2 .345-2 2v1c0 1.655.345 2 2 2h16c1.655 0 2-.345 2-2v-1c0-1.655-.345-2-2-2h-4.5M9 12H6c-1.655 0-2 .345-2 2v3m11-5h3c1.655 0 2 .345 2 2v3M6 12V9c0-1.655.345-2 2-2h8c1.655 0 2 .345 2 2v3M9 7V4c0-1.655.345-2 2-2h2c1.655 0 2 .345 2 2v3m-1.5 0L16 22M10.5 7 8 22"/> </svg>
  );
};

export default Mayanpyramid;
