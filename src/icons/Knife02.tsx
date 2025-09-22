import React from 'react';
import type { IconProps } from '../types';

const Knife02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.647 17.716c.38-.097.68-.447 1.28-1.149l5.187-6.059c1.91-2.23 2.64-5.348.904-7.969-.575-.869-1.537-.56-2.138.034L2.574 18.692a1.922 1.922 0 0 0 0 2.74 1.975 1.975 0 0 0 3.005-.276c.946-1.368 2.428-4.885 4.08-5.51 1.712-.65 2.309 2.498 3.988 2.07Z"/> </svg>
  );
};

export default Knife02;
