import React from 'react';
import type { IconProps } from '../types';

const Link03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m9.52 14.437 4.914-4.914"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.569 15.108c.74 1.14.542 2.31-.313 3.164l-2.995 2.996a2.505 2.505 0 0 1-3.543 0L2.732 18.28a2.505 2.505 0 0 1 0-3.543l2.995-2.995c.702-.702 2.036-1.107 3.183-.277m6.198 1.103c1.14.74 2.31.542 3.164-.313l2.995-2.995a2.505 2.505 0 0 0 0-3.543l-2.986-2.986a2.505 2.505 0 0 0-3.543 0l-2.995 2.995c-.702.702-1.107 2.036-.277 3.183"/> </svg>
  );
};

export default Link03;
