import React from 'react';
import type { IconProps } from '../types';

const Programmingflag: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M4 7c0-1.886 0-2.828.586-3.414C5.172 3 6.114 3 8 3h7c2.828 0 4.243 0 5.121.879C21 4.757 21 6.172 21 9c0 2.828 0 4.243-.879 5.121C19.243 15 17.828 15 15 15H4V7Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M4 21V8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m16 7 1.227 1.057c.515.445.773.667.773.943 0 .276-.258.498-.773.943L16 11M9 7 7.773 8.057C7.258 8.502 7 8.724 7 9c0 .276.258.498.773.943L9 11m4.5-4-2 4"/> </svg>
  );
};

export default Programmingflag;
