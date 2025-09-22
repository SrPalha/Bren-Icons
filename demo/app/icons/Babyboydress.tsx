import React from 'react';
import type { IconProps } from '../types';

const Babyboydress: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.947 9.003s-2.264 2.249-2.93 1.974c-.94-.389-1.346-4.157-.707-4.732l2.457-2.212C5.9 3.01 5.93 3 7.439 3h1.518C9.183 4.36 10.496 5.992 12 5.992c1.504 0 2.816-1.633 3.043-2.992h1.518c1.508 0 1.538.011 2.672 1.033l2.457 2.212c.64.575.233 4.343-.707 4.732-.666.275-2.934-1.974-2.934-1.974"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 8v10.527c0 .705.12 1.082.755 1.423 2.613 1.4 7.877 1.4 10.49 0 .635-.34.755-.718.755-1.423V8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 10c2 2.667 10 2.667 12 0"/> </svg>
  );
};

export default Babyboydress;
