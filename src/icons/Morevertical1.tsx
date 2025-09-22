import React from 'react';
import type { IconProps } from '../types';

const Morevertical1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11.992 12h.01m-.018 6h.01M12 6h.009"/> </svg>
  );
};

export default Morevertical1;
