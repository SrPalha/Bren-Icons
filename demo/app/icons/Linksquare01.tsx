import React from 'react';
import type { IconProps } from '../types';

const Linksquare01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.1 3.002c-3.648.007-5.56.096-6.78 1.317C3.002 5.637 3.002 7.758 3.002 12s0 6.363 1.318 7.681c1.318 1.318 3.438 1.318 7.68 1.318 4.242 0 6.363 0 7.681-1.318 1.221-1.221 1.31-3.132 1.317-6.78m-.518-9.385L14.933 9.05m5.549-5.534c-.494-.494-3.822-.448-4.525-.438m4.525.438c.494.495.448 3.826.438 4.53"/> </svg>
  );
};

export default Linksquare01;
