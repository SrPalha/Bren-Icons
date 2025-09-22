import React from 'react';
import type { IconProps } from '../types';

const Mirror: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 15V7a5 5 0 0 1 10 0v8c0 1.655-.345 2-2 2H9c-1.655 0-2-.345-2-2Zm3-9 1-1m0 3.5 2-2M20 8v14M4 8v14m0-2h16M4 12h3m10 0h3"/> </svg>
  );
};

export default Mirror;
