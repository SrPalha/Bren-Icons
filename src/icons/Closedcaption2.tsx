import React from 'react';
import type { IconProps } from '../types';

const Closedcaption2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 12c0-3.98 0-5.97 1.053-7.298.168-.212.354-.409.554-.587C4.862 3 6.741 3 10.5 3h3c3.759 0 5.638 0 6.892 1.115.201.178.387.375.555.587C22 6.03 22 8.02 22 12s0 5.97-1.053 7.298a4.64 4.64 0 0 1-.555.587C19.138 21 17.26 21 13.5 21h-3c-3.759 0-5.638 0-6.893-1.115a4.641 4.641 0 0 1-.554-.587C2 17.97 2 15.98 2 12Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10.5 9H10c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C7 10.602 7 11.068 7 12c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C8.602 15 9.068 15 10 15h.5M17 9h-.5c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.152.367-.152.833-.152 1.765 0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083c.367.152.833.152 1.765.152h.5"/> </svg>
  );
};

export default Closedcaption2;
