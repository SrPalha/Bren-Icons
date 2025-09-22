import React from 'react';
import type { IconProps } from '../types';

const Usbconnected011: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path fill="#1B1C1B" d="M4.004 7.113C3.937 6.243 4.64 5.5 5.53 5.5h8.94c.89 0 1.593.743 1.525 1.613l-.183 2.379a9.872 9.872 0 0 1-1.68 4.785l-.6.885a3.077 3.077 0 0 1-2.548 1.338H9.016a3.077 3.077 0 0 1-2.547-1.338l-.601-.885a9.872 9.872 0 0 1-1.68-4.785l-.184-2.379Z" opacity=".4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10.984 16.5H9.016a3.077 3.077 0 0 1-2.547-1.338l-.601-.885a9.872 9.872 0 0 1-1.68-4.785l-.184-2.379C3.937 6.243 4.64 5.5 5.53 5.5h8.94c.89 0 1.593.743 1.525 1.613L15.928 8"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M13.5 6v-.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C12.107 2 11.404 2 10 2c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C6.5 3.393 6.5 4.096 6.5 5.5V6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 17v5M9 8.5h2m1 5s1 0 2 2c0 0 3.177-5 6-6"/> </svg>
  );
};

export default Usbconnected011;
