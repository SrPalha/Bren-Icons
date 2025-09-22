import React from 'react';
import type { IconProps } from '../types';

const Drawingcompass: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 10 5 22m9-12 5 12M12 4V2"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M3 13c1.99 3.024 5.28 5 9 5 3.72 0 7.01-1.976 9-5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 17v2"/> </svg>
  );
};

export default Drawingcompass;
