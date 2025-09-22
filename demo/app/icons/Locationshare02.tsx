import React from 'react';
import type { IconProps } from '../types';

const Locationshare02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.168 7a10.028 10.028 0 0 1 0 8M2.832 15a10.029 10.029 0 0 1 0-8"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 3.5c4.059 0 7.5 3.428 7.5 7.587 0 4.225-3.497 7.19-6.727 9.206a1.548 1.548 0 0 1-1.546 0C8.003 18.257 4.5 15.327 4.5 11.087 4.5 6.928 7.941 3.5 12 3.5Z"/> </svg>
  );
};

export default Locationshare02;
