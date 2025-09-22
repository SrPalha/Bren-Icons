import React from 'react';
import type { IconProps } from '../types';

const Phoneoff01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m9 2 .089.534c.193 1.157.29 1.736.686 2.088C10.19 4.989 10.776 5 12 5c1.224 0 1.81-.01 2.225-.378.397-.352.493-.93.686-2.088L15 2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 19h2M2 2l20 20m-3.016-3.004c-.18 1.92-1.567 3.004-3.5 3.004H8.492a3.5 3.5 0 0 1-3.5-3.5l.1-13.014M7.14 2.27A3.49 3.49 0 0 1 8.493 2h6.991a3.5 3.5 0 0 1 3.5 3.5v9.505"/> </svg>
  );
};

export default Phoneoff01;
