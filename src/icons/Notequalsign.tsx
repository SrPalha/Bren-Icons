import React from 'react';
import type { IconProps } from '../types';

const Notequalsign: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M4 8h16M4 16h16M6 20 18 4"/> </svg>
  );
};

export default Notequalsign;
