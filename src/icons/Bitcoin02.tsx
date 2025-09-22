import React from 'react';
import type { IconProps } from '../types';

const Bitcoin02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm0-5.25V5.5m-.75-2.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm-5.5 0V5.5L7 6.5M5 2.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm13.25 0V5.5L17 6.5m2-3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.438 17.667v-5.334m1.562 0V11m0 8v-1.333M10.437 15h3.126m0 0c.517 0 .937.448.937 1v.667c0 .552-.42 1-.938 1H9.5M13.563 15c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.938-1H9.5"/> </svg>
  );
};

export default Bitcoin02;
