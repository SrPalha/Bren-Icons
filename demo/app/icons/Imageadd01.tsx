import React from 'react';
import type { IconProps } from '../types';

const Imageadd01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11.508 2.99c-4.483 0-6.724 0-8.117 1.392C2 5.774 2 8.015 2 12.496c0 4.481 0 6.722 1.392 8.114 1.393 1.392 3.634 1.392 8.117 1.392 4.483 0 6.724 0 8.117-1.392 1.392-1.392 1.392-3.633 1.392-8.114v-.5"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M4.999 20.99c4.21-4.752 8.94-11.053 16-6.327"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.996 1.998v8.008M22 5.977l-8.01.015"/> </svg>
  );
};

export default Imageadd01;
