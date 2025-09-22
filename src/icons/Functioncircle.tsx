import React from 'react';
import type { IconProps } from '../types';

const Functioncircle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.5 15.5c.132.478.398 1 1.094 1 1.203 0 1.504-1 2.406-4.5.902-3.5 1.203-4.5 2.406-4.5.696 0 .962.522 1.094 1m-4.958 2.25h3.864"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/> </svg>
  );
};

export default Functioncircle;
