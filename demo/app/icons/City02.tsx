import React from 'react';
import type { IconProps } from '../types';

const City02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 22h20"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M14 4h-4c-1.655 0-2 .345-2 2v16h8V6c0-1.655-.345-2-2-2Zm-6 9H5c-1.655 0-2 .345-2 2v7h5v-9Zm11 0h-3v9h5v-7c0-1.655-.345-2-2-2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4V2m0 20v-2m-1-5h2m-2-3.5h2M11 8h2"/> </svg>
  );
};

export default City02;
