import React from 'react';
import type { IconProps } from '../types';

const Heartbreak: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12 16 1.5-2.5-2-2 3-2.5L12 5s.458-.499 1.034-.932c1.406-1.056 3.747-1.719 6.429-.074 3.519 2.159 4.315 9.28-3.803 15.29C14.115 20.427 13.341 21 12 21c-1.341 0-2.114-.572-3.66-1.717C.222 13.275 1.018 6.153 4.537 3.994 6.431 2.832 8.155 2.822 9.5 3.288"/> </svg>
  );
};

export default Heartbreak;
