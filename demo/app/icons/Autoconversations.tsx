import React from 'react';
import type { IconProps } from '../types';

const Autoconversations: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.944 8.04h5.884M2 18l5.498-5.414a.601.601 0 0 1 .78-.055l4.246 3.14c.25.185.599.15.807-.083l7.954-8.885M18.108 6h2.823c.547 0 .995.44 1.006.992L22 10.065"/> </svg>
  );
};

export default Autoconversations;
