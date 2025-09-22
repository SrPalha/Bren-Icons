import React from 'react';
import type { IconProps } from '../types';

const Bounceright: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10c-2.115 3.01-3.105 7.153-3.752 10.086-.131.596-.197.895-.335.913-.138.019-.28-.265-.561-.833C9.006 17.458 6.217 15.062 4 17.108M18 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/> </svg>
  );
};

export default Bounceright;
