import React from 'react';
import type { IconProps } from '../types';

const Rhombus01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M8.056 4.789C9.916 2.929 10.845 2 12 2c1.155 0 2.085.93 3.944 2.789l3.267 3.267C21.071 9.916 22 10.845 22 12c0 1.155-.93 2.085-2.789 3.944l-3.267 3.267C14.084 21.071 13.155 22 12 22c-1.155 0-2.085-.93-3.944-2.789L4.79 15.944C2.929 14.084 2 13.155 2 12c0-1.155.93-2.085 2.789-3.944L8.056 4.79Z"/> </svg>
  );
};

export default Rhombus01;
