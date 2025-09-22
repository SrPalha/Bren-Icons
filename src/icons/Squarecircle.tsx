import React from 'react';
import type { IconProps } from '../types';

const Squarecircle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7.292 11.209c.664-.035 1.208 0 1.468.611.3.705 1.14 2.94 1.32 3.42.207.554.54.84 1.544.756"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11.912 11.209c-1.08-.06-2.014 1.655-2.448 2.412-.54.84-1.424 2.4-2.46 2.376"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 11h-3s2.005-1.32 2.224-1.47c.22-.151.776-.476.776-1.202C17.5 7.603 16.775 7 16.007 7c-.767 0-1.507.535-1.507 1.336"/> </svg>
  );
};

export default Squarecircle;
