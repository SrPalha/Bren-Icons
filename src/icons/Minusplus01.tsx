import React from 'react';
import type { IconProps } from '../types';

const Minusplus01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 7v14m7-7H5M19 3H5"/> </svg>
  );
};

export default Minusplus01;
