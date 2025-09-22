import React from 'react';
import type { IconProps } from '../types';

const Sorting191: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 10V3.947c0-.574 0-.862-.23-.933-.507-.157-1.27.984-1.27.984m1.5 6H5.5M7 10h1.5m.5 7.5v-1.75c0-.825 0-1.237-.293-1.494C8.414 14 7.943 14 7 14c-.943 0-1.414 0-1.707.256C5 14.513 5 14.925 5 15.75s0 1.237.293 1.494c.293.256.764.256 1.707.256h2Zm0 0v.875c0 1.237 0 1.856-.44 2.24C8.122 21 7.415 21 6 21H5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.5 20V4m0 16c-.7 0-2.008-1.994-2.5-2.5m2.5 2.5c.7 0 2.009-1.994 2.5-2.5" opacity=".4"/> </svg>
  );
};

export default Sorting191;
