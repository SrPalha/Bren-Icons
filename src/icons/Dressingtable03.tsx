import React from 'react';
import type { IconProps } from '../types';

const Dressingtable03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2 15c0-.943 0-1.414.293-1.707C2.586 13 3.057 13 4 13h16c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v2c0 .943 0 1.414-.293 1.707C21.414 19 20.943 19 20 19H4c-.943 0-1.414 0-1.707-.293C2 18.414 2 17.943 2 17v-2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 16h2m6.5 3c-.8 1.6 0 2.667.5 3M4.5 19c.8 1.6 0 2.667-.5 3m0-9V2m16 11V2"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M4 3.5h4.086c.196 0 .294 0 .378-.031.085-.031.17-.105.34-.251 1.887-1.624 4.505-1.624 6.392 0 .17.146.255.22.34.25.084.032.182.032.378.032H20"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9 7 1-1m0 3.5 2-2"/> </svg>
  );
};

export default Dressingtable03;
