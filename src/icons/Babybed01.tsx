import React from 'react';
import type { IconProps } from '../types';

const Babybed01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 7v8M8 7v8m8-8v8m4 5V6a2 2 0 0 1 2-2M4 20V6a2 2 0 0 0-2-2m2 3h16M4 15h16M4 18h16"/> </svg>
  );
};

export default Babybed01;
