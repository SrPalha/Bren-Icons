import React from 'react';
import type { IconProps } from '../types';

const Addcirclehalfdot: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.649 5.079c.138-.147.28-.29.427-.428M7.947 2.73c.182-.081.366-.158.553-.229m-6 6c.072-.189.15-.375.232-.558M12 8v8m4-4H8"/> </svg>
  );
};

export default Addcirclehalfdot;
