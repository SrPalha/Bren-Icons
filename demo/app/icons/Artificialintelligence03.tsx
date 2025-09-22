import React from 'react';
import type { IconProps } from '../types';

const Artificialintelligence03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 22v-.5c0-1.105.932-2 1.922-2.489.963-.476 1.772-1.26 1.875-2.18L20 15l2-1-2.5-3.75A8.25 8.25 0 0 0 8 2.665M6.5 16.996V22m0-5.004a8.273 8.273 0 0 1-3-3.911m3 3.911c.75.53 1.594.937 2.5 1.194"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.75 3.25 6 5.5h4M3.5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 5.5H10m-6.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/> </svg>
  );
};

export default Artificialintelligence03;
