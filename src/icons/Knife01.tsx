import React from 'react';
import type { IconProps } from '../types';

const Knife01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.387 8.116h.008"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.102 16.745c2.788-3.027 4.727-5.417 5.938-7.044.663-.89.995-1.336.957-1.943C21.92 6.49 18.725 3 17.32 3c-.643 0-1.16.537-2.195 1.612L2.55 17.672a2.003 2.003 0 0 0 0 2.757c.831.863 2.213.73 2.877-.278l2.29-3.475c.918-1.394 1.577-1.402 2.678-.259.665.691 1.505 1.978 2.553 1.966.653-.008 1.153-.551 2.154-1.638Z"/> </svg>
  );
};

export default Knife01;
