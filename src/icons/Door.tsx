import React from 'react';
import type { IconProps } from '../types';

const Door: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 22V8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v14H5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 11V7c0-1.655.345-2 2-2h4c1.655 0 2 .345 2 2v4c0 1.655-.345 2-2 2h-4c-1.655 0-2-.345-2-2ZM3 22h18M12 5v8m4-4H8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.008 17h-.009"/> </svg>
  );
};

export default Door;
