import React from 'react';
import type { IconProps } from '../types';

const Approximatelyequal: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7.927C6.667 4.928 9.333 5.806 12 8s5.333 3.072 8 .073M4 15.927c2.667-2.999 5.333-2.121 8 .073s5.333 3.072 8 .073"/> </svg>
  );
};

export default Approximatelyequal;
