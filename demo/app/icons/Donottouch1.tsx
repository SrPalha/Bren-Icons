import React from 'react';
import type { IconProps } from '../types';

const Donottouch1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 22v-1.164c0-.923.499-1.65 1-2.336M8 22c0-1.117-.374-2.473-1.063-3.353l-3.6-4.598a1.696 1.696 0 0 1 .033-2.072 1.683 1.683 0 0 1 2.51-.14l1.62 1.626V7.5m6.002-2a1.5 1.5 0 1 1 3 0v2m-3-2v-2a1.5 1.5 0 0 0-3 0V5m3 .5v4m3-2V12m0-4.5a1.5 1.5 0 1 1 3 0v6.167c0 .714 0 1.323-.012 1.833M10.502 5a1.5 1.5 0 0 0-1.5-1.5C8.174 3.5 8 4 8 4m2.502 1v1.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m2 2 20 20"/> </svg>
  );
};

export default Donottouch1;
