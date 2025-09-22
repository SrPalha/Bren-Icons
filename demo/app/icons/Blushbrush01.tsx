import React from 'react';
import type { IconProps } from '../types';

const Blushbrush01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m8.065 11.032-5.182 1.791c-2.447.915.852 5.134 1.947 6.224 1.095 1.089 5.502 4.536 6.421 2.101l1.743-5.212m-9.76.554 2.702-1.378m1.703 5.386 1.254-2.444m3.733-9.804 1.003-.998c.394-.392 1.082-.319 1.476.074l1.564 1.556a1 1 0 0 1 0 1.42l-1.002.997a2.006 2.006 0 0 0-.563 1.082l-.494 2.877c-.138.803-1.13 1.117-1.709.54l-4.538-4.787c-.58-.576-.474-1.5.333-1.637l2.892-.492c.412-.07.743-.339 1.038-.633Zm4.318.753 4.583-4.742c1.357-1.35-.509-3.1-1.808-1.808l-4.794 4.54"/> </svg>
  );
};

export default Blushbrush01;
