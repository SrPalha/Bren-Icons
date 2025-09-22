import React from 'react';
import type { IconProps } from '../types';

const Victoryfinger1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m8.518 13-.553-2.957m0 0L6.85 4.076a1.752 1.752 0 0 1 3.44-.667l1.213 6.072 1.22-6.073a1.752 1.752 0 0 1 2.065-1.375c.938.19 1.483 1.105 1.306 2.048L15.068 9.83m-7.103.213c-1.893 1.775-3.053 2.817-3.291 3.753-.265 1.044-.484 2.19 1.404 4.486.622.756 1.146 1.28 1.267 1.48.212.349.659.61.659 2.24m7.08-12.153c2.262.642 3.733 1.861 4.154 2.73.47.97.337 2.427-.648 4.827-.388.947-.864 1.486-.943 1.706-.183.514-.462 1.067-.333 2.866"/> </svg>
  );
};

export default Victoryfinger1;
