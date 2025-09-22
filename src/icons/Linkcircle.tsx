import React from 'react';
import type { IconProps } from '../types';

const Linkcircle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21.001 12A9 9 0 0 1 12 21a9.001 9.001 0 1 1 0-18"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.554 3.468 14.99 9.01m5.564-5.54c-.495-.496-3.832-.45-4.537-.44m4.537.44c.495.494.449 3.83.439 4.535"/> </svg>
  );
};

export default Linkcircle;
