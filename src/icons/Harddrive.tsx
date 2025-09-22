import React from 'react';
import type { IconProps } from '../types';

const Harddrive: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="m20.71 8.701 1.209 4.028c.039.13.058.195.069.262l.003.02c.009.068.009.136.009.272 0 3.497 0 5.245-1.019 6.384-.099.11-.204.215-.314.314C19.528 21 17.78 21 14.283 21H9.717c-3.497 0-5.245 0-6.384-1.019a3.994 3.994 0 0 1-.314-.314C2 18.528 2 16.78 2 13.283c0-.136 0-.204.01-.271l.002-.02c.01-.068.03-.133.07-.263L3.29 8.7c.824-2.746 1.236-4.12 2.298-4.91C6.651 3 8.085 3 10.952 3h2.096c2.867 0 4.3 0 5.364.79 1.063.792 1.475 2.165 2.298 4.911Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2 13h20"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.989 17H18m-5 0h.011"/> </svg>
  );
};

export default Harddrive;
