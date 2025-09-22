import React from 'react';
import type { IconProps } from '../types';

const Cpucharge: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.5 2v2m5-2v2m-5 16v2m5-2v2m7.5-7.5h-2m-16-5H2m2 5H2m20-5h-2m-7.306-1-2.091 2.537c-.224.272-.064.663.302.736l2.19.434c.39.077.538.51.266.774L10.767 15.5"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M4 12c0-3.771 0-5.657 1.172-6.828C6.343 4 8.229 4 12 4c3.771 0 5.657 0 6.828 1.172C20 6.343 20 8.229 20 12c0 3.771 0 5.657-1.172 6.828C17.657 20 15.771 20 12 20c-3.771 0-5.657 0-6.828-1.172C4 17.657 4 15.771 4 12Z"/> </svg>
  );
};

export default Cpucharge;
