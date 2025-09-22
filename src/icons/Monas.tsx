import React from 'react';
import type { IconProps } from '../types';

const Monas: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7c.5-.5 1-1.385 1-2 0-1.38-2-3-2-3s-2 1.62-2 3c0 .615.5 1.5 1 2M9.5 7h5M11 7 9 17m4-10 2 10m-7.578 3.101C6.752 18.745 5.659 17.33 5 17h14c-.66.33-1.753 1.745-2.422 3.101-.525 1.065-.787 1.597-1.03 1.748C15.306 22 14.87 22 14 22h-4c-.87 0-1.306 0-1.548-.15-.243-.152-.505-.684-1.03-1.749ZM12 22v-2"/> </svg>
  );
};

export default Monas;
