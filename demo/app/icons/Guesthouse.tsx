import React from 'react';
import type { IconProps } from '../types';

const Guesthouse: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5v14h16V3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 19v-5.463c0-2.143-4-1.953-4 0V19m4 3h-4M3 5l7.735-2.74c1.254-.347 1.276-.347 2.53 0L21 5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.012 8H12"/> </svg>
  );
};

export default Guesthouse;
