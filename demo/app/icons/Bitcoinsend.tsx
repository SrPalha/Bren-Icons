import React from 'react';
import type { IconProps } from '../types';

const Bitcoinsend: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 4.8h7c1.657 0 3 1.612 3 3.6S10.657 12 9 12m0 0c1.657 0 3 1.612 3 3.6s-1.343 3.6-3 3.6H2M9 12H3m-.167-7.2v14.4M4.5 3v1.8M8.667 3v1.8M4.5 19.2V21m4.167-1.8V21"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 12h-7.5m7.5 0c0 .7-1.994 2.008-2.5 2.5M22 12c0-.7-1.994-2.008-2.5-2.5"/> </svg>
  );
};

export default Bitcoinsend;
