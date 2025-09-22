import React from 'react';
import type { IconProps } from '../types';

const Orange: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M20.5 14c0 4.418-3.806 8-8.5 8s-8.5-3.582-8.5-8S7.306 6 12 6s8.5 3.582 8.5 8Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6c0-1.333.6-4 3-4m-3 4c-.5-1.167 0-4-6-4 .333 1 1 4 6 4Z"/> </svg>
  );
};

export default Orange;
