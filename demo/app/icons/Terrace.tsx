import React from 'react';
import type { IconProps } from '../types';

const Terrace: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3 14 1 5m0 0-1 3m1-3h2.653c.704 0 .87.14.986.836L8 22m13-8-1 5m0 0 1 3m-1-3h-2.653c-.704 0-.87.14-.986.836L16 22m-4-12v12M4.6 7.407c2.07-.969 4.153-2.507 5.69-4.043C11.199 2.454 11.654 2 12 2c.346 0 .8.455 1.711 1.364 1.536 1.535 3.619 3.074 5.688 4.043.704.33 1.134.736 1.474 1.528.26.605.143 1.065-.566 1.065H3.693c-.71 0-.826-.46-.566-1.065.34-.792.77-1.198 1.473-1.528ZM11 22h2m-4-7h6"/> </svg>
  );
};

export default Terrace;
