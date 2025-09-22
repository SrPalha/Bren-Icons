import React from 'react';
import type { IconProps } from '../types';

const Berlintower1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path fill="#1B1C1B" d="M16 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" opacity=".4"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M16 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.5 13c0 2-1.5 7-2.5 9m5.5-9c0 2 1.5 7 2.5 9M12 5V2M9 16h6"/> </svg>
  );
};

export default Berlintower1;
