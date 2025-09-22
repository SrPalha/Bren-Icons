import React from 'react';
import type { IconProps } from '../types';

const Easeoutcontrolpoint2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 21S11 5 22 5"/>   <path fill="#1B1C1B" d="M6 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" opacity=".4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5h2M6 5h2M6 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/> </svg>
  );
};

export default Easeoutcontrolpoint2;
