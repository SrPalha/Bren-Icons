import React from 'react';
import type { IconProps } from '../types';

const Nthroot: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 7h-8.386c-1.234 0-1.649.14-1.955 1.364l-2.32 9.278c-.55 2.198-.824 3.297-1.554 3.356-.73.058-1.235-.978-2.244-3.05l-.57-1.173c-.436-.893-.653-1.34-1.092-1.46-.662-.182-1.37.355-1.879.685m1-7V5.571m0 0C3 4.151 4.12 3 5.5 3S8 4.151 8 5.571V9M3 5.571V3"/> </svg>
  );
};

export default Nthroot;
