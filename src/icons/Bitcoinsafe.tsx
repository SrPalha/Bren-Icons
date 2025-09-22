import React from 'react';
import type { IconProps } from '../types';

const Bitcoinsafe: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M11 2h2c4.243 0 6.364 0 7.682 1.318C22 4.636 22 6.758 22 11c0 4.243 0 6.364-1.318 7.682C19.364 20 17.242 20 13 20h-2c-4.243 0-6.364 0-7.682-1.318C2 17.364 2 15.242 2 11c0-4.243 0-6.364 1.318-7.682C4.636 2 6.758 2 11 2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7 15c-1-.53-1-1.385-1-3.094v-1.812C6 8.385 6 7.53 7 7m11 15v-2M6 22v-2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.938 13.667V8.333m1.562 0V7m0 8v-1.333M12.937 11h3.126m0 0c.517 0 .937.448.937 1v.667c0 .552-.42 1-.938 1H12M16.063 11c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.938-1H12"/> </svg>
  );
};

export default Bitcoinsafe;
