import React from 'react';
import type { IconProps } from '../types';

const Telescope02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19 22-5-9-5 9"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M15.92 4 7.027 9.256c-.982.58-1.319 1.866-.752 2.872l1.027 1.82a2.028 2.028 0 0 0 2.806.77L19 9.462"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.22 4.456a1.637 1.637 0 0 1 2.834-1.637l2.727 4.725a1.637 1.637 0 0 1-2.834 1.637L16.22 4.456ZM2 14.264l.738 1.368m0 0L3.476 17m-.738-1.368L6.5 13.5"/> </svg>
  );
};

export default Telescope02;
