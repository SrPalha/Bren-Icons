import React from 'react';
import type { IconProps } from '../types';

const Fuel026: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path fill="#1B1C1B" fillRule="evenodd" d="M3.25 4.5A.75.75 0 0 1 4 3.75h8a.75.75 0 0 1 .335.08l8 4a.75.75 0 0 1 .415.67V22a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75V4.5ZM12 11.972l.195.187c.231.22.59.562.659.634.198.207.464.497.732.832.266.333.546.724.763 1.132.21.393.401.875.401 1.368 0 1.495-1.277 2.625-2.75 2.625s-2.75-1.13-2.75-2.625c0-.493.19-.975.4-1.368.218-.408.498-.8.764-1.132.268-.335.534-.625.732-.832a48.625 48.625 0 0 1 .854-.82Zm.165-3.301 4 2 .67-1.342-4-2-.67 1.342Z" clipRule="evenodd"/>   <path fill="#1B1C1B" fillRule="evenodd" d="M5.25 2A.75.75 0 0 1 6 1.25h3.5a.75.75 0 0 1 .75.75v2.5h-1.5V2.75h-2V4.5h-1.5V2Z" clipRule="evenodd"/> </svg>
  );
};

export default Fuel026;
