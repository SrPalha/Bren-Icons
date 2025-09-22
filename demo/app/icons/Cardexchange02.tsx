import React from 'react';
import type { IconProps } from '../types';

const Cardexchange02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 14.006a5.994 5.994 0 0 1-6 5.996l.857-1.713M2 10.009a5.994 5.994 0 0 1 6-5.996l-.857 1.713m3.823-.202h10.806m-8.306 5.47H19.5A2.5 2.5 0 0 0 22 8.496v-4A2.5 2.5 0 0 0 19.5 2h-6.034a2.5 2.5 0 0 0-2.5 2.498v4a2.5 2.5 0 0 0 2.5 2.497ZM2 16.532h10.806M4.5 22.002h6.034a2.5 2.5 0 0 0 2.5-2.499v-3.999a2.5 2.5 0 0 0-2.5-2.498H4.5A2.5 2.5 0 0 0 2 15.504v4a2.5 2.5 0 0 0 2.5 2.498Z"/> </svg>
  );
};

export default Cardexchange02;
