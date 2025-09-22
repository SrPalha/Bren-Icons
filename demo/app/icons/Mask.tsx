import React from 'react';
import type { IconProps } from '../types';

const Mask: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6 9c1.466-.613 3.61-1 6-1s4.534.387 6 1m-9 2.5c.94-.324 1.95-.5 3-.5s2.06.176 3 .5M8 15c1.177.636 2.543 1 4 1a8.397 8.397 0 0 0 4-1"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 10c0 3.257-1.831 4.942-2.943 4.998a.093.093 0 0 1-.086-.048C2.157 13.497 2 11.788 2 10c0-3.314.895-6 2-6s2 2.686 2 6Zm12 0c0 3.257 1.831 4.942 2.943 4.998a.093.093 0 0 0 .086-.048c.814-1.453.971-3.162.971-4.95 0-3.314-.895-6-2-6s-2 2.686-2 6Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 15c-1.797 2.989-5.154 5-9 5s-7.204-2.011-9-5"/> </svg>
  );
};

export default Mask;
