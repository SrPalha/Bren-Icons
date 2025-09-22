import React from 'react';
import type { IconProps } from '../types';

const Bubblechatdelay: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 11.567c0 5.283-4.478 9.566-10 9.566a10.46 10.46 0 0 1-1.935-.178c-.459-.087-.688-.13-.848-.105-.16.024-.388.145-.842.386a6.5 6.5 0 0 1-4.224.657 5.292 5.292 0 0 0 1.087-2.348c.1-.53-.148-1.045-.52-1.422C3.034 16.411 2 14.105 2 11.567 2 6.284 6.478 2 12 2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m18 6 1-1m3 1a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.995 12h.01M8 12h.009"/> </svg>
  );
};

export default Bubblechatdelay;
