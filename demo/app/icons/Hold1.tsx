import React from 'react';
import type { IconProps } from '../types';

const Hold1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5.5a1.5 1.5 0 0 1 3 0V12m-3-6.5v-2a1.5 1.5 0 0 0-3 0V5m3 .5V11m-3-6a1.5 1.5 0 0 0-3 0v8.462l-1.62-1.625a1.683 1.683 0 0 0-2.51.14 1.696 1.696 0 0 0-.033 2.072l3.6 4.598C8.126 19.527 8.5 20.883 8.5 22M11 5v5m7 12v-1.164a2.2 2.2 0 0 1 .565-1.44c.405-.462.912-1.102 1.104-1.604.331-.865.331-1.952.331-4.125V7.5a1.5 1.5 0 0 0-3 0"/> </svg>
  );
};

export default Hold1;
