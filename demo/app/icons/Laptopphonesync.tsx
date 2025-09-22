import React from 'react';
import type { IconProps } from '../types';

const Laptopphonesync: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 15V7c0-1.886 0-2.828.586-3.414C5.172 3 6.114 3 8 3h3m9 12v-.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18 2c1.886 0 2.828 0 3.414.586C22 3.172 22 4.114 22 6v2c0 1.886 0 2.828-.586 3.414C20.828 12 19.886 12 18 12c-1.886 0-2.828 0-3.414-.586C14 10.828 14 9.886 14 8V6c0-1.886 0-2.828.586-3.414C15.172 2 16.114 2 18 2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.498 16.015 4.02 15h15.932l.55 1.015c1.443 2.662 1.803 3.993 1.254 4.989-.548.996-2.002.996-4.91.996H7.154c-2.909 0-4.363 0-4.911-.996-.549-.996-.19-2.327 1.254-4.989Z"/> </svg>
  );
};

export default Laptopphonesync;
