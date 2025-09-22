import React from 'react';
import type { IconProps } from '../types';

const Task01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7.998 16h4m-4-5h8"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M7.5 3.5c-1.556.047-2.483.22-3.125.862-.879.88-.879 2.295-.879 5.126v6.506c0 2.832 0 4.247.879 5.127C5.253 22 6.668 22 9.496 22h5c2.829 0 4.243 0 5.121-.88.88-.879.88-2.294.88-5.126V9.488c0-2.83 0-4.246-.88-5.126-.641-.642-1.569-.815-3.125-.862"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M7.496 3.75c0-.966.784-1.75 1.75-1.75h5.5a1.75 1.75 0 1 1 0 3.5h-5.5a1.75 1.75 0 0 1-1.75-1.75Z"/> </svg>
  );
};

export default Task01;
