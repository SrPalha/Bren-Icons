import React from 'react';
import type { IconProps } from '../types';

const Lake: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 21.968c.95 0 1.889.087 2.678-.528.774-.604 2.005-.584 2.749.044.81.685 2.34.665 3.17.02.804-.628 2.024-.7 2.83-.02.884.747 2.373.64 3.251-.044.774-.604 2.005-.584 2.748.044.717.605 1.694.484 2.574.484m-20-4c.95 0 1.889.087 2.678-.528.774-.604 2.005-.584 2.749.044.81.685 2.34.665 3.17.02.804-.628 2.024-.7 2.83-.02.884.747 2.373.64 3.251-.044.774-.604 2.005-.584 2.748.044.717.605 1.694.484 2.574.484M2 14h20M6 14V3m0 0c-.25.667-1.2 2.5-3 2.5M6 3c.25.667 1.2 2.5 3 2.5m-6 3c1.8 0 2.75-1.833 3-2.5.25.667 1.2 2.5 3 2.5M17.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/> </svg>
  );
};

export default Lake;
