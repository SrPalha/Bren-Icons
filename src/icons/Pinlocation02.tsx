import React from 'react';
import type { IconProps } from '../types';

const Pinlocation02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 11v7m5 1c0 1.105-2.239 2-5 2s-5-.895-5-2"/> </svg>
  );
};

export default Pinlocation02;
