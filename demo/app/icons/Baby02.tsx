import React from 'react';
import type { IconProps } from '../types';

const Baby02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M16.874 12A6.514 6.514 0 0 1 18 15.684c0 .818-.148 1.599-.416 2.316m0 0c-.878 2.342-3.047 4-5.584 4-3.314 0-6-2.828-6-6.316A6.51 6.51 0 0 1 7.126 12m10.458 6c-2.733-1.2-5.528-3.167-6.584-4m1-12c-.994 0-1.8.784-1.8 1.75S11.006 5.5 12 5.5c.461 0 .882-.168 1.2-.446M10 8h.008M14 8h.008"/> </svg>
  );
};

export default Baby02;
