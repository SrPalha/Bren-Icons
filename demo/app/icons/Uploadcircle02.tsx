import React from 'react';
import type { IconProps } from '../types';

const Uploadcircle02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11.983 17v-5.976m0 0c-.261-.003-.52.18-.71.403L10 12.883m1.984-1.858c.252.003.508.185.71.402l1.282 1.456M14.99 8h-6"/> </svg>
  );
};

export default Uploadcircle02;
