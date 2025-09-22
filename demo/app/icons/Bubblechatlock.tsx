import React from 'react';
import type { IconProps } from '../types';

const Bubblechatlock: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 2.05a10.57 10.57 0 0 0-1-.048c-5.522 0-10 4.284-10 9.567 0 2.538 1.033 4.844 2.719 6.556.371.377.619.892.519 1.422a5.292 5.292 0 0 1-1.087 2.348 6.5 6.5 0 0 0 4.224-.657c.454-.241.681-.362.842-.386.16-.025.39.018.848.104.638.12 1.286.18 1.935.18 4.83 0 9.065-3.277 10-7.634"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.995 12.002h.01m-4.005 0h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.754 5.17V3.78c0-.204.008-.412.082-.604.195-.51.713-1.178 1.655-1.178.943 0 1.48.668 1.676 1.178.073.192.082.4.082.605V5.17m-3.426 5.818H20.2a1.8 1.8 0 0 0 1.8-1.8v-2a1.8 1.8 0 0 0-1.8-1.8h-3.377a1.8 1.8 0 0 0-1.8 1.8v2a1.8 1.8 0 0 0 1.8 1.8Z"/> </svg>
  );
};

export default Bubblechatlock;
