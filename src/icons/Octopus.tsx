import React from 'react';
import type { IconProps } from '../types';

const Octopus: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M16.093 13C17.23 12.098 18 10.85 18 9.47 18 6.72 14.945 2 12 2 9.054 2 6 6.72 6 9.47c0 1.38.77 2.628 1.908 3.53"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.012 10h-.01m-3.99 0h-.01"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 14c-.484 4 .4 5.714 3.5 8m-6.5-8c.484 4-.4 5.714-3.5 8m6.5-8c1 2 3.58 4.5 5.547 4.5 1.969 0 2.953-1.231 2.953-2.75S20.898 13 19.54 13m-9.04 1c-1 2-3.58 4.5-5.548 4.5S2 17.269 2 15.75 3.102 13 4.46 13"/> </svg>
  );
};

export default Octopus;
