import React from 'react';
import type { IconProps } from '../types';

const Teaching: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 15c-2.292 6-8.708 0-11 6m13.5-6h1.501c2.357 0 3.536 0 4.268-.732.732-.732.732-1.911.732-4.268V8c0-2.357 0-3.536-.732-4.268C20.537 3 19.36 3 17.001 3h-4c-2.357 0-3.535 0-4.267.732-.62.62-.716 1.561-.73 3.268M7.5 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 7h6m0 4h-3"/> </svg>
  );
};

export default Teaching;
