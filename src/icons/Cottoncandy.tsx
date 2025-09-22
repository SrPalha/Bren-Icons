import React from 'react';
import type { IconProps } from '../types';

const Cottoncandy: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.314 3.95a2.927 2.927 0 0 0-5.403-.282c-.31.65-1.089 1.242-1.807 1.308a3.415 3.415 0 0 0-.816 6.625m8.026-7.652a2.927 2.927 0 0 1-.69 3.048m.69-3.048a2.927 2.927 0 1 1 4.83 3.047c-.308.308-.308 1.073-.001 1.38a2.927 2.927 0 0 1-2.33 4.985m-10.525-1.76a2.927 2.927 0 1 0 3.887 4.364.222.222 0 0 1 .352.061 3.415 3.415 0 0 0 6.286-2.665m-10.525-1.76a2.927 2.927 0 0 1 3.886.225m6.638 1.535a2.915 2.915 0 0 1-1.809-.845 2.922 2.922 0 0 1-.572-.808"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m2 22 6-6"/> </svg>
  );
};

export default Cottoncandy;
