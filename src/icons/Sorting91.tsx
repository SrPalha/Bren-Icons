import React from 'react';
import type { IconProps } from '../types';

const Sorting91: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21v-6.052c0-.574 0-.862-.23-.933-.507-.157-1.27.984-1.27.984m1.5 6H5.5M7 21h1.5M9 6.5V4.75c0-.825 0-1.237-.293-1.494C8.414 3 7.943 3 7 3c-.943 0-1.414 0-1.707.256C5 3.513 5 3.925 5 4.75s0 1.237.293 1.494C5.586 6.5 6.057 6.5 7 6.5h2Zm0 0v.875c0 1.237 0 1.856-.44 2.24C8.122 10 7.415 10 6 10H5m11.5 9.999v-16m0 16c-.7 0-2.008-1.994-2.5-2.5m2.5 2.5c.7 0 2.009-1.994 2.5-2.5"/> </svg>
  );
};

export default Sorting91;
