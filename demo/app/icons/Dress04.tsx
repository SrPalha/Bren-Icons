import React from 'react';
import type { IconProps } from '../types';

const Dress04: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15 4-3 2-3-2c-.586.51-1.93 1.293-1.997 2.146-.029.37.126.571.435.975.674.881 1.442 1.4 1.442 2.879h6.24c0-1.48.768-1.998 1.442-2.879.31-.404.464-.606.434-.975C16.93 5.293 15.587 4.509 15 4Zm4.863 13.808c-.704-2.69-2.497-5.158-3.682-6.571-.85-1.014-1.477-1.237-2.81-1.237H10.63c-1.334 0-1.961.223-2.811 1.237-1.185 1.413-2.978 3.88-3.682 6.571-.43 1.642.154 2.541 1.75 3.122A17.962 17.962 0 0 0 12 22c2.563 0 4.679-.548 6.113-1.07 1.596-.58 2.18-1.48 1.75-3.122ZM9 4V2m6 2V2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 15s2 3 2 6.5M10 15s-2 3-2 6.5"/> </svg>
  );
};

export default Dress04;
