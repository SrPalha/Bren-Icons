import React from 'react';
import type { IconProps } from '../types';

const Bookshelf01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.5 20v2m14-2v2M3 11h18M3 14V8c0-2.828 0-4.243.93-5.121C4.86 2 6.358 2 9.353 2h5.294c2.995 0 4.492 0 5.423.879C21 3.757 21 5.172 21 8v6c0 2.828 0 4.243-.93 5.121-.93.879-2.428.879-5.423.879H9.353c-2.995 0-4.492 0-5.423-.879C3 18.243 3 16.828 3 14Zm10.5-3-2-5M7 11V6m1 13.5V15m4 5v-5m5-4V6m-1 14 1-5"/> </svg>
  );
};

export default Bookshelf01;
