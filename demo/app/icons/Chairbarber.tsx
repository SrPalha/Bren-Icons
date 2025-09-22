import React from 'react';
import type { IconProps } from '../types';

const Chairbarber: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.697 15H8c-1.105 0-2-.905-2-2.021 0-1.116.898-2.027 2.001-1.977 4.69.214 7.294 1.146 8.383 1.65.396.184.616.591.616 1.031A1.31 1.31 0 0 1 15.697 15Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m17 14 3.94-10.516c.21-.575-.15-1.193-.787-1.355-1.634-.415-3.345.182-3.883 1.656C15.644 5.496 15 8.131 15 12m0-4.04s-3.381-1.394-4.68-.82c-.39.172-.722.457-.956.82C9 8.525 9 9.35 9 11m-3 2v3c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C4.398 19 3.932 19 3 19m9-4v6m-2 0h4"/> </svg>
  );
};

export default Chairbarber;
