import React from 'react';
import type { IconProps } from '../types';

const Loyaltycard: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2 12c0-4.007 0-6.01 1.172-7.255C4.343 3.5 6.229 3.5 10 3.5h4c3.771 0 5.657 0 6.828 1.245C22 5.99 22 7.993 22 12s0 6.01-1.172 7.255C19.657 20.5 17.771 20.5 14 20.5h-4c-3.771 0-5.657 0-6.828-1.245C2 18.01 2 16.007 2 12Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6.888 10.831c.939-.548 1.758-.327 2.25.025.202.144.303.216.362.216.06 0 .16-.072.362-.216.492-.352 1.311-.573 2.25-.025 1.232.72 1.51 3.094-1.33 5.097-.542.381-.813.572-1.282.572-.47 0-.74-.19-1.281-.572-2.841-2.003-2.563-4.377-1.33-5.097Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 16.5h-3"/> </svg>
  );
};

export default Loyaltycard;
