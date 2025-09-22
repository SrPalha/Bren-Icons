import React from 'react';
import type { IconProps } from '../types';

const Filterremove: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.999 4.5c-.012-.435-.103-.747-.327-.993C20.212 3 19.396 3 17.766 3H6.234c-1.63 0-2.445 0-2.906.507-.461.508-.36 1.294-.158 2.866.06.459.158.72.457 1.076.969 1.15 2.742 3.197 5.23 5.057.228.17.377.448.402.755.28 3.425.537 5.765.674 6.917.071.604.741 1.069 1.293.678.927-.655 2.66-1.39 2.888-2.612.085-.45.2-1.164.331-2.244M21 7l-6 6m6 0-6-6"/> </svg>
  );
};

export default Filterremove;
