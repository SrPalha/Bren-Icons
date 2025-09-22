import React from 'react';
import type { IconProps } from '../types';

const Centralshaheedminar: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 22V10.201a.2.2 0 0 1 .26-.192l3.1.98c.083.027.14.105.14.193V22M21 22V10.201a.2.2 0 0 0-.26-.192l-3.1.98a.201.201 0 0 0-.14.193V22M9 22V8h6v14M2 22h20M9 8 7.172 3.316C6.798 2.254 6.992 2 8.177 2h7.646c1.186 0 1.38.254 1.005 1.316L15 8"/> </svg>
  );
};

export default Centralshaheedminar;
