import React from 'react';
import type { IconProps } from '../types';

const Bounceleft: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 10c2.115 3.01 3.105 7.153 3.752 10.086.131.596.197.895.335.913.138.019.28-.265.561-.833 1.346-2.708 4.135-5.104 6.352-3.058M6 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/> </svg>
  );
};

export default Bounceleft;
