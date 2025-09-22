import React from 'react';
import type { IconProps } from '../types';

const Sourcecode: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m17 8 1.84 1.85c.773.778 1.16 1.167 1.16 1.65 0 .483-.387.872-1.16 1.65L17 15M7 8 5.16 9.85C4.387 10.628 4 11.017 4 11.5c0 .483.387.872 1.16 1.65L7 15m7.5-11-5 16"/> </svg>
  );
};

export default Sourcecode;
