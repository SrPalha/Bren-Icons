import React from 'react';
import type { IconProps } from '../types';

const Angle01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 20H6.473c-2.106 0-3.16 0-3.421-.617-.262-.618.482-1.344 1.972-2.797L17.924 4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 20c0-2.648-1.226-4.934-3-6"/> </svg>
  );
};

export default Angle01;
