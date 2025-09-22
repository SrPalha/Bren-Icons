import React from 'react';
import type { IconProps } from '../types';

const Haji: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m9.5 11.5-3.41 1.745c-.944.484-1.66 1.32-1.943 2.342C3.67 17.308 3 20.069 3 22m11.5-10.5 3.41 1.745c.944.484 1.66 1.32 1.944 2.342C20.33 17.308 21 20.069 21 22M7 22c0-1.153.5-5 1.001-6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8 16.959c1.436.236 4.846-.425 7-4.959m-3 8s5-2 6-6.5m2 3c-.455 2.207-1.5 4.5-3 5.5M15.5 9.058l.421-2.155C16.416 4.366 14.523 2 12 2 9.477 2 7.584 4.366 8.079 6.903l.42 2.155C8.834 10.768 10.3 12 12 12c1.702 0 3.167-1.231 3.5-2.942Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m8 6 3.03-.864a3.523 3.523 0 0 1 1.94 0L16 6"/> </svg>
  );
};

export default Haji;
