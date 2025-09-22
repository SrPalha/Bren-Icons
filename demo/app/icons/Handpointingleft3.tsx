import React from 'react';
import type { IconProps } from '../types';

const Handpointingleft3: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 11.5v1a2 2 0 0 0 2 2m0 0h1m-1 0a1 1 0 0 0-1 1 2 2 0 0 0 2 2m0 0h1m-1 0a.847.847 0 0 0-.836.987l.058.342a2 2 0 0 0 1.972 1.671h1.473c2.173 0 3.26 0 4.125-.331.502-.192 1.142-.699 1.604-1.104a2.2 2.2 0 0 1 1.44-.565H22m-12-7H3.5a1.5 1.5 0 0 1 0-3h9.962l-1.625-1.62a1.683 1.683 0 0 1 .14-2.51 1.696 1.696 0 0 1 2.072-.033l4.598 3.6C19.527 8.626 20.883 9 22 9"/> </svg>
  );
};

export default Handpointingleft3;
