import React from 'react';
import type { IconProps } from '../types';

const Bank: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2 8.57c0-1.197.482-1.93 1.48-2.486l4.11-2.287C9.743 2.6 10.82 2 12 2c1.18 0 2.257.6 4.41 1.797l4.11 2.287C21.517 6.64 22 7.373 22 8.57c0 .324 0 .487-.035.62-.186.7-.821.811-1.434.811H3.469c-.613 0-1.247-.11-1.434-.811C2 9.056 2 8.893 2 8.569Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.996 7h.009"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M4 10v8.5M8 10v8.5m8-8.5v8.5m4-8.5v8.5m-1 0H5a3 3 0 0 0-3 3 .5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5 3 3 0 0 0-3-3Z"/> </svg>
  );
};

export default Bank;
