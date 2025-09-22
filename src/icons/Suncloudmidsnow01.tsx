import React from 'react';
import type { IconProps } from '../types';

const Suncloudmidsnow01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M9 3.655A3.836 3.836 0 0 0 5.844 2 3.85 3.85 0 0 0 2 5.857C2 7.154 2.638 8.3 3.616 9"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.478 9.01h.022c2.485 0 4.5 2.017 4.5 4.506 0 1.962-1.252 3.365-3 3.984m-1.522-8.49A5.504 5.504 0 0 0 12 3a5.504 5.504 0 0 0-5.48 5.03m10.958.98a5.488 5.488 0 0 1-1.235 3.004M6.52 8.03A5.005 5.005 0 0 0 2 13.015C2 15.07 3.234 16.71 5 17.5m1.52-9.47a4.973 4.973 0 0 1 3.48.98M12 14v6m2.5-4.5-5 3m0-3 5 3"/> </svg>
  );
};

export default Suncloudmidsnow01;
