import React from 'react';
import type { IconProps } from '../types';

const Gitbranch: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 19h6c2.828 0 4.243 0 5.121-.879C19 17.243 19 15.828 19 13v-3m0 0c.7 0 2.009 1.994 2.5 2.5M19 10c-.7 0-2.009 1.994-2.5 2.5M5 7v10"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm14 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/> </svg>
  );
};

export default Gitbranch;
