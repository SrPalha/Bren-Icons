import React from 'react';
import type { IconProps } from '../types';

const Lefttriangle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 20v2m9-14V6.485c0-2.708 0-4.061-.79-4.412-.792-.351-1.733.584-3.617 2.456L4.716 15.337c-1.988 1.976-2.982 2.964-2.654 3.814C2.39 20 3.766 20 6.518 20H8m3 0h6.394c1.229 0 1.843 0 2.224-.396.382-.397.382-1.035.382-2.31V13c0-.943 0-1.414.293-1.707C20.586 11 21.057 11 22 11"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20 15h-1c-1.886 0-2.828 0-3.414.586C15 16.172 15 17.114 15 19v1"/> </svg>
  );
};

export default Lefttriangle;
