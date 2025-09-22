import React from 'react';
import type { IconProps } from '../types';

const Labs: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M17.5 21a3.5 3.5 0 0 1-3.5-3.5V3h7v14.5a3.5 3.5 0 0 1-3.5 3.5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M22 3h-9m4 4h-3"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M10 16.875C10 19.913 8 21 6 21s-4-1.087-4-4.125C2 13.837 6 10 6 10s4 3.837 4 6.875Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14 12c1.083-.866 2.297-2.122 3.771-1.237 1.23.738 2.263-.039 3.229-.763"/> </svg>
  );
};

export default Labs;
