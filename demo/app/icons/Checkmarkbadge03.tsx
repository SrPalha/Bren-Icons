import React from 'react';
import type { IconProps } from '../types';

const Checkmarkbadge03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.262 3.6C13.196 2.532 12.662 2 12 2c-.662 0-1.196.533-2.262 1.6-.64.64-1.274.936-2.186.936-.796 0-1.93-.154-2.552.473-.618.623-.464 1.752-.464 2.543 0 .912-.297 1.546-.937 2.186C2.533 10.804 2 11.338 2 12c0 .662.533 1.196 1.6 2.262.716.717.936 1.18.936 2.186 0 .796-.154 1.93.473 2.552.623.617 1.752.464 2.543.464.971 0 1.44.19 2.133.883.59.59 1.381 1.653 2.315 1.653.934 0 1.725-1.063 2.315-1.653.694-.693 1.162-.883 2.133-.883.791 0 1.92.154 2.543-.464m0 0c.627-.622.473-1.756.473-2.552 0-1.007.22-1.47.937-2.186C21.467 13.196 22 12.662 22 12c0-.662-.533-1.196-1.6-2.262M18.99 19H19"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10.308S10.25 10 12 14c0 0 5.059-10 10-12"/> </svg>
  );
};

export default Checkmarkbadge03;
