import React from 'react';
import type { IconProps } from '../types';

const Checkmarkcircle03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M17 3.338A9.954 9.954 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-.685-.069-1.354-.2-2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"/> </svg>
  );
};

export default Checkmarkcircle03;
