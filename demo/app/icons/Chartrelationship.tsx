import React from 'react';
import type { IconProps } from '../types';

const Chartrelationship: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5h7m-8 5 4.5 4.5M5 11v7"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M6.444 10.889a4.444 4.444 0 1 0 0-8.889 4.444 4.444 0 0 0 0 8.889ZM5 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm11-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/> </svg>
  );
};

export default Chartrelationship;
