import React from 'react';
import type { IconProps } from '../types';

const Userlock01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.5 22H6.59c-1.545 0-2.774-.752-3.877-1.803-2.26-2.153 1.45-3.873 2.865-4.715a10.665 10.665 0 0 1 7.922-1.187"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M16.5 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M16.76 16.378c-1.08 0-1.543.78-1.663 1.26-.12.479-.12 2.218-.048 2.938.24.899.84 1.27 1.428 1.39.54.049 2.82.03 3.48.03.96.019 1.68-.341 1.98-1.42.06-.36.12-2.34-.03-2.939-.318-.96-1.041-1.259-1.641-1.259m-3.506 0h3.506m-3.506 0s-.002-.826 0-1.26c0-.398-.034-.78.156-1.13.71-1.413 2.75-1.27 3.254.17.087.237.093.612.09.96-.003.442.006 1.26.006 1.26"/> </svg>
  );
};

export default Userlock01;
