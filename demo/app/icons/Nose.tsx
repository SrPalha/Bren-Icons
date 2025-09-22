import React from 'react';
import type { IconProps } from '../types';

const Nose: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 17c2 0 2.5 4 5 4s3-4 5-4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.5 3c0 2.279-1.368 7.018-2.764 9.112-1.573 2.36-2.956 6.265.002 7.692C7.198 20.51 9 19.087 9 19.087M15.5 3c0 2.278 1.368 7.018 2.764 9.112 1.573 2.36 2.956 6.265-.002 7.692-1.46.705-3.262-.717-3.262-.717"/> </svg>
  );
};

export default Nose;
