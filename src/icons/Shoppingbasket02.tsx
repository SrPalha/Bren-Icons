import React from 'react';
import type { IconProps } from '../types';

const Shoppingbasket02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M4.34 16.878 3.179 9.936c-.19-1.13-.284-1.694.007-2.065.292-.371.83-.371 1.906-.371H18.91c1.076 0 1.614 0 1.906.37.29.372.196.936.007 2.066l-1.163 6.942c-.41 2.448-.615 3.672-1.427 4.397-.813.725-1.98.725-4.313.725h-3.84c-2.333 0-3.5 0-4.312-.725-.812-.724-1.017-1.949-1.427-4.397ZM7 7.5V7a5 5 0 0 1 10 0v.5m-12.5 10h15"/> </svg>
  );
};

export default Shoppingbasket02;
