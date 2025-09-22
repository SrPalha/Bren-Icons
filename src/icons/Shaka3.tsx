import React from 'react';
import type { IconProps } from '../types';

const Shaka3: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 16.488a1.5 1.5 0 1 0 0-2.997m0 2.997 6.117 1.247a1.643 1.643 0 0 1-.49 3.249l-8.794-1.498s-3.017-.328-3.883-.659c-1.662-.41-2.683-1.34-4.45-1.34M14 16.49h-2a1.5 1.5 0 1 1 0-2.998h.5m0 0h2a1.5 1.5 0 1 0 0-2.997h.5m-2.5 2.997a1.5 1.5 0 1 1 0-2.997h.5m2 0a1.5 1.5 0 1 0 0-2.998h-2a1.5 1.5 0 1 0 0 2.998m2 0h-2m-1.962-2.998 1.625-1.619c.713-.71.648-1.88-.14-2.508a1.698 1.698 0 0 0-2.072-.032L5.853 6.934c-.88.688-2.236 1.062-3.353 1.062"/> </svg>
  );
};

export default Shaka3;
