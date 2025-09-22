import React from 'react';
import type { IconProps } from '../types';

const Calendarlove02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 2v2M6 2v2M3 8h18M2.5 12.243c0-4.357 0-6.536 1.252-7.89C5.004 3 7.02 3 11.05 3h1.9c4.03 0 6.046 0 7.298 1.354C21.5 5.707 21.5 7.886 21.5 12.244v.513c0 4.357 0 6.536-1.252 7.89C18.996 22 16.98 22 12.95 22h-1.9c-4.03 0-6.046 0-7.298-1.354C2.5 19.293 2.5 17.114 2.5 12.756v-.513Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M9.388 12.331c.939-.548 1.758-.327 2.25.025.202.144.303.216.362.216.06 0 .16-.072.362-.216.492-.352 1.311-.573 2.25-.025 1.232.72 1.51 3.094-1.33 5.097-.542.381-.813.572-1.282.572-.47 0-.74-.19-1.281-.572-2.841-2.003-2.563-4.377-1.33-5.097Z"/> </svg>
  );
};

export default Calendarlove02;
