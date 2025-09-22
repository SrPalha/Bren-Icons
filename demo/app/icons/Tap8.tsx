import React from 'react';
import type { IconProps } from '../types';

const Tap8: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7.78 13.957V9.493m0 0V3.978c0-.82.684-1.48 1.503-1.48.82 0 1.466.66 1.466 1.48v3.996m-2.968 1.52c-1.315 1.19-2.729 2.694-2.92 3.08-.886 1.349-.793 2.002.195 3.652a41.253 41.253 0 0 0 2.033 3.032c.67.76.537.76 1.508 1.473.868.602 2.667 1.021 6.885.602 3.437-.531 4.26-3.53 4.242-4.964v-3.54c.214-2.941-1.016-3.074-3.249-3.364m-5.726-1.49v2.523m0-2.524c.557-.909 2.581-.541 2.976 1.175m0 0a1.524 1.524 0 0 1 .02.108m-.02-.108a.828.828 0 0 0 .02.108m-.02-.108c-.14-1.196 2.89-.905 3.014 1.199v1.143m-2.979-.997v-1c0-.08-.003-.159-.015-.237"/> </svg>
  );
};

export default Tap8;
