import React from 'react';
import type { IconProps } from '../types';

const Phoneoff02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5h2M2 2l20 20m-3.005-3.004c-.18 1.92-1.567 3.004-3.5 3.004H8.504a3.5 3.5 0 0 1-3.5-3.5l.1-13.014M7.153 2.27A3.49 3.49 0 0 1 8.505 2h6.991a3.5 3.5 0 0 1 3.5 3.5v9.505"/> </svg>
  );
};

export default Phoneoff02;
