import React from 'react';
import type { IconProps } from '../types';

const Bitcoinshopping: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M4.3 17.191 3.16 10.26c-.172-1.048-.258-1.572.018-1.916C3.454 8 3.96 8 4.976 8h14.048c1.015 0 1.522 0 1.798.343.276.344.19.868.018 1.916l-1.14 6.932c-.379 2.298-.567 3.447-1.339 4.128S16.477 22 14.253 22H9.747c-2.224 0-3.336 0-4.108-.681-.771-.681-.96-1.83-1.338-4.128Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.438 17.667v-5.334m1.562 0V11m0 8v-1.333M10.437 15h3.126m0 0c.517 0 .937.448.937 1v.667c0 .552-.42 1-.938 1H9.5M13.563 15c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.938-1H9.5"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M17 8c0-3.314-1.5-6-5-6S7 4.686 7 8"/> </svg>
  );
};

export default Bitcoinshopping;
