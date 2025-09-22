import React from 'react';
import type { IconProps } from '../types';

const Touchpad2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.196 14.144 13 15.762V7.5a1.5 1.5 0 0 1 3 0v4.482l1.789.315c1.475.243 2.212.365 2.731.708.858.566 1.48 1.416 1.48 2.657 0 .864-.194 1.444-.666 3.002-.299.989-.448 1.483-.692 1.874a3.09 3.09 0 0 1-1.677 1.33c-.414.132-.887.132-1.833.132h-.803c-1.258 0-1.887 0-2.447-.254a2.941 2.941 0 0 1-.294-.154c-.532-.319-.929-.856-1.722-1.931L9.298 16.18a1.582 1.582 0 0 1-.007-1.839c.47-.647 1.333-.736 1.905-.197Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M22 10c0-3.771 0-5.657-1.172-6.828C19.657 2 17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172 2 4.343 2 6.229 2 10v2c0 1.864 0 2.796.304 3.53a4 4 0 0 0 2.165 2.165c.59.245 1.307.293 2.531.303"/> </svg>
  );
};

export default Touchpad2;
