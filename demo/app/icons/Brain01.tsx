import React from 'react';
import type { IconProps } from '../types';

const Brain01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.145 5.208a3.501 3.501 0 0 0-5.92 1.053A3 3 0 0 0 5 9.051m10.145-3.843a4.5 4.5 0 0 1 5.492 6.065m-5.492-6.065A4.511 4.511 0 0 0 12.028 9M5 9.05A2.5 2.5 0 1 0 4.5 14h4.55M5 9.05c.013.749.3 1.43.764 1.95m14.873.273A2.5 2.5 0 0 0 17.05 13m3.587-1.727A2.5 2.5 0 0 1 19.5 16a1.733 1.733 0 0 0-1.622 2.34L18.5 20m-9.45-6a2.5 2.5 0 0 0 2.45 2c.255 0 .382 0 .5.014a2 2 0 0 1 1.435.887c.065.099.122.213.236.44L15 20m-5.95-6a2.496 2.496 0 0 1 .95-2.5"/> </svg>
  );
};

export default Brain01;
