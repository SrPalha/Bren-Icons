import React from 'react';
import type { IconProps } from '../types';

const Bubblechatoutcome: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.766 9.493c.153.666.234 1.358.234 2.068 0 5.286-4.478 9.572-10 9.572a10.4 10.4 0 0 1-1.935-.18c-.459-.085-.688-.129-.848-.104-.16.024-.388.145-.842.387a6.496 6.496 0 0 1-4.224.657 5.296 5.296 0 0 0 1.087-2.35c.1-.53-.148-1.045-.52-1.422C3.034 16.408 2 14.1 2 11.56 2 6.435 6.21 2.249 11.5 2M22 4.5h-8m8 0c0 .7-1.994 2.008-2.5 2.5M22 4.5c0-.7-1.994-2.008-2.5-2.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.995 12h.01m3.986 0H16m-8 0h.009"/> </svg>
  );
};

export default Bubblechatoutcome;
