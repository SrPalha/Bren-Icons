import React from 'react';
import type { IconProps } from '../types';

const Bitcoin04: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.945 18.167v-5.334m1.562 0V11.5m0 8v-1.333M13.945 15.5h3.125m0 0c.518 0 .937.448.937 1v.667c0 .552-.42 1-.937 1h-4.063M17.07 15.5c.518 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1h-4.063"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.502 9a6.499 6.499 0 0 0-6.497 6.5A6.499 6.499 0 1 0 22 15.5c0-3.59-2.909-6.5-6.498-6.5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8.005 6c3.313 0 5.998-.895 5.998-2s-2.685-2-5.998-2c-3.312 0-5.998.895-5.998 2s2.686 2 5.998 2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 4v8.043c0 .704 1.18 1.59 4.132 1.957M2.107 8.548c1.205 1.062 3.354 1.512 5.65 1.512m6.239-5.939v2.015"/> </svg>
  );
};

export default Bitcoin04;
