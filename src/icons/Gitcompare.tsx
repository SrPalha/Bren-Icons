import React from 'react';
import type { IconProps } from '../types';

const Gitcompare: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 17v-6c0-2.828 0-4.243-.879-5.121C17.243 5 15.828 5 13 5h-3m0 0c0-.7 1.994-2.008 2.5-2.5M10 5c0 .7 1.994 2.008 2.5 2.5M5 7.5v6c0 2.828 0 4.243.879 5.121.878.879 2.293.879 5.121.879h3m0 0c0 .7-1.994 2.009-2.5 2.5m2.5-2.5c0-.7-1.994-2.009-2.5-2.5"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/> </svg>
  );
};

export default Gitcompare;
