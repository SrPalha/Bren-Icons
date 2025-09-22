import React from 'react';
import type { IconProps } from '../types';

const Touch8: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7.78 13.957V9.493m0 0V3.978c0-.82.683-1.48 1.503-1.48.82 0 1.466.66 1.466 1.48v3.996m-2.97 1.52c-1.314 1.19-2.73 2.694-2.92 3.08-.886 1.348-.793 2.001.195 3.652a41.298 41.298 0 0 0 2.033 3.032c.67.759.537.76 1.51 1.472.867.602 2.667 1.022 6.886.602 3.438-.53 4.262-3.53 4.244-4.963v-3.54c.214-2.942-1.016-3.074-3.25-3.364m-5.728-1.491v2.523m0-2.523c.557-.909 2.582-.541 2.976 1.174m0 0 .005.022a.885.885 0 0 1 .016.087m-.02-.109c.004.035.01.072.02.11m-.02-.11c-.14-1.196 2.891-.904 3.015 1.2v1.142m-2.98-.997v-1a1.69 1.69 0 0 0-.015-.236"/> </svg>
  );
};

export default Touch8;
