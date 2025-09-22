import React from 'react';
import type { IconProps } from '../types';

const Atomicpower: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.663 8.85c.59-2.04.424-3.81-.64-4.874-2.249-2.249-7.664-.48-12.096 3.951A22.28 22.28 0 0 0 6.6 9.377m10.8 5.247c-.411.49-.854.975-1.327 1.449-4.432 4.431-9.847 6.2-12.097 3.95-1.14-1.14-1.248-3.095-.498-5.323"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12.675 9.3-1.75 2.07c-.215.278-.321.416-.255.523.066.107.259.107.644.107h1.373c.385 0 .578 0 .644.107.066.107-.04.246-.255.523l-1.762 2.07M9.75 17.706a22.078 22.078 0 0 1-1.823-1.633c-4.431-4.432-6.2-9.847-3.95-12.097 1.14-1.14 3.095-1.248 5.323-.498m4.95 16.883c2.413.92 4.557.88 5.774-.337 2.249-2.25.48-7.665-3.951-12.097a22.088 22.088 0 0 0-1.823-1.633"/> </svg>
  );
};

export default Atomicpower;
