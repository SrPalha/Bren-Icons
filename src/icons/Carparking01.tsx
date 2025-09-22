import React from 'react';
import type { IconProps } from '../types';

const Carparking01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 6H2c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 3 4.068 3 5 3h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 4.602 22 5.068 22 6Zm0 0v15M2 6v15m14-2v2m-8-2v2m-.5-7 .243-.97c.363-1.455.545-2.183 1.088-2.606C9.373 10 10.123 10 11.623 10h.754c1.5 0 2.25 0 2.792.424.543.423.725 1.15 1.088 2.606l.243.97m.5 0H7a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-8.5 2.49v.01m7-.01v.01"/> </svg>
  );
};

export default Carparking01;
