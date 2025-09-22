import React from 'react';
import type { IconProps } from '../types';

const Glove: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.282 21h-1.08c-1.937 0-2.905 0-3.738-.422-.833-.423-1.414-1.208-2.576-2.778l-2.474-3.343a2.121 2.121 0 0 1 .193-2.745 2.054 2.054 0 0 1 3.122.225L8.256 14V9.42c0-.39 0-.585.009-.75.166-3.054 2.571-5.493 5.584-5.66.163-.01.356-.01.741-.01.447 0 .67 0 .85.011 3.364.208 5.878 3.216 5.527 6.614-.018.181-.055.405-.129.851l-.772 4.7c-.388 2.357-.582 3.535-1.25 4.361a3.96 3.96 0 0 1-1.083.93c-.914.533-2.093.533-4.45.533ZM19 17h-7"/> </svg>
  );
};

export default Glove;
