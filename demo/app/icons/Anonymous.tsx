import React from 'react';
import type { IconProps } from '../types';

const Anonymous: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm10 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-3 2h-4m12-4c-2.457-1.227-6.027-2-10-2s-7.543.773-10 2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19 11.5-1.058-6.788c-.215-1.384-1.719-2.134-2.933-1.463l-.615.34a4.942 4.942 0 0 1-4.788 0l-.615-.34c-1.214-.67-2.718.08-2.933 1.463L5 11.5"/> </svg>
  );
};

export default Anonymous;
