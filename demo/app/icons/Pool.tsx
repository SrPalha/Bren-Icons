import React from 'react';
import type { IconProps } from '../types';

const Pool: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 21h-1c-1.451 0-2.722-.859-3-2-.278 1.141-1.549 2-3 2s-2.722-.859-3-2c-.278 1.141-1.549 2-3 2s-2.722-.859-3-2c-.278 1.141-1.549 2-3 2H2M19 3l-.265.088c-1.32.44-1.98.66-2.357 1.184C16 4.796 16 5.492 16 6.883V17M11 3l-.265.088c-1.32.44-1.98.66-2.357 1.184C8 4.796 8 5.492 8 6.883V17M8 7h8m-8 4h8m-8 4h8"/> </svg>
  );
};

export default Pool;
