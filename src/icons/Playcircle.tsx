import React from 'react';
import type { IconProps } from '../types';

const Playcircle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M15.453 12.395c-.151.627-.867 1.07-2.3 1.955-1.383.856-2.075 1.285-2.633 1.113a1.376 1.376 0 0 1-.61-.393c-.41-.45-.41-1.324-.41-3.07 0-1.746 0-2.62.41-3.07.17-.186.38-.321.61-.392.558-.173 1.25.256 2.634 1.112 1.432.886 2.148 1.329 2.3 1.955a1.7 1.7 0 0 1 0 .79Z"/> </svg>
  );
};

export default Playcircle;
