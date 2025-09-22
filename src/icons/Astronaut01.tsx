import React from 'react';
import type { IconProps } from '../types';

const Astronaut01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 18A9 9 0 1 0 3 11v9m15.5-2.5-4.379-4.379M18 5l-3.88 3.879"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 18H5c-.943 0-1.414 0-1.707.293C3 18.586 3 19.057 3 20c0 .943 0 1.414.293 1.707C3.586 22 4.057 22 5 22h15a1 1 0 0 0 1-1 3 3 0 0 0-3-3Z"/> </svg>
  );
};

export default Astronaut01;
