import React from 'react';
import type { IconProps } from '../types';

const Shaka4: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.511 10a1.5 1.5 0 1 1 2.998 0M7.51 10 6.265 3.883a1.643 1.643 0 0 0-3.249.49l1.498 8.794s.328 3.018.659 3.883c.404 1.64 1.34 2.691 1.34 4.45M7.51 10v2a1.5 1.5 0 1 0 2.998 0v-.5m0 0v-2a1.5 1.5 0 1 1 2.997 0V9m-2.997 2.5a1.5 1.5 0 1 0 2.997 0V11m0-2a1.5 1.5 0 1 1 2.998 0v2a1.5 1.5 0 1 1-2.998 0m0-2v2m2.998 1.963 1.619-1.626a1.681 1.681 0 0 1 2.508.14c.48.602.493 1.455.032 2.072l-3.597 4.598c-.688.88-1.062 2.236-1.062 3.353"/> </svg>
  );
};

export default Shaka4;
