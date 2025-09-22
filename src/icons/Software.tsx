import React from 'react';
import type { IconProps } from '../types';

const Software: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M10 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18.245 15a8 8 0 1 0-12.49 0"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M3 18.5c0-1.404 0-2.107.303-2.611.132-.218.3-.406.497-.552C4.254 15 4.886 15 6.15 15h11.7c1.264 0 1.896 0 2.35.337.197.146.365.334.497.552.303.504.303 1.207.303 2.611 0 1.404 0 2.107-.303 2.611-.132.218-.3.406-.497.552-.454.337-1.086.337-2.35.337H6.15c-1.264 0-1.896 0-2.35-.337a1.912 1.912 0 0 1-.497-.552C3 20.607 3 19.904 3 18.5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 18h2m2.89-11.389L17.902 4.6"/> </svg>
  );
};

export default Software;
