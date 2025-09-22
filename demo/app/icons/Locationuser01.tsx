import React from 'react';
import type { IconProps } from '../types';

const Locationuser01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M13.198 8h-2.396c-3.444 0-5.766 3.58-4.409 6.8a1.2 1.2 0 0 0 1.102.739h.844c.284 0 .532.196.601.477l1.086 4.417A2.041 2.041 0 0 0 12 22a2.04 2.04 0 0 0 1.974-1.567l1.086-4.417a.622.622 0 0 1 .601-.477h.844a1.2 1.2 0 0 0 1.102-.74C18.964 11.581 16.642 8 13.197 8ZM12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/> </svg>
  );
};

export default Locationuser01;
