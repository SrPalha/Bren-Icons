import React from 'react';
import type { IconProps } from '../types';

const Squaresquare: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.717 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.717 2.5 16.479 2.5 12Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6.36 10.996c.36 0 1.352-.146 1.713.616.415.878 1.457 3.861 1.706 4.46.288.69.732 1.032 1.872.912"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12.006 10.984c-1.386 0-2.406 2.088-2.959 2.928-.66 1.053-1.727 3.12-3.047 3.072"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 11h-3s2.005-1.32 2.224-1.47c.22-.151.776-.476.776-1.202C18 7.603 17.275 7 16.507 7 15.74 7 15 7.535 15 8.336"/> </svg>
  );
};

export default Squaresquare;
