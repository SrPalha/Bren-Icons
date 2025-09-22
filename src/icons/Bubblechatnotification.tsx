import React from 'react';
import type { IconProps } from '../types';

const Bubblechatnotification: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 11.567c0 5.283-4.478 9.566-10 9.566a10.46 10.46 0 0 1-1.935-.178c-.459-.087-.688-.13-.848-.105-.16.024-.388.145-.842.386a6.5 6.5 0 0 1-4.224.657 5.292 5.292 0 0 0 1.087-2.348c.1-.53-.148-1.045-.52-1.422C3.034 16.411 2 14.105 2 11.567 2 6.284 6.478 2 12 2c.685 0 1.354.066 2 .191"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M23 5.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.995 12h.01m3.986 0H16m-8 0h.009"/> </svg>
  );
};

export default Bubblechatnotification;
