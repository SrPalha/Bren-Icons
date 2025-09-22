import React from 'react';
import type { IconProps } from '../types';

const Tasbih: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15.707 3.728a1.73 1.73 0 1 1-3.459.002 1.73 1.73 0 0 1 3.459-.002Zm-4.428 1.829a1.73 1.73 0 1 1-3.459.002 1.73 1.73 0 0 1 3.459-.002Zm-1.832 4.451a1.73 1.73 0 1 1-3.458.002 1.73 1.73 0 0 1 3.458-.002Zm1.813 4.437a1.73 1.73 0 1 1-3.458.001 1.73 1.73 0 0 1 3.459-.001Zm4.45 1.848a1.73 1.73 0 1 1-3.458.001 1.73 1.73 0 0 1 3.459-.001Zm4.451-1.848a1.73 1.73 0 1 1-3.459.001 1.73 1.73 0 0 1 3.46-.001Zm1.837-4.437a1.73 1.73 0 1 1-3.458.002 1.73 1.73 0 0 1 3.458-.002Zm-1.837-4.436a1.73 1.73 0 1 1-3.459.001 1.73 1.73 0 0 1 3.46-.001Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.759 14.848-4.872 2.454c-.727.394-1.16.851-.687 1.697.2.37.622.992 1.23 1.604m0 0c.478.48 1.07.955 1.76 1.297.433.155.96.282 1.509-.809l2.448-4.857M3.43 20.603l1.675-1.71"/> </svg>
  );
};

export default Tasbih;
