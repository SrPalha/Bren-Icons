import React from 'react';
import type { IconProps } from '../types';

const Dress06: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.177 9.032c3.726 3.637-2.052 8.337.48 11.531 1.402 1.768 11.073 2.059 12.704 0 2.532-3.192-3.232-7.887.48-11.53"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.355 13c-2.265-.209-4.112-1.672-4.345-3.761a1.817 1.817 0 0 1 .128-.875c.715-1.793 2.714-4.833 5.778-6.316a.492.492 0 0 1 .6.146c.76.973 2.069 2.49 3.484 2.49s2.724-1.517 3.484-2.49a.492.492 0 0 1 .6-.146c3.064 1.483 5.063 4.523 5.778 6.316.11.279.161.577.128.875-.233 2.09-2.06 3.55-4.326 3.758"/> </svg>
  );
};

export default Dress06;
