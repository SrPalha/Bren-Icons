import React from 'react';
import type { IconProps } from '../types';

const Smartphone04: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M16 6.5c-.062-1.712-.275-2.75-1.001-3.475C13.972 2 12.319 2 9.013 2 5.707 2 4.054 2 3.027 3.025 2 4.05 2 5.7 2 9v6c0 3.3 0 4.95 1.027 5.975C4.054 22 5.707 22 9.013 22c3.306 0 4.959 0 5.986-1.025.726-.725.939-1.763 1.001-3.475"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 19h2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M16 11.99V12m4.048 4.491C21.254 15.34 22 13.75 22 11.991c0-1.757-.746-3.348-1.952-4.5M18 9.741c.603.576.976 1.372.976 2.25 0 .879-.373 1.674-.976 2.25"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m6 2 .089.534c.193 1.157.29 1.736.686 2.088C7.19 4.989 7.776 5 9 5c1.224 0 1.81-.01 2.225-.378.397-.352.493-.93.686-2.088L12 2"/> </svg>
  );
};

export default Smartphone04;
