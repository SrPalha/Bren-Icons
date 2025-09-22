import React from 'react';
import type { IconProps } from '../types';

const Dumbbell01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.735 13.732s.905-1.222 1.5-1.5c1.795-.84 2.16-1.206 3-3.001.278-.595 1.5-1.5 1.5-1.5m-3.5 8.502s1.222-.906 1.5-1.5c.84-1.796 1.205-2.16 3-3.001.594-.279 1.5-1.5 1.5-1.5"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M14.431 2.892a1.3 1.3 0 0 1 1.839-.003l4.811 4.798a1.3 1.3 0 0 1 .003 1.84l-1.528 1.533a1.3 1.3 0 0 1-1.839.003l-4.812-4.798a1.3 1.3 0 0 1-.003-1.839l1.529-1.534ZM4.414 12.903a1.3 1.3 0 0 1 1.838-.003l4.812 4.798a1.3 1.3 0 0 1 .003 1.84L9.538 21.07a1.3 1.3 0 0 1-1.838.003l-4.812-4.798a1.3 1.3 0 0 1-.003-1.84l1.529-1.533Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.938 3.453c1.882-2.468 5.202.387 2.605 2.576M3.378 17.977c-2.38 1.992.62 5.182 2.69 2.489"/> </svg>
  );
};

export default Dumbbell01;
