import React from 'react';
import type { IconProps } from '../types';

const Movetop: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M9 19a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v10m0-10c-.562 0-.99.438-1.844 1.314L8.5 4.971M12 2c.562 0 .99.438 1.844 1.314L15.5 4.97"/> </svg>
  );
};

export default Movetop;
