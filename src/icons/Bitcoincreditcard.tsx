import React from 'react';
import type { IconProps } from '../types';

const Bitcoincreditcard: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 11c0-3.537 0-5.306-1.053-6.487a4.377 4.377 0 0 0-.555-.522C19.138 3 17.26 3 13.5 3h-3c-3.759 0-5.638 0-6.893.99-.2.16-.386.334-.554.523C2 5.693 2 7.463 2 11s0 5.306 1.053 6.487c.168.189.354.364.554.522C4.862 19 6.741 19 10.5 19H12"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2 8h20"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.125 19.5v-6m1.875 0V12m0 9v-1.5m-1.875-3h3.75m0 0c.621 0 1.125.504 1.125 1.125v.75c0 .621-.504 1.125-1.125 1.125H15m4.875-3c.621 0 1.125-.504 1.125-1.125v-.75c0-.621-.504-1.125-1.125-1.125H15"/> </svg>
  );
};

export default Bitcoincreditcard;
