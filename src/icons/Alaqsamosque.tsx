import React from 'react';
import type { IconProps } from '../types';

const Alaqsamosque: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 12H6v10h12V12Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 22v-4a2 2 0 1 0-4 0v4m8-10 2.702 1.013c1.078.405 1.298.722 1.298 1.873V22h-4V12ZM2 14.886c0-1.151.22-1.468 1.298-1.873L6 12v10H2v-7.114ZM16.208 9.5C17.313 6.36 15.144 3 12 3S6.687 6.36 7.792 9.5M12 3V2M8 12v-2m8 2v-2m-9-.5h10"/> </svg>
  );
};

export default Alaqsamosque;
