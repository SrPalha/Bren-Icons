import React from 'react';
import type { IconProps } from '../types';

const Bitcoineye: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 2.75 7 5v2m12.25-4.25L17 5v2m-5-4.25V6M4.75 3.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm14.5 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 3.5A.75.75 0 1 0 12 2a.75.75 0 0 0 0 1.5Zm-1.562 14.667v-5.334m1.562 0V11.5m0 8v-1.333M10.437 15.5h3.126m0 0c.517 0 .937.448.937 1v.667c0 .552-.42 1-.938 1H9.5m4.063-2.667c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.938-1H9.5"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M12 9c6 0 10 6.5 10 6.5S18 22 12 22 2 15.5 2 15.5 6 9 12 9Z"/> </svg>
  );
};

export default Bitcoineye;
