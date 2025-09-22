import React from 'react';
import type { IconProps } from '../types';

const Unlink03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m9.523 14.437 4.914-4.914"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.015 16.01h-2.003m-3.006 5.01v-2.004M2.982 7.993h2.004m3.006-5.01v2.004m7.115 7.583c1.14.74 2.308.542 3.163-.312l2.994-2.995a2.506 2.506 0 0 0 0-3.543l-2.985-2.986a2.504 2.504 0 0 0-3.543 0l-2.994 2.995c-.702.702-1.107 2.036-.277 3.182m1.104 6.199c.739 1.14.542 2.309-.313 3.163l-2.994 2.995a2.504 2.504 0 0 1-3.542 0l-2.985-2.986a2.506 2.506 0 0 1 0-3.543l2.994-2.995c.702-.702 2.035-1.107 3.182-.277"/> </svg>
  );
};

export default Unlink03;
