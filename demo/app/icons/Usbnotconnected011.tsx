import React from 'react';
import type { IconProps } from '../types';

const Usbnotconnected011: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path fill="#1B1C1B" d="M4.504 7.113C4.437 6.243 5.14 5.5 6.03 5.5h8.94c.89 0 1.593.743 1.525 1.613l-.183 2.379a9.872 9.872 0 0 1-1.68 4.785l-.6.885a3.077 3.077 0 0 1-2.548 1.338H9.516a3.077 3.077 0 0 1-2.547-1.338l-.601-.885a9.872 9.872 0 0 1-1.68-4.785l-.184-2.379Z" opacity=".4"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M14 6v-.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C12.607 2 11.904 2 10.5 2c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C7 3.393 7 4.096 7 5.5V6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11 16.5H9.516a3.077 3.077 0 0 1-2.547-1.338l-.601-.885a9.872 9.872 0 0 1-1.68-4.785l-.184-2.379C4.437 6.243 5.14 5.5 6.03 5.5h8.94c.89 0 1.593.743 1.525 1.613L16.389 8.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.5 17v5m-1-13.5h2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m19.5 11-6 6m6 0-6-6"/> </svg>
  );
};

export default Usbnotconnected011;
