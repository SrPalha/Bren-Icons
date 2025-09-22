import React from 'react';
import type { IconProps } from '../types';

const Chartaverage: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 21H10c-3.3 0-4.95 0-5.975-1.025C3 18.95 3 17.3 3 14V3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 12h.009m2.99 0h.008m2.99 0h.008m2.99 0h.009m2.989 0h.009m2.989 0H21"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6 7c.673-1.122 1.587-2 2.993-2 5.943 0 2.602 12 8.989 12 1.416 0 2.324-.884 3.018-2"/> </svg>
  );
};

export default Chartaverage;
