import React from 'react';
import type { IconProps } from '../types';

const Eurocircle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M15 14.492c-.478.904-1.349 1.508-2.343 1.508-1.51 0-2.734-1.393-2.734-3.111V11.11c0-1.717 1.224-3.11 2.734-3.11.994 0 1.865.604 2.343 1.508M9 12h3.923"/> </svg>
  );
};

export default Eurocircle;
