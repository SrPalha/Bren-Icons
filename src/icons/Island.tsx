import React from 'react';
import type { IconProps } from '../types';

const Island: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 21.968c.95 0 1.889.087 2.678-.528.774-.604 2.005-.584 2.749.044.81.685 2.34.665 3.17.02.804-.628 2.024-.7 2.83-.02.884.747 2.373.64 3.251-.044.774-.604 2.005-.584 2.748.044.717.605 1.694.484 2.574.484M8 19c1.198-2.391 3.436-4 6-4s4.802 1.609 6 4m-9-3.898C8 14.545 5.397 16.337 4 19m8-4c0-3 .8-7.84 4-10m-.5-3c.875 0 1.802 1.097.5 3m0 0c.786.234 3.208 1.32 2.983 4M16 5c-.585-.704-2.687-1.6-4-.2m4 .2c.58.71 1 3 0 4"/> </svg>
  );
};

export default Island;
