import React from 'react';
import type { IconProps } from '../types';

const Brochure: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M18.5 17V7c0-1.886 0-2.828-.586-3.414C17.328 3 16.386 3 14.5 3h-5c-1.886 0-2.828 0-3.414.586C5.5 4.172 5.5 5.114 5.5 7v10c0 1.886 0 2.828.586 3.414C6.672 21 7.614 21 9.5 21h5c1.886 0 2.828 0 3.414-.586.586-.586.586-1.528.586-3.414Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18.5 6h.5c1.414 0 2.121 0 2.56.44C22 6.878 22 7.585 22 9v7c0 1.414 0 2.121-.44 2.56-.439.44-1.146.44-2.56.44h-.5M5.5 6H5c-1.414 0-2.121 0-2.56.44C2 6.878 2 7.585 2 9v7c0 1.414 0 2.121.44 2.56C2.878 19 3.585 19 5 19h.5m9-11h-5m5 4h-5m5 4h-5"/> </svg>
  );
};

export default Brochure;
