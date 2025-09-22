import React from 'react';
import type { IconProps } from '../types';

const Suncloudmidrain01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M9 3.655A3.836 3.836 0 0 0 5.844 2 3.85 3.85 0 0 0 2 5.857C2 7.154 2.638 8.3 3.616 9"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.478 9.01h.022c2.485 0 4.5 2.017 4.5 4.506 0 1.962-1.252 3.365-3 3.984m-1.522-8.49A5.504 5.504 0 0 0 12 3a5.504 5.504 0 0 0-5.48 5.03m10.958.98a5.488 5.488 0 0 1-1.235 3.004M6.52 8.03A5.005 5.005 0 0 0 2 13.015C2 15.07 3.234 16.71 5 17.5m1.52-9.47a4.973 4.973 0 0 1 3.48.98"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m12.043 13-1.136 1.036a1.417 1.417 0 0 0 .029 2.016c.288.28.704.448 1.107.448.404 0 .737-.14 1.025-.392a1.424 1.424 0 0 0 0-2.044L12.043 13Zm-3.5 5.5-1.136 1.036a1.417 1.417 0 0 0 .029 2.016c.288.28.704.448 1.107.448.404 0 .737-.14 1.025-.392a1.424 1.424 0 0 0 0-2.044L8.543 18.5Zm7 0-1.136 1.036a1.417 1.417 0 0 0 .029 2.016c.288.28.704.448 1.107.448.404 0 .737-.14 1.025-.392a1.424 1.424 0 0 0 0-2.044L15.543 18.5Z"/> </svg>
  );
};

export default Suncloudmidrain01;
