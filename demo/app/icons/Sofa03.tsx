import React from 'react';
import type { IconProps } from '../types';

const Sofa03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16v3m10-3v3m4-9.732a2 2 0 0 0-2.733.732l-1.009 2.39c-.25.591-.278.61-.921.61H7.663c-.643 0-.67-.018-.921-.61L5.732 10a2 2 0 0 0-3.464 2c.431.747 1.627.684 1.82 1.265.44 1.32.66 1.98 1.184 2.357.524.378 1.22.378 2.611.378h8.234c1.391 0 2.087 0 2.61-.378.525-.377.745-1.037 1.184-2.357.194-.581 1.39-.518 1.82-1.265A2 2 0 0 0 21 9.268Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4.5 9 .04-.107C5.246 7.01 5.6 6.068 6.37 5.534 7.141 5 8.147 5 10.158 5h3.684c2.011 0 3.017 0 3.788.534.77.534 1.124 1.476 1.83 3.36L19.5 9"/> </svg>
  );
};

export default Sofa03;
