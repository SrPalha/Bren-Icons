import React from 'react';
import type { IconProps } from '../types';

const Upload01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M3.095 10c-.063.457-.095.925-.095 1.4 0 5.302 4.03 9.6 9 9.6s9-4.298 9-9.6c0-.476-.032-.943-.095-1.4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v10m0-10c-.7 0-2.008 1.994-2.5 2.5M12 3c.7 0 2.008 1.994 2.5 2.5"/> </svg>
  );
};

export default Upload01;
