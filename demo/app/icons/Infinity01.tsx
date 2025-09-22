import React from 'react';
import type { IconProps } from '../types';

const Infinity01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 12s-2.739 5-5.5 5S2 14.761 2 12s1.739-5 4.5-5 5.5 5 5.5 5Zm0 0s2.739 5 5.5 5 4.5-2.239 4.5-5-1.739-5-4.5-5-5.5 5-5.5 5Z"/> </svg>
  );
};

export default Infinity01;
