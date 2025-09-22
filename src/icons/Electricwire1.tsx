import React from 'react';
import type { IconProps } from '../types';

const Electricwire1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21V9h-2c-.943 0-1.414 0-1.707.293C8 9.586 8 10.057 8 11v10m8 0V11c0-.943 0-1.414-.293-1.707C15.414 9 14.943 9 14 9h-2v12m8-16v4m2-2h-4M6 7H2m8 2V6c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C8.398 3 7.932 3 7 3m7 6V6c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C15.602 3 16.068 3 17 3"/> </svg>
  );
};

export default Electricwire1;
