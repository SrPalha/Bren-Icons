import React from 'react';
import type { IconProps } from '../types';

const Comet01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M4.05 10.05a7 7 0 0 0 9.9 9.9L17.899 16M12.1 2 6.5 7.6M22 11.9l-2 2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11.121 12.879A3 3 0 1 1 6.88 17.12a3 3 0 0 1 4.242-4.242Zm-4.242.001L14 5.758M17.758 2 16 3.758m6 2.485-6.636 6.636"/> </svg>
  );
};

export default Comet01;
