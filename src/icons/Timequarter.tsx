import React from 'react';
import type { IconProps } from '../types';

const Timequarter: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 15c.143.427.31.843.5 1.245m1.625 2.501c.317.368.656.714 1.016 1.035M9 22a10.593 10.593 0 0 1-1.304-.518"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 13.5a1.5 1.5 0 1 0-1.5-1.5m1.5 1.5a1.5 1.5 0 0 1-1.5-1.5m1.5 1.5V16m-1.5-4H6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12"/> </svg>
  );
};

export default Timequarter;
