import React from 'react';
import type { IconProps } from '../types';

const Bluetoothnotconnected: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m4 3.993 16 16.02"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.01 7.98c0-1.128-.189-3.606.489-4.358.84-.735 4.167 2.08 5.784 3.433-.83.852-1.196 1.671-3.617 3.467M17.5 17.51c-2.84 2.061-4.017 3.288-4.871 2.925a.434.434 0 0 1-.202-.18c-.526-.886-.418-3.206-.418-4.284v-3.978l-7.031 4.713"/> </svg>
  );
};

export default Bluetoothnotconnected;
