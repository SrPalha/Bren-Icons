import React from 'react';
import type { IconProps } from '../types';

const Honor: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.5 3.001h19m-17 0V14c0 2.329.43 3.09 2.428 4.288l3.014 1.808c1.003.602 1.504.903 2.058.903.554 0 1.055-.301 2.058-.903l3.015-1.808c1.996-1.2 2.427-1.96 2.427-4.288V3.001m-5 10h-5m5-5h-5"/> </svg>
  );
};

export default Honor;
