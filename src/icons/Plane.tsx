import React from 'react';
import type { IconProps } from '../types';

const Plane: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9c-3.102 0-4.224 2.603-4.86 5.237-.808 3.342 2.036 4.857 4.86 4.758 2.824.1 5.668-1.416 4.86-4.758C16.225 11.603 15.103 9 12 9Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14h.009M4 21h.009M20 21h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 15-5 2m15-2 5 2M12 9V3M4 18v-1.5M20 18v-1.5"/> </svg>
  );
};

export default Plane;
