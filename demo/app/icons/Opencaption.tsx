import React from 'react';
import type { IconProps } from '../types';

const Opencaption: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 10.5c0-3.316 0-4.975 1.053-6.082a4.41 4.41 0 0 1 .554-.49C4.862 3 6.741 3 10.5 3h3c3.759 0 5.638 0 6.892.929a4.2 4.2 0 0 1 .555.49C22 5.524 22 7.183 22 10.5c0 3.316 0 4.975-1.053 6.082a4.35 4.35 0 0 1-.555.49C19.138 18 17.26 18 13.5 18h-3c-3.759 0-5.638 0-6.893-.929a4.283 4.283 0 0 1-.554-.49C2 15.476 2 13.817 2 10.5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10.5 7.5H10c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C7 9.102 7 9.568 7 10.5c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083c.367.152.833.152 1.765.152h.5m6.5-6h-.5c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.152.367-.152.833-.152 1.765 0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083c.367.152.833.152 1.765.152h.5M2 21h20"/> </svg>
  );
};

export default Opencaption;
